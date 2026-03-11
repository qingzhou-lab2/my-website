'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, Tag, ArrowRight } from 'lucide-react';

// 模拟文章数据
const articles = [
  {
    id: 'h1b-lottery-2024',
    title: '2024年H-1B抽签规则详解',
    excerpt: '详细介绍2024年H-1B抽签的新规则、时间线和注意事项，帮助您做好准备',
    category: '政策解读',
    date: '2024-03-15',
    tags: ['H-1B', '抽签', '政策'],
    readTime: '5分钟',
  },
  {
    id: 'h1b-change-employer',
    title: 'H-1B换雇主流程指南',
    excerpt: '详细讲解H-1B持有者如何合法更换雇主，需要注意哪些事项',
    category: '操作指南',
    date: '2024-02-20',
    tags: ['H-1B', '换工作', '流程'],
    readTime: '8分钟',
  },
  {
    id: 'eb1a-criteria-explained',
    title: 'EB-1A十项标准详解',
    excerpt: '深入解析EB-1A申请的十项标准，帮助您判断是否符合资格',
    category: '政策解读',
    date: '2024-03-10',
    tags: ['EB-1A', '标准', '政策'],
    readTime: '10分钟',
  },
  {
    id: 'eb1a-reference-letter-guide',
    title: '如何准备有效的EB-1A推荐信',
    excerpt: '推荐信是EB-1A申请的关键材料，本文详细讲解如何准备高质量推荐信',
    category: '操作指南',
    date: '2024-02-25',
    tags: ['EB-1A', '推荐信', '材料准备'],
    readTime: '7分钟',
  },
  {
    id: 'eb5-risk-analysis',
    title: 'EB-5投资移民风险评估',
    excerpt: '全面分析EB-5投资的各种风险，帮助您做出明智的决策',
    category: '投资分析',
    date: '2024-01-28',
    tags: ['EB-5', '投资', '风险'],
    readTime: '12分钟',
  },
  {
    id: 'niw-success-rate',
    title: '2024年EB-2 NIW获批率分析',
    excerpt: '分析2024年EB-2 NIW申请的获批率，了解哪些因素影响审批结果',
    category: '数据分析',
    date: '2024-02-05',
    tags: ['EB-2', 'NIW', '获批率'],
    readTime: '6分钟',
  },
  {
    id: 'f1-to-green-card',
    title: '从F-1学生签证到绿卡的路径',
    excerpt: '详细介绍留学生如何从F-1签证转为工作签证并最终获得绿卡',
    category: '留学移民',
    date: '2024-01-15',
    tags: ['F-1', '留学生', '绿卡'],
    readTime: '9分钟',
  },
  {
    id: 'h4-eligibility',
    title: 'H-4配偶工作许可申请指南',
    excerpt: 'H-1B持有者的配偶如何申请工作许可，有哪些要求和流程',
    category: '操作指南',
    date: '2024-02-18',
    tags: ['H-4', '工作许可', '配偶'],
    readTime: '5分钟',
  },
];

const categories = ['全部', '政策解读', '操作指南', '投资分析', '数据分析', '留学移民'];

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === '全部' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-red-500 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">星宇</span>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">
                  星宇移民
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  专业美国移民服务
                </div>
              </div>
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700">免费咨询</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              文章与资讯
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              了解最新的美国移民政策、申请指南和成功案例
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="搜索文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : ''
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline">{article.category}</Badge>
                      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                        <span>阅读全文</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400">
                没有找到符合条件的文章
              </p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredArticles.length > 0 && (
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Button variant="outline" size="lg">
              加载更多文章
            </Button>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              订阅我们的邮件通讯
            </h2>
            <p className="text-blue-100 mb-8">
              获取最新的移民政策更新、申请指南和独家资讯
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="输入您的邮箱"
                className="bg-white text-slate-900"
              />
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                订阅
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
