import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';

// POST /api/admin/init - 初始化默认管理员账号
export async function POST() {
  try {
    const client = getSupabaseClient();
    
    // 检查是否已存在管理员
    const { data: existingAdmin } = await client
      .from('admin_users')
      .select('id')
      .eq('username', 'admin')
      .single();
    
    if (existingAdmin) {
      return NextResponse.json({
        message: '管理员账号已存在',
        credentials: { username: 'admin', password: 'admin123' },
      });
    }
    
    // 创建默认管理员
    const { error } = await client
      .from('admin_users')
      .insert({
        username: 'admin',
        password: 'admin123', // 生产环境应使用 bcrypt 加密
        email: 'admin@example.com',
        name: '管理员',
        role: 'admin',
        is_active: true,
      });
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json({
      message: '管理员账号创建成功',
      credentials: { username: 'admin', password: 'admin123' },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
