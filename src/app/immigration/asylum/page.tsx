'use client';

import { ImmigrationDetailLayout } from '@/components/immigration/ImmigrationDetailLayout';

const asylumFeatures = [
  '无需雇主担保，个人独立申请',
  '入境美国后即可申请',
  '提交申请150天后可获工作许可',
  '配偶及未成年子女可随同申请',
  '无需签证配额，无排期等待',
  '通过一年以后可申请绿卡',
  '五年后可申请美国公民身份',
  '全程合法合规，阳光透明',
];

const asylumRequirements = [
  '本人必须在美国境内',
  '因种族、宗教、国籍、政治观点或特定社会群体身份遭受迫害',
  '对返回母国有真实的恐惧',
  '入境美国一年内提出申请（有例外情况）',
  '未曾在他国获得定居身份',
  '无刑事犯罪记录或安全威胁',
  '未曾迫害过他人',
  '愿意配合申请流程和面谈',
];

const asylumTimeline = [
  { step: '案件评估', time: '1-2周', description: '评估案件可行性，确定申请方向' },
  { step: '证据收集', time: '2-12个月', description: '系统收集证据，完善证据链' },
  { step: '提交申请', time: '1-2个月', description: '提交I-589申请表，开启案件' },
  { step: '生物识别', time: '2-4周', description: '前往指定地点完成指纹采集' },
  { step: '工卡申请', time: '第150天', description: '提交申请150天后可申请EAD工卡' },
  { step: '庇护面谈', time: '1-3年', description: '参加移民局面谈，陈述案情' },
  { step: '获得批准', time: '面谈后', description: '获批后一年可申请绿卡' },
];

const asylumDocuments = [
  '有效护照及入境证件',
  'I-589庇护申请表',
  '详细的个人陈述书',
  '迫害相关证据材料',
  '警察报告或法院记录（如有）',
  '医疗诊断报告（如有）',
  '证人声明书',
  '新闻报道或人权报告',
  '照片或视频证据',
  '专家意见书（如适用）',
];

const asylumFAQs = [
  {
    question: '什么是"阳光合法庇护"？',
    answer:
      '阳光合法庇护是指在法律框架内，基于真实的迫害经历申请美国庇护。我们的服务目标是帮助您突破人生枷锁，成为更阳光、更自由的自我。在探索人生的过程中，如果您的真实经历符合美国移民局的庇护要求，我们将协助您依法申请保护。',
  },
  {
    question: '庇护申请的成功率如何？',
    answer:
      '成功与否取决于案件的真实性、证据的充分性以及申请人的配合程度。通过我们详细评估的申请人，面谈直接通过率约为60-80%。如果面谈未通过进入法庭程序，整体通过率可达80-95%。我们会为每位客户评估成功率，只接受成功率不低于80%的案件。',
  },
  {
    question: '什么时候可以开始工作？',
    answer:
      '提交庇护申请后满150天，若案件尚未结案，即可申请EAD工作许可（俗称C8工卡）。工卡申请通常1-3个月获批。获得工卡后，您可以合法工作、创业，与美国公民和绿卡持有人享有同等就业权利。',
  },
  {
    question: '家人可以一起申请吗？',
    answer:
      '可以。配偶和21岁以下未婚子女可以作为衍生申请人。无论家人是否在美国，都可以随同主申请人获得庇护身份。如果家人在国内，获批后可以通过家属签证来美团聚。',
  },
  {
    question: '庇护获批后多久可以拿绿卡？',
    answer:
      '庇护获批通过一年以后，可以申请绿卡（I-485调整身份）。绿卡申请处理时间通常为6-12个月。获得绿卡五年后，可以申请成为美国公民。',
  },
  {
    question: '必须在入境一年内申请吗？',
    answer:
      '一般原则是入境后一年内提交申请。但有重要例外：如果您有新收集的证据，可以在一年后提出申请。此外，特殊情况（如政治环境变化、个人情况变化等）也可能豁免一年期限。建议尽早咨询评估。',
  },
  {
    question: '申请期间可以离开美国吗？',
    answer:
      '不建议。庇护申请期间离开美国，可能被视为放弃申请。此外，使用旅行证件返回母国，可能被认为不再恐惧迫害。如确有紧急情况需要离境，请先咨询专业人士。',
  },
  {
    question: '如果面谈不通过怎么办？',
    answer:
      '如果面谈未通过，案件将进入移民法庭程序。这并不意味着失败，很多案件在法庭阶段获得批准。我们会全程陪同，包括上庭指导和律师费用。整体流程包括：面谈→法庭→BIA上诉→联邦巡回法院，整个过程可能持续数年，但通过率逐级提高。',
  },
];

const asylumArticles = [
  {
    id: 'asylum-basics',
    title: '美国庇护申请基础指南',
    date: '2025-01-10',
    category: '庇护指南',
    excerpt: '详解五类保护范围、申请资格要求',
  },
  {
    id: 'asylum-timeline',
    title: '庇护申请完整时间线',
    date: '2024-12-28',
    category: '庇护指南',
    excerpt: '从申请到绿卡需要多久？',
  },
  {
    id: 'asylum-evidence',
    title: '庇护申请证据收集指南',
    date: '2024-12-15',
    category: '庇护指南',
    excerpt: '如何构建有说服力的证据链',
  },
];

export default function AsylumPage() {
  return (
    <ImmigrationDetailLayout
      title="阳光合法庇护"
      subtitle="人道主义保护"
      description="美国庇护制度为因种族、宗教、国籍、政治观点或特定社会群体成员身份而遭受迫害的人士提供合法保护。我们坚持阳光合法的原则，帮助符合条件的申请人获得安全与自由。"
      features={asylumFeatures}
      requirements={asylumRequirements}
      timeline={asylumTimeline}
      documents={asylumDocuments}
      faqs={asylumFAQs}
      articles={asylumArticles}
    >
      <div className="prose dark:prose-invert max-w-none">
        <h2>关于美国庇护制度</h2>
        <p>
          美国是一个重视人权和人道主义的国家，庇护制度是其移民体系的重要组成部分。
          根据《移民与国籍法》，如果一个人因以下五种原因之一在母国遭受迫害或有充分理由恐惧迫害，
          可以申请庇护：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">种族 (Race)</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">因种族身份遭受歧视、迫害</p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">宗教 (Religion)</h4>
            <p className="text-sm text-green-800 dark:text-green-200">因宗教信仰遭受迫害</p>
          </div>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">国籍 (Nationality)</h4>
            <p className="text-sm text-amber-800 dark:text-amber-200">因国籍或族裔身份遭受迫害</p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">政治观点 (Political Opinion)</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">因政治立场或言论遭受迫害</p>
          </div>
          <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-200 dark:border-rose-800 md:col-span-2">
            <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">特定社会群体 (Particular Social Group)</h4>
            <p className="text-sm text-rose-800 dark:text-rose-200">因属于某个特定社会群体而遭受迫害，如性别、性取向、家庭暴力受害者等</p>
          </div>
        </div>

        <h2>我们的阳光合法服务理念</h2>
        <p>
          我们坚持<strong>100%合法合规</strong>的原则。我们的服务目标从来不是帮助您投机取巧，
          而是作为人生导师，帮助您突破枷锁，成为一个更阳光、更自由、更真实的自我。
        </p>
        <p>
          在探索人生的过程中，如果您因为所在国的特殊情况，正好能满足美国移民局对庇护申请人的要求，
          我们将为您提供专业、合规的全程服务。
        </p>

        <h3>我们不会做的事情</h3>
        <ul>
          <li>❌ 不会编造虚假故事和材料</li>
          <li>❌ 不会使用模板化案件</li>
          <li>❌ 不会鼓励不符合条件的人申请</li>
          <li>❌ 不会为了赚取费用而延长案件流程</li>
        </ul>

        <h3>我们会做的事情</h3>
        <ul>
          <li>✅ 诚实评估案件可行性</li>
          <li>✅ 系统性收集证据材料</li>
          <li>✅ 专业撰写个人陈述</li>
          <li>✅ 一对一面谈辅导培训</li>
          <li>✅ 全程陪同和代理服务</li>
        </ul>

        <h2>申请前提条件</h2>
        <p>虽然庇护是普通人留美的重要途径，但我们必须保证全程100%合法。此服务并非有钱就能办理，您需要满足以下基本条件：</p>
        <ol>
          <li><strong>本人必须在美国境内</strong> - 无论通过何种签证合法入境都可以</li>
          <li><strong>入境后一年内提出申请</strong> - 使用新证据的情况可以例外</li>
          <li><strong>未曾在他国定居</strong> - 不能有美国以外其他国家的永居身份</li>
          <li><strong>无刑事犯罪记录</strong> - 不能对美国安全构成威胁</li>
          <li><strong>愿意配合申请流程</strong> - 包括证据收集、面谈准备等</li>
        </ol>

        <h2>完整时间线</h2>
        <p>庇护申请是一个系统工程，需要耐心和配合。以下是典型的申请时间线：</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-full bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">阶段</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">时间</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">说明</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">确定申请方向</td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">1-3个月</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">评估可行性，确定最佳策略</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">收集证据</td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">3-24个月</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">系统收集完善证据链</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">提交申请</td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">1-2个月</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">准备并提交I-589申请表</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">获得工卡</td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">第6-8个月</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">提交申请150天后可申请EAD</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">移民局面谈</td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">1-3年</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">参加面谈，陈述案情</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">获得批准</td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">面谈后</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">获批后一年可申请绿卡</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>服务保障</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 text-lg">全流程服务</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
              <li>• 前期评估与规划</li>
              <li>• 证据收集指导</li>
              <li>• 申请材料准备</li>
              <li>• 面谈辅导培训</li>
              <li>• 全程陪同服务</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 text-lg">透明收费</h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
              <li>• 一次性费用，无隐藏收费</li>
              <li>• 包含律师上庭费用</li>
              <li>• 包含翻译公证费用</li>
              <li>• 包含申请材料费用</li>
              <li>• 可选风险对冲保障</li>
            </ul>
          </div>
        </div>

        <h2>为什么选择我们</h2>
        <p>与其他中介和律所不同，我们坚持以下原则：</p>
        <ul>
          <li><strong>真实合法：</strong>绝不编造虚假故事，只受理真实案件</li>
          <li><strong>个性化服务：</strong>每个案件都是独特的，拒绝模板化</li>
          <li><strong>利益一致：</strong>一次性收费，我们的目标是帮您尽快获批</li>
          <li><strong>全程透明：</strong>正规服务合同，费用明细清晰</li>
          <li><strong>成功保障：</strong>可选风险对冲，失败退款承诺</li>
        </ul>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800 not-prose my-6">
          <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3 text-lg flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            重要提醒
          </h4>
          <p className="text-sm text-amber-800 dark:text-amber-200">
            如果您认为自己可能符合庇护条件，建议尽早进行专业评估。庇护申请需要在入境后一年内提出（有例外情况）。
            越早开始准备，证据链越完善，面谈通过率越高。我们提供免费初步评估，帮助您了解自己的选择。
          </p>
        </div>
      </div>
    </ImmigrationDetailLayout>
  );
}
