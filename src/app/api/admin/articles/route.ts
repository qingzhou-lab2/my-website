import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';

// GET /api/admin/articles - 获取文章列表
export async function GET(request: NextRequest) {
  try {
    const client = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    let query = client
      .from('articles')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range((page - 1) * pageSize, page * pageSize - 1);
    
    if (status && status !== 'all') {
      query = query.eq('status', status);
    }
    
    if (category && category !== 'all') {
      query = query.eq('category_id', parseInt(category));
    }
    
    if (search) {
      query = query.or(`title.ilike.%${search}%,content.ilike.%${search}%`);
    }
    
    const { data, error, count } = await query;
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json({
      data,
      pagination: {
        page,
        pageSize,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / pageSize),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/admin/articles - 创建文章
export async function POST(request: NextRequest) {
  try {
    const client = getSupabaseClient();
    const body = await request.json();
    
    const {
      title,
      slug,
      excerpt,
      content,
      categoryId,
      author,
      coverImage,
      tags,
      status = 'draft',
      isFeatured = false,
      publishedAt,
    } = body;
    
    // 生成 slug 如果没有提供
    const articleSlug = slug || title
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
      .replace(/^-|-$/g, '');
    
    const { data, error } = await client
      .from('articles')
      .insert({
        title,
        slug: articleSlug,
        excerpt,
        content,
        category_id: categoryId,
        author,
        cover_image: coverImage,
        tags,
        status,
        is_featured: isFeatured,
        published_at: status === 'published' ? new Date().toISOString() : publishedAt,
      })
      .select()
      .single();
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
