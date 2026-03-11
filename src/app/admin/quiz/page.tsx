'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Search,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  User,
  Trophy,
  Star,
  TrendingUp,
  MessageCircle,
} from 'lucide-react';

interface QuizSubmission {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  wechat: string | null;
  basic_answer: string;
  professional_answers: string;
  result_type: string;
  result_title: string;
  result_badge: string;
  recommendation: string;
  score_a: number;
  score_b: number;
  score_c: number;
  email_sent: boolean;
  created_at: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

const resultColors: Record<string, string> = {
  eb1a_excellent: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  niw_stable: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  potential: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
};

const recommendationLabels: Record<string, string> = {
  eb1a: 'EB-1A 杰出人才',
  niw: 'NIW 国家利益豁免',
  potential: '潜力待提升',
};

export default function QuizSubmissionsAdminPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<QuizSubmission[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 20,
    total: 0,
    totalPages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // 详情弹窗
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<QuizSubmission | null>(null);

  // 删除确认弹窗
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        pageSize: pagination.pageSize.toString(),
      });
      if (search) params.set('search', search);

      const response = await fetch(`/api/admin/quiz?${params}`);
      const data = await response.json();

      if (response.ok) {
        setSubmissions(data.data || []);
        setPagination(data.pagination);
      }
    } catch {
      console.error('Failed to fetch submissions');
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.pageSize, search]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const handleViewDetail = async (submission: QuizSubmission) => {
    try {
      const response = await fetch(`/api/admin/quiz/${submission.id}`);
      const data = await response.json();
      if (response.ok) {
        setSelectedSubmission(data.data);
        setDetailDialogOpen(true);
      }
    } catch {
      console.error('Failed to fetch submission detail');
    }
  };

  const handleDelete = async () => {
    if (!deletingId) return;
    try {
      const response = await fetch(`/api/admin/quiz/${deletingId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchSubmissions();
        setDeleteDialogOpen(false);
        setDeletingId(null);
      }
    } catch {
      console.error('Failed to delete submission');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
    });
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'eb1a_excellent':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'niw_stable':
        return <Star className="w-5 h-5 text-blue-500" />;
      default:
        return <TrendingUp className="w-5 h-5 text-green-500" />;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">评估记录管理</CardTitle>
        </CardHeader>
        <CardContent>
          {/* 搜索栏 */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="搜索称呼、微信、邮箱或电话..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPagination((p) => ({ ...p, page: 1 }));
                }}
                className="pl-10"
              />
            </div>
            <div className="text-sm text-slate-500">
              共 {pagination.total} 条记录
            </div>
          </div>

          {/* 表格 */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>用户信息</TableHead>
                  <TableHead>评估结果</TableHead>
                  <TableHead>评分</TableHead>
                  <TableHead>邮件状态</TableHead>
                  <TableHead>提交时间</TableHead>
                  <TableHead className="text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      加载中...
                    </TableCell>
                  </TableRow>
                ) : submissions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      暂无记录
                    </TableCell>
                  </TableRow>
                ) : (
                  submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-mono text-sm">
                        #{submission.id}
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-400" />
                            <span className="font-medium">{submission.name}</span>
                          </div>
                          {submission.wechat && (
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <MessageCircle className="w-3 h-3 text-green-500" />
                              {submission.wechat}
                            </div>
                          )}
                          {submission.email && (
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <Mail className="w-3 h-3" />
                              {submission.email}
                            </div>
                          )}
                          {submission.phone && (
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <Phone className="w-3 h-3" />
                              {submission.phone}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getResultIcon(submission.result_type)}
                          <div>
                            <Badge className={resultColors[submission.result_type] || ''}>
                              {submission.result_badge}
                            </Badge>
                            <div className="text-xs text-slate-500 mt-1">
                              {recommendationLabels[submission.recommendation]}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2 text-sm">
                          <span className="text-amber-600">A:{submission.score_a}</span>
                          <span className="text-blue-600">B:{submission.score_b}</span>
                          <span className="text-green-600">C:{submission.score_c}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {submission.email_sent ? (
                          <Badge className="bg-green-100 text-green-700">已发送</Badge>
                        ) : (
                          <Badge className="bg-slate-100 text-slate-700">未发送</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-slate-500">
                        {formatDate(submission.created_at)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDetail(submission)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-500 hover:text-red-600"
                            onClick={() => {
                              setDeletingId(submission.id);
                              setDeleteDialogOpen(true);
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* 分页 */}
          {pagination.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                disabled={pagination.page === 1}
                onClick={() => setPagination((p) => ({ ...p, page: p.page - 1 }))}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm text-slate-500">
                第 {pagination.page} / {pagination.totalPages} 页
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={pagination.page === pagination.totalPages}
                onClick={() => setPagination((p) => ({ ...p, page: p.page + 1 }))}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 详情弹窗 */}
      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>评估记录详情</DialogTitle>
          </DialogHeader>
          {selectedSubmission && (
            <div className="space-y-6">
              {/* 用户信息 */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">用户信息</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span className="font-medium">{selectedSubmission.name}</span>
                  </div>
                  {selectedSubmission.wechat && (
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-green-500" />
                      <span className="text-slate-700">{selectedSubmission.wechat}</span>
                    </div>
                  )}
                  {selectedSubmission.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <a href={`mailto:${selectedSubmission.email}`} className="text-blue-500 hover:underline">
                        {selectedSubmission.email}
                      </a>
                    </div>
                  )}
                  {selectedSubmission.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <a href={`tel:${selectedSubmission.phone}`} className="text-blue-500 hover:underline">
                        {selectedSubmission.phone}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* 评估结果 */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">评估结果</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    {getResultIcon(selectedSubmission.result_type)}
                    <Badge className={resultColors[selectedSubmission.result_type] || ''}>
                      {selectedSubmission.result_badge}
                    </Badge>
                  </div>
                  <p className="font-medium">{selectedSubmission.result_title}</p>
                  <p className="text-sm text-slate-500">
                    推荐方案: {recommendationLabels[selectedSubmission.recommendation]}
                  </p>
                </CardContent>
              </Card>

              {/* 评分详情 */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">评分详情</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">{selectedSubmission.score_a}</div>
                      <div className="text-sm text-slate-500">顶尖成就 (A)</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{selectedSubmission.score_b}</div>
                      <div className="text-sm text-slate-500">行业认可 (B)</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{selectedSubmission.score_c}</div>
                      <div className="text-sm text-slate-500">基础积累 (C)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 答题详情 */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">答题详情</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">基础门槛</div>
                    <div className="text-sm text-slate-500">答案: {selectedSubmission.basic_answer}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">专业评估答案</div>
                    <pre className="text-sm text-slate-500 mt-1 p-3 bg-slate-50 dark:bg-slate-800 rounded overflow-x-auto">
                      {JSON.stringify(JSON.parse(selectedSubmission.professional_answers), null, 2)}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* 元信息 */}
              <div className="text-sm text-slate-500 flex justify-between">
                <span>提交时间: {formatDate(selectedSubmission.created_at)}</span>
                <span>邮件状态: {selectedSubmission.email_sent ? '已发送' : '未发送'}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* 删除确认弹窗 */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>确认删除</DialogTitle>
          </DialogHeader>
          <p className="text-slate-500">确定要删除这条评估记录吗？此操作不可恢复。</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              取消
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              删除
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
