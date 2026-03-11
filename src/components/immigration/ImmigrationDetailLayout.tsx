'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Clock,
  Users,
  DollarSign,
  FileText,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { ContactSelectionModal } from './ContactSelectionModal';

interface ImmigrationDetailLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  requirements: string[];
  timeline: { step: string; time: string; description: string }[];
  documents: string[];
  faqs: { question: string; answer: string }[];
  articles?: Array<{
    id: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
  }>;
  children?: React.ReactNode;
}

export function ImmigrationDetailLayout({
  title,
  subtitle,
  description,
  features,
  requirements,
  timeline,
  documents,
  faqs,
  articles,
  children,
}: ImmigrationDetailLayoutProps) {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-50">
        {/* 美国国旗背景装饰 - 更明显的效果 */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ opacity: 0.2 }}
        >
          {/* 左侧蓝色区域 + 星星 */}
          <div 
            className="absolute left-0 top-0 w-[22%] h-full"
            style={{
              background: 'linear-gradient(180deg, #3C4E8A 0%, #2B3A6B 100%)',
              clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)',
            }}
          >
            {/* 星星网格 */}
            <div className="absolute inset-0 flex flex-wrap items-start justify-start p-2 gap-1">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="text-white opacity-80"
                  style={{
                    fontSize: `${Math.random() * 6 + 6}px`,
                    transform: `rotate(${Math.random() * 20 - 10}deg)`,
                  }}
                >
                  ★
                </div>
              ))}
            </div>
          </div>
          
          {/* 红白条纹区域 */}
          <div 
            className="absolute right-0 top-0 w-[27%] h-full flex flex-col"
          >
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="flex-1"
                style={{
                  background: i % 2 === 0 ? '#BB232D' : 'transparent',
                }}
              />
            ))}
          </div>
          
          {/* 波浪效果 */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 100% 50% at 20% 50%, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%),
                radial-gradient(ellipse 80% 40% at 50% 30%, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)
              `,
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  星宇移民
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  专业美国移民服务
                </p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setContactModalOpen(true)}>免费咨询</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              {subtitle}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5 mb-8">
            <TabsTrigger value="overview">概述</TabsTrigger>
            <TabsTrigger value="requirements">要求</TabsTrigger>
            <TabsTrigger value="timeline">流程</TabsTrigger>
            <TabsTrigger value="documents">材料</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {children}

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  主要特点
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Articles */}
            {articles && articles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>相关文章</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {articles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/articles/${article.id}`}
                        className="block p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline">{article.category}</Badge>
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {article.date}
                          </span>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {article.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Requirements Tab */}
          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  申请要求
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 pt-0.5">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  申请流程
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 h-24 bg-slate-200 dark:bg-slate-700" />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-slate-900 dark:text-white">
                            {item.step}
                          </h3>
                          <Badge variant="outline">{item.time}</Badge>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  所需材料
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {documents.map((document, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors"
                    >
                      <div className="w-5 h-5 border-2 border-slate-300 dark:border-slate-600 rounded flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{document}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  常见问题
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                      {index < faqs.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            准备好开始您的移民之旅了吗？
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            免费咨询我们的专业移民律师，获取个性化的移民方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" onClick={() => setContactModalOpen(true)}>
              立即咨询
            </Button>
            <Link href="/quiz">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                预约评估
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Selection Modal */}
      <ContactSelectionModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </div>
  );
}
