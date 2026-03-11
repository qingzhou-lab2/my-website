'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, MessageSquare, X } from 'lucide-react';

interface ContactSelectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactSelectionModal({
  open,
  onOpenChange,
}: ContactSelectionModalProps) {
  const [selectedOption, setSelectedOption] = useState<'whatsapp' | 'wechat' | null>(null);

  // WhatsApp 配置 - 请替换为实际的电话号码
  const whatsappNumber = '1234567890'; // 格式：国家代码+电话号码，不带+号和空格
  const whatsappMessage = encodeURIComponent(
    '您好，我想咨询美国移民服务'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // 微信二维码 - 请替换为实际的微信二维码图片URL
  const wechatQRCode = '/wechat-qr-placeholder.svg'; // 占位图，请替换为实际的二维码

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank');
    onOpenChange(false);
  };

  const handleWeChatClick = () => {
    setSelectedOption('wechat');
  };

  const handleBack = () => {
    setSelectedOption(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            选择咨询方式
          </DialogTitle>
          <DialogDescription>
            选择您喜欢的沟通方式，我们将尽快为您服务
          </DialogDescription>
        </DialogHeader>

        {!selectedOption ? (
          <div className="grid gap-4 py-4">
            <Card
              className="hover:shadow-lg transition-all cursor-pointer hover:border-green-500 dark:hover:border-green-400 border-2"
              onClick={handleWhatsAppClick}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">WhatsApp</CardTitle>
                    <CardDescription>即时在线沟通</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <p>✅ 即时回复，响应速度快</p>
                  <p>✅ 支持文字、图片、文件</p>
                  <p>✅ 全球通用的沟通工具</p>
                </div>
                <Button
                  className="w-full mt-4 bg-green-600 hover:bg-green-700"
                  onClick={handleWhatsAppClick}
                >
                  打开 WhatsApp 聊天
                </Button>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg transition-all cursor-pointer hover:border-green-600 dark:hover:border-green-500 border-2"
              onClick={handleWeChatClick}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/50 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">微信</CardTitle>
                    <CardDescription>扫码添加好友</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <p>✅ 方便快捷，国内用户常用</p>
                  <p>✅ 支持语音、视频通话</p>
                  <p>✅ 可随时查看历史记录</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                  onClick={handleWeChatClick}
                >
                  查看微信二维码
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            {/* 微信二维码展示 */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                <MessageSquare className="w-6 h-6" />
                <span className="text-lg font-semibold">微信咨询</span>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg inline-block">
                {/* 二维码图片 - 这里使用占位符，请替换为实际的二维码 */}
                <div className="w-48 h-48 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center mx-auto border-2 border-slate-200 dark:border-slate-600">
                  <img
                    src={wechatQRCode}
                    alt="微信二维码"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  1. 打开微信，扫一扫上方二维码
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  2. 添加好友后，发送"咨询移民"
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  3. 我们的顾问将为您提供专业服务
                </p>
              </div>

              <Button
                variant="outline"
                onClick={handleBack}
                className="w-full"
              >
                <X className="w-4 h-4 mr-2" />
                返回选择其他方式
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
