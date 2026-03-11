"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Star, Users, Award, Building, Briefcase, Sparkles, Globe2, Shield } from "lucide-react";

interface HeroSectionProps {
  onConsultClick?: () => void;
  onQuizClick?: () => void;
}

export function HeroSection({ onConsultClick, onQuizClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
      {/* 背景装饰 - 点阵图案 */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>
      
      {/* 动态装饰圆圈 */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-red-400/5 rounded-full blur-2xl" />
      
      {/* 浮动装饰元素 */}
      <div className="absolute top-32 right-20 hidden lg:block animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl shadow-lg flex items-center justify-center opacity-60">
          <Star className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute top-48 right-40 hidden lg:block animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-md opacity-50" />
      </div>
      <div className="absolute bottom-32 left-20 hidden lg:block animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
        <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-lg opacity-40" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50 shadow-sm">
              <Sparkles className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>星宇移民 · 专业美国移民服务 · 美国持牌律师</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              星宇移民
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mt-2">
                开启您的美国梦
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">专注 L-1 跨国高管签证</span>与<span className="font-semibold text-slate-900 dark:text-white">H-1B 专业工作签证</span>，为企业高管、创业者及留学生提供专业的美国工作签证解决方案。
              <br />
              同时提供 EB-1/EB-2/EB-5/NIW/O-1/家庭类绿卡申请服务。
            </p>
            
            {/* 核心服务亮点 */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-900/30 dark:to-amber-800/20 rounded-xl border border-amber-200/50 dark:border-amber-700/50 hover:shadow-md transition-shadow">
                <div className="p-2.5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg shadow-sm">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-amber-900 dark:text-amber-100 text-sm">L-1 签证</div>
                  <div className="text-xs text-amber-700 dark:text-amber-300">公司美国落地全流程服务</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-800/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-shadow">
                <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm">H-1B 签证</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300">雇主资源匹配 · 提高抽签率</div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">成功率 98%</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">服务 1000+ 客户</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/30 rounded-full">
                <Award className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">资深律师团队</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-8 text-lg shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30"
                onClick={onConsultClick}
              >
                立即咨询
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-lg border-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
                onClick={onQuizClick}
              >
                免费评估
              </Button>
            </div>
          </div>
          
          {/* Right Content - Stats Card */}
          <div className="relative lg:pl-8">
            {/* 装饰背景 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-amber-100/50 dark:from-blue-900/30 dark:to-amber-900/30 rounded-3xl blur-2xl opacity-60" />
            
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              {/* 装饰元素 */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-20 rotate-12" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl opacity-20 -rotate-12" />
              
              {/* 顶部图标 */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                    <Globe2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/30 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">10+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">年专业经验</div>
                </div>
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/30 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">98%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">成功率</div>
                </div>
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/30 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">1000+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">成功案例</div>
                </div>
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/30 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">20+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">专业律师</div>
                </div>
              </div>
              
              {/* CTA Button */}
              <Button
                onClick={onQuizClick}
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-4 rounded-xl text-base shadow-lg shadow-blue-500/20 transition-all"
              >
                <span>免费专业评估</span>
                <span className="mx-2 opacity-60">·</span>
                <span>全程一对一指导</span>
              </Button>
              
              {/* 底部信任标识 */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-3 h-3 text-blue-500" />
                <span>已帮助 1000+ 家庭成功移民美国</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
