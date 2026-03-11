'use client';

import { Button } from '@/components/ui/button';
import { Scale, Key, ArrowRight } from 'lucide-react';

interface VisionSectionProps {
  onQuizClick?: () => void;
}

export function VisionSection({ onQuizClick }: VisionSectionProps) {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden -mt-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Quote */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
            Everyone is an American,
            <br />
            <span className="text-blue-300">some are just born in the wrong place.</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            真正的美国人，不是由出生地定义的，而是由那颗追求自由、平等与奋斗的心定义的。
            如果你心存这种韧性与渴望，那么你并非外人，你只是暂时"流落"海外。
          </p>
        </div>

        {/* Why Section */}
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            为什么"人人都是美国人"？
          </h3>
          <p className="text-blue-100/80 text-base max-w-3xl mx-auto">
            这绝非一句空洞的口号，而是一个基于事实的承诺：只要你有意愿，每个人都可以找到实操可行的路径。
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/30 flex items-center justify-center">
                <Scale className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  美国的移民系统有着全球最完善、成熟且稳定的法律基石
                </h4>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  真正的移民实操途径在近二十年间其实"换汤不换药"，本质要求从未巨变。
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/30 flex items-center justify-center">
                <Key className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  规则的确定性
                </h4>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  美国对新移民并非处处提防，相反，法律的大门对贫穷或富有的人同样敞开——前提是你要找到那把匹配的钥匙。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={onQuizClick}
            className="bg-white text-blue-900 hover:bg-blue-50 font-medium px-6 py-3 rounded-full text-base"
          >
            点击寻找你的那把钥匙
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
