'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Phone, Mail, ChevronDown } from 'lucide-react';
import { ContactSelectionModal } from './ContactSelectionModal';

const immigrationProjects = [
  { name: 'EB-1A 杰出人才', href: '/immigration/eb1', description: '无需雇主担保，快速获批' },
  { name: 'EB-2 NIW 国家利益豁免', href: '/immigration/eb2', description: '高学历专业人士首选' },
  { name: 'EB-5 投资移民', href: '/immigration/eb5', description: '投资移民直通车' },
  { name: 'H-1B 专业工作签证', href: '/immigration/h1b', description: '专业人才赴美工作' },
  { name: 'L-1 跨国公司签证', href: '/immigration/l1', description: '高管/专员调动签证' },
  { name: '阳光合法庇护', href: '/immigration/asylum', description: '人道主义保护' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', href: '/' },
    { name: '移民服务', href: '#services' },
    { name: '关于我们', href: '#about' },
    { name: '客户评价', href: '#cases' },
    { name: '联系我们', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md'
          : 'bg-white dark:bg-slate-900'
      }`}
    >
      {/* 美国国旗背景装饰 - 更明显的效果 */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          opacity: scrolled ? 0.15 : 0.25,
        }}
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
        
        {/* 波浪效果 - 模拟飘扬 */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 50% at 20% 50%, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%),
              radial-gradient(ellipse 80% 40% at 50% 30%, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%),
              radial-gradient(ellipse 60% 30% at 70% 70%, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%)
            `,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-red-500 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">星宇</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                星宇移民
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400">
                专业美国移民服务
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* 移民项目下拉菜单 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                  移民项目
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {immigrationProjects.map((project) => (
                  <DropdownMenuItem key={project.href} asChild>
                    <Link 
                      href={project.href}
                      className="flex flex-col items-start py-2 cursor-pointer"
                    >
                      <span className="font-medium text-slate-900 dark:text-white">{project.name}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{project.description}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
              <Phone className="w-4 h-4" />
              <span>+1 (626) 438-5905</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setContactModalOpen(true)}>
              免费咨询
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* 移民项目 - 移动端展示 */}
                <div className="pt-2">
                  <div className="text-slate-900 dark:text-white font-medium text-lg mb-2">
                    移民项目
                  </div>
                  <div className="flex flex-col space-y-2 pl-4">
                    {immigrationProjects.map((project) => (
                      <Link
                        key={project.href}
                        href={project.href}
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-base transition-colors"
                      >
                        {project.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <Phone className="w-4 h-4" />
                    <span>+1 (626) 438-5905</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <Mail className="w-4 h-4" />
                    <span>contact@usimmigration.com</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setContactModalOpen(true)}>
                    免费咨询
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Contact Selection Modal */}
      <ContactSelectionModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </header>
  );
}
