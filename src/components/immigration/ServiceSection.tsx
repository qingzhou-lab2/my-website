'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  GraduationCap,
  Users,
  DollarSign,
  Award,
  FileText,
  Heart,
  Building,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const services = [
  {
    id: 'l1',
    icon: Building,
    title: 'L-1 跨国公司高管签证',
    description: '跨国公司高管/经理调派美国工作，无配额限制，可转EB-1C绿卡',
    features: ['无配额限制', '最快15天获批', '可转EB-1C绿卡', '公司落地服务'],
    badge: '核心业务',
    route: '/immigration/l1',
    highlight: true,
  },
  {
    id: 'h1b',
    icon: Briefcase,
    title: 'H-1B 专业人士工作签证',
    description: '美国最主流工作签证，适合专业技术人才，雇主担保工作移民',
    features: ['雇主匹配服务', '提高抽签成功率', '最长6年工作', '可转绿卡'],
    badge: '核心业务',
    route: '/immigration/h1b',
    highlight: true,
  },
  {
    id: 'eb1',
    icon: Award,
    title: 'EB-1 杰出人才移民',
    description: '适合在科学、艺术、教育、商业等领域有杰出成就的人士',
    features: ['无需雇主担保', '无排期', '审批速度快', '全家可申请'],
    badge: '优先',
    route: '/immigration/eb1',
  },
  {
    id: 'eb2',
    icon: FileText,
    title: 'EB-2 高学历专业人士移民',
    description: '适合拥有硕士及以上学历或在科学、艺术领域有特殊能力',
    features: ['硕士或以上学历', '国家利益豁免NIW', '需雇主担保', '可携带家属'],
    badge: '推荐',
    route: '/immigration/eb2',
  },
  {
    id: 'asylum',
    icon: Heart,
    title: '阳光合法庇护',
    description: '为因种族、宗教、国籍、政治观点或社会群体成员身份遭受迫害的人士提供保护',
    features: ['合法身份保护', '工作许可申请', '通过一年可申请绿卡', '家属可随同申请'],
    badge: '人道主义',
    route: '/immigration/asylum',
  },
  {
    id: 'eb5',
    icon: DollarSign,
    title: 'EB-5 投资移民',
    description: '通过在美国投资创造就业机会获得永久居留权',
    features: ['投资额要求高', '创造就业机会', '无需雇主', '全家可申请'],
    badge: '投资',
    route: '/immigration/eb5',
  },
  {
    id: 'family',
    icon: Heart,
    title: '亲属移民',
    description: '美国公民或绿卡持有者可为其亲属申请移民',
    features: ['基于亲属关系', '优先级不同', '无年龄限制', '审批周期差异大'],
    badge: '家庭',
    route: '/immigration/family',
  },
  {
    id: 'f1',
    icon: GraduationCap,
    title: 'F-1 学生签证',
    description: '为希望在美国进行学术或语言学习的国际学生提供机会',
    features: ['学术或语言学习', '可申请OPT实习', '毕业后可转签证', '年龄无限制'],
    badge: '留学',
    route: '/immigration/f1',
  },
];

interface ServiceSectionProps {
  id?: string;
  onConsultClick?: () => void;
  onQuizClick?: () => void;
}

export function ServiceSection({ id = 'services', onConsultClick, onQuizClick }: ServiceSectionProps) {
  return (
    <section id={id} className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            专业服务
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            全面的美国移民解决方案
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            我们提供从签证申请到绿卡获取的全流程服务，无论您的需求是什么，我们都有相应的专业方案
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  service.highlight
                    ? 'border-2 border-amber-400 dark:border-amber-500 bg-gradient-to-br from-amber-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-lg'
                    : 'border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg'
                }`}
              >
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                      service.highlight
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-md'
                        : 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-md'
                    }`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <Badge className={`text-xs ${
                      service.highlight 
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300' 
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                    }`} variant="secondary">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-1.5 leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-1.5 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.route}>
                    <Button 
                      variant="outline" 
                      className="w-full transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                    >
                      了解详情
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-8 shadow-lg shadow-blue-500/20"
              onClick={onQuizClick}
            >
              免费评估
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-2"
              onClick={onConsultClick}
            >
              预约咨询
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
