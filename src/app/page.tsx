'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/immigration/Header';
import { HeroSection } from '@/components/immigration/HeroSection';
import { VisionSection } from '@/components/immigration/VisionSection';
import { ServiceSection } from '@/components/immigration/ServiceSection';
import { ImmigrationQuizModal } from '@/components/immigration/ImmigrationQuizModal';
import { ContactSelectionModal } from '@/components/immigration/ContactSelectionModal';

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [hasTakenQuiz, setHasTakenQuiz] = useState(false);

  useEffect(() => {
    // Check if user has already taken the quiz
    const quizTaken = localStorage.getItem('immigrationQuizTaken');
    if (!quizTaken) {
      // Show quiz after 2 seconds if not taken yet
      const timer = setTimeout(() => {
        setShowQuiz(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setHasTakenQuiz(true);
    }
  }, []);

  const handleQuizClose = () => {
    setShowQuiz(false);
    localStorage.setItem('immigrationQuizTaken', 'true');
    setHasTakenQuiz(true);
  };

  const handleConsultClick = () => {
    setShowContactModal(true);
  };

  const handleQuizClick = () => {
    setShowQuiz(true);
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection onConsultClick={handleConsultClick} onQuizClick={handleQuizClick} />

      {/* Vision Section */}
      <VisionSection onQuizClick={handleQuizClick} />

      {/* Services Section */}
      <ServiceSection onConsultClick={handleConsultClick} onQuizClick={handleQuizClick} />

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                为什么选择我们？
              </h2>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                拒绝信息内耗，回归移民美国的真相
              </p>
            </div>
            
            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  消除"项目焦虑"，交付底层逻辑
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  大多数中介年年变换花样，前年推 EB-5，去年推投资移民，今年包装 EB-1/NIW。这种营销轰炸只会让你因 FOMO 而犹豫不前。
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  我们不卖项目，我们交付认知：美国移民法近 20 年来核心框架极其稳定。我们带你穿透营销迷雾，回归法律本质。
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  跨越信息鸿沟，匹配专属钥匙
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  美国移民系统对贫穷或富有的人同样敞开大门，真正的障碍不是门槛，而是核心认知的信息差。
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  我们不搞"流水线"：我们深挖美国移民核心价值观，帮你找到那把真正匹配你个人条件的移民美国钥匙。
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  终结犹豫内耗，驱动果断行动
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  很多人了解了几十年却从未出发，是因为缺乏一套确定性的操作公式。
                </p>
                <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg shadow-blue-500/20">
                  <p className="text-sm text-white font-semibold text-center">
                    成功移民美国 = 核心认知信息差 + 决心 + 行动
                  </p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                  只要掌握了这套公式，人人都可以是美国人。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="cases" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                客户评价
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                来自真实客户的反馈，见证我们的专业服务
              </p>
            </div>
            
            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  name: 'Jennie',
                  type: 'EB-2 NIW',
                  rating: 5,
                  content: '咨询了一小时以后，才发现自己以前自我感觉良好的规划都是自欺欺人。接下来为了顺利留在美国我该做什么很明确了，这辈子都没感觉到未来这么光明过。',
                },
                {
                  name: 'Kevin',
                  type: 'EB-1A',
                  rating: 5,
                  content: '不仅针对我的情况指明了几条路，还告诉了我实际操作的注意事项。刘律师在移民法方面的专业知识非常令人信服，感觉稳了，美国我来了！',
                },
                {
                  name: 'Ressie',
                  type: 'L-1A',
                  rating: 5,
                  content: '我的背景情况比较复杂，为了移民美国查了一年多资料，直到咨询了专业顾问才发现之前查到的很多都是中介的广告信息。请教之后才明确了适合自己的两条路。',
                },
                {
                  name: 'W小姐',
                  type: 'OPT/STEM OPT',
                  rating: 5,
                  content: '刘律师是我的OPT救星！当时我的OPT遭遇RFE特别焦虑，但她帮助我清晰地解释了RFE内容，引导我完成了回复流程，总是有问必答，始终耐心又乐于助人！',
                },
                {
                  name: '张先生',
                  type: 'EB-1A',
                  rating: 5,
                  content: '作为AI领域的研究员，原本以为EB-1A离我很远。经过专业评估后发现原来自己已经满足条件，现在绿卡已经到手，感谢团队的专业指导！',
                },
                {
                  name: '李女士',
                  type: 'EB-2 NIW',
                  rating: 5,
                  content: '生物医学博士毕业，自己DIY了半年被拒。后来找到刘律师，她帮我重新梳理了材料，强调了我的研究对国家利益的重要性，最终顺利获批！',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white text-sm">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {item.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    "{item.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              联系我们
            </h2>
            <p className="text-lg text-blue-100 mb-12">
              免费咨询，专业评估，助您实现美国梦
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">
                  +1 (626) 438-5905
                </div>
                <div className="text-blue-200 text-sm">电话咨询</div>
              </div>
              <div className="p-6 bg-white/10 rounded-xl">
                <div className="text-lg font-semibold text-white mb-1">
                  contact@usimmigration.com
                </div>
                <div className="text-blue-200 text-sm">电子邮件</div>
              </div>
              <div className="p-6 bg-white/10 rounded-xl">
                <div className="text-lg font-semibold text-white mb-1">
                  在线客服
                </div>
                <div className="text-blue-200 text-sm">24小时在线</div>
              </div>
            </div>
            <div className="mt-10">
              <button
                onClick={handleQuizClick}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition-all"
              >
                立即免费评估
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-red-500 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">星宇</span>
                </div>
                <div>
                  <div className="text-xl font-bold">星宇移民</div>
                  <div className="text-xs text-slate-400">专业美国移民服务</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                专业的美国移民服务机构，为您提供全方位的移民解决方案
              </p>
            </div>
            
            {/* Services Column */}
            <div>
              <h3 className="font-semibold mb-4">移民服务</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/immigration/l1" className="hover:text-white transition-colors">L-1 跨国公司签证</a></li>
                <li><a href="/immigration/h1b" className="hover:text-white transition-colors">H-1B 工作签证</a></li>
                <li><a href="/immigration/eb1" className="hover:text-white transition-colors">EB-1 杰出人才</a></li>
                <li><a href="/immigration/eb2" className="hover:text-white transition-colors">EB-2 NIW</a></li>
              </ul>
            </div>
            
            {/* Quick Links Column */}
            <div>
              <h3 className="font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">服务项目</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">客户评价</a></li>
                <li><a href="/quiz" className="hover:text-white transition-colors">免费评估</a></li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div>
              <h3 className="font-semibold mb-4">联系方式</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>+1 (626) 438-5905</li>
                <li>contact@usimmigration.com</li>
                <li>2595 Pomona Blvd, Pomona, CA 91768</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            © 2024 星宇移民. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Quiz Modal */}
      <ImmigrationQuizModal open={showQuiz} onOpenChange={handleQuizClose} />

      {/* Contact Selection Modal */}
      <ContactSelectionModal open={showContactModal} onOpenChange={setShowContactModal} />
    </main>
  );
}
