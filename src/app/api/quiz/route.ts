import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';

// POST /api/quiz - 保存评估记录并发送邮件通知
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      wechat,
      basicAnswer,
      professionalAnswers,
      resultType,
      resultTitle,
      resultBadge,
      recommendation,
      scoreA,
      scoreB,
      scoreC,
    } = body;

    // 验证必填字段
    if (!name || !basicAnswer || !professionalAnswers) {
      return NextResponse.json(
        { error: '缺少必填字段' },
        { status: 400 }
      );
    }

    // 验证联系方式三选一
    if (!email && !phone && !wechat) {
      return NextResponse.json(
        { error: '请至少填写一项联系方式（微信、邮箱或电话）' },
        { status: 400 }
      );
    }

    const client = getSupabaseClient();

    // 保存评估记录到数据库
    const { data, error } = await client
      .from('quiz_submissions')
      .insert({
        name,
        email: email || null,
        phone: phone || null,
        wechat: wechat || null,
        basic_answer: basicAnswer,
        professional_answers: professionalAnswers,
        result_type: resultType,
        result_title: resultTitle,
        result_badge: resultBadge,
        recommendation,
        score_a: scoreA,
        score_b: scoreB,
        score_c: scoreC,
        email_sent: false,
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: '保存评估记录失败' },
        { status: 500 }
      );
    }

    // 发送邮件通知
    try {
      await sendNotificationEmail({
        name,
        email,
        phone,
        wechat,
        resultTitle,
        resultBadge,
        recommendation,
        scoreA,
        scoreB,
        scoreC,
        basicAnswer,
        professionalAnswers,
      });

      // 更新邮件发送状态
      await client
        .from('quiz_submissions')
        .update({ email_sent: true })
        .eq('id', data.id);
    } catch (emailError) {
      console.error('Email error:', emailError);
      // 邮件发送失败不影响主流程
    }

    return NextResponse.json({
      success: true,
      data: {
        id: data.id,
        message: '评估记录保存成功',
      },
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    );
  }
}

// 发送通知邮件
async function sendNotificationEmail(quizData: {
  name: string;
  email?: string;
  phone?: string;
  wechat?: string;
  resultTitle: string;
  resultBadge: string;
  recommendation: string;
  scoreA: number;
  scoreB: number;
  scoreC: number;
  basicAnswer: string;
  professionalAnswers: string;
}) {
  const targetEmail = 'hemingjiudian@gmail.com';
  
  // 构建邮件内容
  const emailContent = `
移民评估新用户提交

【用户信息】
称呼：${quizData.name}
微信：${quizData.wechat || '未填写'}
邮箱：${quizData.email || '未填写'}
电话：${quizData.phone || '未填写'}

【评估结果】
结果类型：${quizData.resultTitle}
评级：${quizData.resultBadge}
推荐方案：${quizData.recommendation}

【评分详情】
顶尖成就(A)：${quizData.scoreA} 项
行业认可(B)：${quizData.scoreB} 项
基础积累(C)：${quizData.scoreC} 项

【答题详情】
基础门槛答案：${quizData.basicAnswer}
专业评估答案：${quizData.professionalAnswers}

提交时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
  `.trim();

  // 使用 Resend API 发送邮件
  const resendApiKey = process.env.RESEND_API_KEY;
  
  if (resendApiKey) {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@resend.dev',
        to: targetEmail,
        subject: `【移民评估】新用户提交 - ${quizData.name}`,
        text: emailContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }
  } else {
    // 如果没有配置 Resend API，记录日志
    console.log('Email notification (no API key configured):');
    console.log(emailContent);
  }
}
