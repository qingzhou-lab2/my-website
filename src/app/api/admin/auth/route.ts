import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';
import { cookies } from 'next/headers';

// POST /api/admin/auth/login - 登录
export async function POST(request: NextRequest) {
  try {
    const client = getSupabaseClient();
    const body = await request.json();
    const { username, password } = body;
    
    // 查询管理员
    const { data: admin, error } = await client
      .from('admin_users')
      .select('*')
      .eq('username', username)
      .eq('is_active', true)
      .single();
    
    if (error || !admin) {
      return NextResponse.json(
        { error: '用户名或密码错误' },
        { status: 401 }
      );
    }
    
    // 简单密码验证（生产环境应使用 bcrypt）
    if (admin.password !== password) {
      return NextResponse.json(
        { error: '用户名或密码错误' },
        { status: 401 }
      );
    }
    
    // 更新最后登录时间
    await client
      .from('admin_users')
      .update({ last_login_at: new Date().toISOString() })
      .eq('id', admin.id);
    
    // 设置 cookie
    const cookieStore = await cookies();
    cookieStore.set('admin_session', admin.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    
    return NextResponse.json({
      user: {
        id: admin.id,
        username: admin.username,
        name: admin.name,
        role: admin.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET /api/admin/auth/me - 获取当前登录用户
export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('admin_session')?.value;
    
    if (!sessionId) {
      return NextResponse.json({ error: '未登录' }, { status: 401 });
    }
    
    const client = getSupabaseClient();
    const { data: admin, error } = await client
      .from('admin_users')
      .select('id, username, name, role, email')
      .eq('id', sessionId)
      .single();
    
    if (error || !admin) {
      return NextResponse.json({ error: '未登录' }, { status: 401 });
    }
    
    return NextResponse.json({ user: admin });
  } catch (error) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }
}

// DELETE /api/admin/auth/logout - 登出
export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('admin_session');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
