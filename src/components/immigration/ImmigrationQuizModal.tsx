'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  X,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Star,
  TrendingUp,
  Mail,
  Phone,
} from 'lucide-react';
import { ContactSelectionModal } from './ContactSelectionModal';

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    value: 'A' | 'B' | 'C' | 'D';
    label: string;
    description?: string;
  }[];
}

// 基础门槛问题
const basicQuestion: QuizQuestion = {
  id: 'basic',
  question: '您的教育背景与从业经历？',
  options: [
    {
      value: 'A',
      label: '拥有博士学位',
    },
    {
      value: 'B',
      label: '拥有硕士学位（或本科+5年相关工作经验）',
    },
    {
      value: 'C',
      label: '本科学历且工作经验少于5年',
    },
    {
      value: 'D',
      label: '其他',
    },
  ],
};

// 专业成就评估问题（12题）
const professionalQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: '您在专业领域获得过什么级别的奖项？',
    options: [
      { value: 'A', label: '顶尖级别' },
      { value: 'B', label: '行业级别' },
      { value: 'C', label: '地方级别' },
      { value: 'D', label: '暂无' },
    ],
  },
  {
    id: 'q2',
    question: '您是否在权威专业协会/机构担任重要职务？',
    options: [
      { value: 'A', label: '核心领导' },
      { value: 'B', label: '重要职务' },
      { value: 'C', label: '普通会员' },
      { value: 'D', label: '未加入' },
    ],
  },
  {
    id: 'q3',
    question: '您的成就是否被主流媒体（电视/报纸/大站）报道过？',
    options: [
      { value: 'A', label: '国家级' },
      { value: 'B', label: '省级/专业级' },
      { value: 'C', label: '地方/自媒体' },
      { value: 'D', label: '未报道' },
    ],
  },
  {
    id: 'q4',
    question: '您是否担任过专业领域的评委或评审工作？',
    options: [
      { value: 'A', label: '国家/国际级' },
      { value: 'B', label: '省部/行业级' },
      { value: 'C', label: '内部/地方' },
      { value: 'D', label: '无' },
    ],
  },
  {
    id: 'q5',
    question: '您在原创性贡献（专利/技术/理论）表现如何？',
    options: [
      { value: 'A', label: '核心发明/重大成果' },
      { value: 'B', label: '一定数量专利' },
      { value: 'C', label: '参与研发' },
      { value: 'D', label: '无' },
    ],
  },
  {
    id: 'q6',
    question: '您的学术演讲、讲座及行业分享频率如何？',
    options: [
      { value: 'A', label: '国际/国家级' },
      { value: 'B', label: '行业/省部级' },
      { value: 'C', label: '内部/地方' },
      { value: 'D', label: '很少' },
    ],
  },
  {
    id: 'q7',
    question: '您的论文发表、专著出版或行业文章情况？',
    options: [
      { value: 'A', label: '顶级期刊/专著' },
      { value: 'B', label: '核心期刊/参编' },
      { value: 'C', label: '少量文章' },
      { value: 'D', label: '无' },
    ],
  },
  {
    id: 'q8',
    question: '您是否在知名机构/企业担任过领导职务？',
    options: [
      { value: 'A', label: '国家/国际级核心' },
      { value: 'B', label: '大型企业中高层' },
      { value: 'C', label: '项目负责' },
      { value: 'D', label: '无' },
    ],
  },
  {
    id: 'q9',
    question: '您的薪酬水平是否显著高于同行平均水平？',
    options: [
      { value: 'A', label: '远高于' },
      { value: 'B', label: '高于' },
      { value: 'C', label: '持平' },
      { value: 'D', label: '低于' },
    ],
  },
  {
    id: 'q10',
    question: '潜在推荐人的背景及资历如何？',
    options: [
      { value: 'A', label: '院士/泰斗' },
      { value: 'B', label: '资深专家' },
      { value: 'C', label: '部门负责' },
      { value: 'D', label: '普通同事' },
    ],
  },
  {
    id: 'q11',
    question: '您的作品或成果是否参加过重要展览/展示？',
    options: [
      { value: 'A', label: '国家/国际级' },
      { value: 'B', label: '省级/行业级' },
      { value: 'C', label: '地方/内部' },
      { value: 'D', label: '无' },
    ],
  },
  {
    id: 'q12',
    question: '您的成果是否创造了显著的商业或经济价值？',
    options: [
      { value: 'A', label: '巨大价值' },
      { value: 'B', label: '显著成功' },
      { value: 'C', label: '一定认可' },
      { value: 'D', label: '尚无' },
    ],
  },
];

interface ImmigrationQuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type QuizStage = 'basic' | 'professional' | 'result' | 'contact';

export function ImmigrationQuizModal({
  open,
  onOpenChange,
}: ImmigrationQuizModalProps) {
  const [stage, setStage] = useState<QuizStage>('basic');
  const [basicAnswer, setBasicAnswer] = useState<'A' | 'B' | 'C' | 'D' | ''>('');
  const [professionalAnswers, setProfessionalAnswers] = useState<
    Record<string, 'A' | 'B' | 'C' | 'D'>
  >({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  // 新增：用户称呼和联系方式（必填）
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState({ wechat: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!open) {
      resetQuiz();
    }
  }, [open]);

  const resetQuiz = () => {
    setStage('basic');
    setBasicAnswer('');
    setProfessionalAnswers({});
    setCurrentQuestionIndex(0);
    setResult(null);
    setContactInfo({ email: '', phone: '' });
    setContactSubmitted(false);
    setUserName('');
    setUserContact({ wechat: '', email: '', phone: '' });
    setIsSubmitting(false);
  };

  const handleBasicNext = () => {
    // 验证称呼必填
    if (!userName.trim()) {
      alert('请输入您的称呼');
      return;
    }
    // 验证联系方式三选一
    const hasContact = userContact.wechat.trim() || userContact.email.trim() || userContact.phone.trim();
    if (!hasContact) {
      alert('请填写至少一项联系方式');
      return;
    }
    if (basicAnswer) {
      setStage('professional');
      setCurrentQuestionIndex(0);
    }
  };

  const handleProfessionalNext = () => {
    if (currentQuestionIndex < professionalQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const handleProfessionalPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setStage('basic');
    }
  };

  const calculateResult = () => {
    const answers = professionalAnswers;
    let countA = 0;
    let countB = 0;
    let countC = 0;

    Object.values(answers).forEach((value) => {
      if (value === 'A') countA++;
      if (value === 'B') countB++;
      if (value === 'C') countC++;
    });

    let resultType = '';
    let resultTitle = '';
    let resultDescription = '';
    let resultIcon: React.ReactNode = null;
    let resultBadge = '';
    let recommendation = '';

    // 判定逻辑
    if (countA >= 3) {
      // EB-1A 卓越级
      resultType = 'eb1a_excellent';
      resultTitle = 'EB-1A 卓越级 (极高概率)';
      resultDescription =
        '您的背景高度符合 EB-1A 杰出人才标准。建议立即预约律师进行深度材料规划。';
      resultIcon = <Trophy className="w-12 h-12" />;
      resultBadge = '卓越级';
      recommendation = 'eb1a';
    } else if (countB >= 3 && (basicAnswer === 'A' || basicAnswer === 'B')) {
      // NIW 稳健级
      resultType = 'niw_stable';
      resultTitle = 'NIW 稳健级 (高概率)';
      resultDescription =
        '您在行业内具备极强的竞争力，非常适合申请 NIW 国家利益豁免。建议通过最优路径规划提升成功率。';
      resultIcon = <Star className="w-12 h-12" />;
      resultBadge = '稳健级';
      recommendation = 'niw';
    } else if (countC > countB) {
      // 潜力待提升级
      resultType = 'potential';
      resultTitle = '潜力待提升级';
      resultDescription =
        '您已具备一定的行业基础，但距离直接获批仍需针对性背景提升。建议联系专家进行长线陪跑规划。';
      resultIcon = <TrendingUp className="w-12 h-12" />;
      resultBadge = '待提升';
      recommendation = 'potential';
    } else {
      // 默认
      resultType = 'potential';
      resultTitle = '潜力待提升级';
      resultDescription =
        '您已具备一定的行业基础，但距离直接获批仍需针对性背景提升。建议联系专家进行长线陪跑规划。';
      resultIcon = <TrendingUp className="w-12 h-12" />;
      resultBadge = '待提升';
      recommendation = 'potential';
    }

    setResult({
      type: resultType,
      title: resultTitle,
      description: resultDescription,
      icon: resultIcon,
      badge: resultBadge,
      recommendation,
      scores: { countA, countB, countC },
    });
    setStage('result');

    // 提交评估记录到后端
    submitQuizResult({
      resultType,
      resultTitle,
      resultBadge,
      recommendation,
      countA,
      countB,
      countC,
    });
  };

  // 提交评估记录到后端
  const submitQuizResult = async (resultData: {
    resultType: string;
    resultTitle: string;
    resultBadge: string;
    recommendation: string;
    countA: number;
    countB: number;
    countC: number;
  }) => {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userName,
          wechat: userContact.wechat,
          email: userContact.email,
          phone: userContact.phone,
          basicAnswer: basicAnswer,
          professionalAnswers: JSON.stringify(professionalAnswers),
          resultType: resultData.resultType,
          resultTitle: resultData.resultTitle,
          resultBadge: resultData.resultBadge,
          recommendation: resultData.recommendation,
          scoreA: resultData.countA,
          scoreB: resultData.countB,
          scoreC: resultData.countC,
        }),
      });

      if (!response.ok) {
        console.error('Failed to submit quiz result');
      }
    } catch (error) {
      console.error('Error submitting quiz result:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = () => {
    if (contactInfo.email || contactInfo.phone) {
      // 这里可以发送到后端
      console.log('Contact info:', contactInfo);
      console.log('Quiz result:', result);
      setContactSubmitted(true);
    }
  };

  const allQuestions = [basicQuestion, ...professionalQuestions];
  const totalSteps = allQuestions.length;
  const currentStep =
    stage === 'basic'
      ? 1
      : stage === 'professional'
      ? currentQuestionIndex + 2
      : totalSteps;
  const progress = (currentStep / totalSteps) * 100;

  const currentQuestion =
    stage === 'basic'
      ? basicQuestion
      : professionalQuestions[currentQuestionIndex];

  const currentAnswer =
    stage === 'basic' ? basicAnswer : professionalAnswers[currentQuestion.id];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            {stage === 'basic' && '移民类型评估测试'}
            {stage === 'professional' && '专业成就评估'}
            {stage === 'result' && '评估结果'}
            {stage === 'contact' && '获取完整报告'}
          </DialogTitle>
          <DialogDescription>
            {stage === 'basic' && '基于洛杉矶/纽约持牌律所评估逻辑，为您提供专业建议'}
            {stage === 'professional' &&
              `问题 ${currentQuestionIndex + 1} / ${professionalQuestions.length}`}
            {stage === 'result' && '根据您的回答，为您生成专业评估结果'}
            {stage === 'contact' && '输入联系方式，获取完整 PDF 评估报告'}
          </DialogDescription>
        </DialogHeader>

        {stage !== 'result' && stage !== 'contact' && (
          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>
                  {stage === 'basic' ? '基础门槛' : '专业评估'} ·{' '}
                  {currentStep}/{totalSteps}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Current Question */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {currentQuestion.question}
              </h3>

              <RadioGroup
                value={currentAnswer || ''}
                onValueChange={(value: 'A' | 'B' | 'C' | 'D') => {
                  if (stage === 'basic') {
                    setBasicAnswer(value);
                  } else {
                    setProfessionalAnswers({
                      ...professionalAnswers,
                      [currentQuestion.id]: value,
                    });
                  }
                }}
              >
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.value}
                    className="space-y-2 p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem
                        value={option.value}
                        id={`${currentQuestion.id}-${option.value}`}
                        className="w-5 h-5"
                      />
                      <div className="flex-1">
                        <Label
                          htmlFor={`${currentQuestion.id}-${option.value}`}
                          className="flex items-center gap-2 cursor-pointer text-base font-medium"
                        >
                          <Badge
                            variant="outline"
                            className={
                              option.value === 'A'
                                ? 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 border-amber-300'
                                : option.value === 'B'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-300'
                                : option.value === 'C'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-300'
                                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300'
                            }
                          >
                            {option.value}
                          </Badge>
                          {option.label}
                        </Label>
                        {option.description && (
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 ml-9">
                            {option.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* 用户信息输入（仅 basic 阶段显示） */}
            {stage === 'basic' && (
              <div className="space-y-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-red-500">*</span>
                  请填写您的联系方式（必填）
                </h4>
                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="userName" className="mb-2 block">
                        称呼 <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="userName"
                        type="text"
                        placeholder="您的称呼"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="userWechat" className="mb-2 block">
                        微信
                      </Label>
                      <Input
                        id="userWechat"
                        type="text"
                        placeholder="微信号"
                        value={userContact.wechat}
                        onChange={(e) =>
                          setUserContact({ ...userContact, wechat: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="userEmail" className="mb-2 block">
                        邮箱
                      </Label>
                      <Input
                        id="userEmail"
                        type="email"
                        placeholder="your@email.com"
                        value={userContact.email}
                        onChange={(e) =>
                          setUserContact({ ...userContact, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="userPhone" className="mb-2 block">
                        电话
                      </Label>
                      <Input
                        id="userPhone"
                        type="tel"
                        placeholder="+86 1xx xxxx xxxx"
                        value={userContact.phone}
                        onChange={(e) =>
                          setUserContact({ ...userContact, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  * 微信、邮箱、电话至少填写一项，方便我们为您提供专业评估建议
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-4">
              {stage === 'basic' ? (
                <div className="flex-1" />
              ) : (
                <Button
                  variant="outline"
                  onClick={handleProfessionalPrevious}
                >
                  上一题
                </Button>
              )}
              <Button
                onClick={
                  stage === 'basic' ? handleBasicNext : handleProfessionalNext
                }
                disabled={!currentAnswer || (stage === 'basic' && (!userName.trim() || (!userContact.email.trim() && !userContact.phone.trim())))}
              >
                {stage === 'basic' ? '开始专业评估' : '下一题'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Result Stage */}
        {stage === 'result' && result && (
          <div className="space-y-6 py-4">
            {/* Result Card */}
            <Card className="border-2 border-blue-500 dark:border-blue-400">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
                    {result.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-600 hover:bg-blue-700">
                        {result.badge}
                      </Badge>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        评估完成
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {result.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {result.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Score Details */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-1">
                    {result.scores.countA}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    顶尖成就
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {result.scores.countB}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    行业认可
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                    {result.scores.countC}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    基础积累
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recommendation */}
            {result.recommendation === 'eb1a' && (
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  推荐方案
                </h4>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  EB-1A 杰出人才移民 - 无需雇主担保，无排期，审批速度快（15天）
                </p>
              </div>
            )}

            {result.recommendation === 'niw' && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  推荐方案
                </h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  EB-2 NIW 国家利益豁免 - 无需雇主担保，适合高学历专业人士
                </p>
              </div>
            )}

            {result.recommendation === 'potential' && (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">
                  推荐移民路径
                </h4>
                <div className="space-y-4">
                  {/* L1 推荐 */}
                  <div className="bg-white dark:bg-green-900/30 p-3 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="flex items-start gap-2 mb-2">
                      <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 border-green-300">
                        L1
                      </Badge>
                      <span className="font-medium text-green-900 dark:text-green-100 text-sm">
                        L-1 跨国公司高管/专员签证
                      </span>
                    </div>
                    <p className="text-green-700 dark:text-green-300 text-sm mb-2">
                      如果您在国内有跨国公司工作经验，或计划在美国设立分公司，可通过 L-1A（高管）或 L-1B（专业人员）签证快速赴美工作。无配额限制，审批速度快，可为后续 EB-1C 绿卡铺路。
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-800/50 px-2 py-1 rounded">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">我们提供公司美国落地全流程服务：注册、办公、税务、合规一站式解决</span>
                    </div>
                  </div>

                  {/* H1B 推荐 */}
                  <div className="bg-white dark:bg-green-900/30 p-3 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="flex items-start gap-2 mb-2">
                      <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 border-green-300">
                        H1B
                      </Badge>
                      <span className="font-medium text-green-900 dark:text-green-100 text-sm">
                        H-1B 专业工作签证
                      </span>
                    </div>
                    <p className="text-green-700 dark:text-green-300 text-sm mb-2">
                      如果您拥有学士及以上学历，且在专业领域（IT、工程、金融、医疗等）找到美国雇主工作机会，可通过 H-1B 签证赴美工作。可续签长达 6 年，期间可同时申请职业移民绿卡。
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-800/50 px-2 py-1 rounded">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">我们可协助匹配优质美国雇主资源，提高 H-1B 抽签成功率</span>
                    </div>
                  </div>

                  <div className="mt-2 pt-3 border-t border-green-200 dark:border-green-700">
                    <p className="text-green-700 dark:text-green-300 text-xs">
                      💡 <span className="font-medium">专业建议：</span>以上两种路径均为赴美工作的快速通道，可在工作期间持续积累专业成就，为后续申请 EB-1A 或 NIW 绿卡奠定基础。欢迎咨询我们的专家团队，为您量身定制最优移民规划。
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  setStage('contact');
                }}
                className="flex-1"
              >
                <Mail className="w-4 h-4 mr-2" />
                获取完整报告
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() => setContactModalOpen(true)}>
                <Phone className="w-4 h-4 mr-2" />
                免费咨询
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-center text-slate-500 dark:text-slate-400">
              本测试基于洛杉矶/纽约持牌律所评估逻辑，不作为最终法律建议
            </p>
          </div>
        )}

        {/* Contact Stage */}
        {stage === 'contact' && (
          <div className="space-y-6 py-4">
            <div className="text-center space-y-2">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {contactSubmitted ? '提交成功！' : '获取完整评估报告'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {contactSubmitted
                  ? '我们的专家将在24小时内联系您，提供详细分析'
                  : '输入您的联系方式，我们将发送完整的 PDF 评估报告'}
              </p>
            </div>

            {!contactSubmitted && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="mb-2 block">
                    电子邮箱
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={contactInfo.email}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 block">
                    手机号码
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+86 1xx xxxx xxxx"
                    value={contactInfo.phone}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, phone: e.target.value })
                    }
                  />
                </div>
                <Button
                  onClick={handleContactSubmit}
                  disabled={!contactInfo.email && !contactInfo.phone}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {contactSubmitted ? '已提交' : '提交获取报告'}
                  {!contactSubmitted && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </div>
            )}

            {contactSubmitted && (
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => resetQuiz()} className="flex-1">
                  重新测试
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() => setContactModalOpen(true)}>
                  立即咨询
                </Button>
              </div>
            )}

            {/* Disclaimer */}
            <p className="text-xs text-center text-slate-500 dark:text-slate-400">
              本测试基于洛杉矶/纽约持牌律所评估逻辑，不作为最终法律建议
            </p>
          </div>
        )}

        {/* Contact Selection Modal */}
        <ContactSelectionModal
          open={contactModalOpen}
          onOpenChange={setContactModalOpen}
        />
      </DialogContent>
    </Dialog>
  );
}
