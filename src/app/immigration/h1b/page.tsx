'use client';

import { ImmigrationDetailLayout } from '@/components/immigration/ImmigrationDetailLayout';

const h1bFeatures = [
  '美国最主流的专业工作签证',
  '签证有效期最长可达6年（3+3模式）',
  '可携带配偶（H-4）和21岁以下子女',
  '配偶在特定条件下可申请工作许可（EAD）',
  '可申请职业移民绿卡（EB-1/EB-2）',
  '支持双重意图，签证期间可同时申请绿卡',
  '可更换雇主（Transfer），无需重新抽签',
  '无国籍限制，全球申请人公平竞争',
];

const h1bRequirements = [
  '申请人必须拥有与职位相关的本科及以上学历（或同等工作经验）',
  '职位必须属于"专业职位"（Specialty Occupation）',
  '必须有美国雇主提供工作Offer并愿意担保申请',
  '雇主需要支付达到或超过现行工资标准（Prevailing Wage）',
  '雇主需要向劳工部申请LCA（Labor Condition Application）',
  '年度配额限制：普通名额65,000 + 硕士名额20,000',
];

const h1bTimeline = [
  {
    step: '雇主匹配与评估',
    time: '1-3个月',
    description:
      '评估申请人资质，匹配符合条件的美国雇主，确定职位和薪资',
  },
  {
    step: 'LCA申请',
    time: '1-2周',
    description:
      '雇主向劳工部申请LCA，证明工资标准和劳工保护',
  },
  {
    step: '抽签注册',
    time: '3月',
    description:
      '每年3月进行电子注册抽签，中签后可提交正式申请',
  },
  {
    step: 'I-129审批',
    time: '2-4个月',
    description:
      '提交完整申请材料，常规处理2-4个月，加急15个工作日',
  },
  {
    step: '签证激活',
    time: '10月1日',
    description:
      '获批后于10月1日正式生效，境外申请人需完成面签',
  },
];

const h1bDocuments = [
  '护照复印件（有效期至少6个月）',
  '学历证明及成绩单（本科及以上）',
  '学位认证报告（如适用）',
  '个人简历（详细工作经历）',
  '工作推荐信和专业资格证明',
  '雇主提供的工作Offer信',
  '职位描述和薪资说明',
  'LCA批准通知',
  '雇主公司资料（营业执照、年报等）',
  '照片（符合签证要求）',
];

const h1bFAQs = [
  {
    question: 'H-1B签证的中签率是多少？',
    answer:
      '近年H-1B中签率约为25%-30%。2024财年共收到约75万份注册，中签约12万份。硕士及以上学历享有额外20,000名额，中签率相对更高。我们通过雇主资源匹配策略，帮助申请人提高整体成功率。',
  },
  {
    question: '如果没抽中H-1B怎么办？',
    answer:
      '未中签的替代方案包括：1）使用OPT/STEM OPT延长留美工作时间，第二年继续抽签；2）转为O-1杰出人才签证；3）通过跨国公司申请L-1签证；4）申请Day-1 CPT继续工作。我们会根据您的具体情况制定备选方案。',
  },
  {
    question: 'H-1B持有者可以换工作吗？',
    answer:
      '可以。H-1B持有者可以更换雇主，新雇主提交H-1B Transfer申请后，您即可开始为新雇主工作（无需等待批准）。Transfer不需要重新抽签，但需要在6年总期限内有足够时间。',
  },
  {
    question: '你们的雇主匹配服务是如何运作的？',
    answer:
      '我们与美国多家科技公司、金融机构、咨询公司建立了长期合作关系。根据您的专业背景、技能和职业规划，我们会匹配符合条件的雇主，确保职位真实、薪资合规，并全程协助您完成H-1B申请流程。',
  },
  {
    question: 'H-1B申请需要多长时间？',
    answer:
      '常规处理需要2-4个月，加急处理（Premium Processing）可在15个工作日内获得结果。但需要注意，整个流程从雇主匹配到最终获批，通常需要3-6个月，建议提前规划。',
  },
  {
    question: 'H-1B期间的绿卡申请流程是怎样的？',
    answer:
      'H-1B持有者可通过EB-1或EB-2类别申请绿卡。流程包括：PERM劳工证申请（6-12个月，EB-1除外）→ I-140移民申请（4-8个月）→ 排期等待 → I-485身份调整。建议在H-1B第三年开始绿卡申请，以便在6年期限前完成PERM。',
  },
];

const h1bArticles = [
  {
    id: 'h1b-lottery-2025',
    title: '2025年H-1B抽签全攻略',
    date: '2025-01-15',
    category: '政策解读',
    excerpt: '深度解析抽签规则变化、时间线与中签率数据',
  },
  {
    id: 'h1b-employer-guide',
    title: '如何找到愿意担保H-1B的优质雇主？',
    date: '2025-01-08',
    category: '求职指南',
    excerpt: '分享寻找H-1B友好雇主的策略和面试技巧',
  },
  {
    id: 'h1b-green-card-path',
    title: '从H-1B到绿卡：完整路线图',
    date: '2024-12-20',
    category: '移民路径',
    excerpt: '详解绿卡申请路径与时间规划',
  },
  {
    id: 'h1b-vs-o1',
    title: 'H-1B vs O-1：哪一种签证更适合你？',
    date: '2024-12-10',
    category: '签证对比',
    excerpt: '深入对比两种签证的优缺点与适用人群',
  },
  {
    id: 'h1b-stem-opt',
    title: 'STEM OPT与H-1B完美衔接策略',
    date: '2024-12-05',
    category: '留学生指南',
    excerpt: '最大化利用STEM OPT期间的机会',
  },
];

export default function H1BPage() {
  return (
    <ImmigrationDetailLayout
      title="H-1B 专业人士工作签证"
      subtitle="工作签证"
      description="H-1B签证是美国最主要的工作签证之一，适合拥有本科及以上学历的专业人才。我们提供雇主匹配服务，帮助您提高抽签成功率，实现在美工作梦想。"
      features={h1bFeatures}
      requirements={h1bRequirements}
      timeline={h1bTimeline}
      documents={h1bDocuments}
      faqs={h1bFAQs}
      articles={h1bArticles}
    >
      <div className="prose dark:prose-invert max-w-none">
        <h2>什么是H-1B签证？</h2>
        <p>
          H-1B签证是美国移民法规定的一种非移民工作签证，专门为"专业职位"（Specialty Occupation）设计。该签证允许美国雇主雇佣拥有专业技能和学历的外国人才，是留学生和国际专业人士留美工作的主要途径。
        </p>
        <p>
          H-1B签证初始有效期为3年，可延期3年，总共最长可达6年。在此期间，申请人可以同时申请职业移民绿卡，实现长期留美发展的目标。
        </p>

        <h2>谁适合申请H-1B签证？</h2>
        <p>H-1B签证适合以下人群：</p>
        <ul>
          <li><strong>在美留学生：</strong>F-1 OPT期间找到专业相关工作，希望通过雇主担保留在美国</li>
          <li><strong>海外专业人才：</strong>在IT、工程、金融、医疗等领域有专业技能，希望赴美发展</li>
          <li><strong>STEM专业毕业生：</strong>可利用3年STEM OPT多次参加H-1B抽签</li>
          <li><strong>职业转换者：</strong>持有其他签证（如J-1、L-1）希望转为长期工作签证</li>
        </ul>

        <h2>H-1B签证的优势</h2>
        <p>相比其他工作签证，H-1B具有以下优势：</p>
        <ul>
          <li><strong>职业发展：</strong>在美国顶尖企业工作，积累国际工作经验</li>
          <li><strong>绿卡通道：</strong>支持双重意图，可在H-1B期间申请EB-1/EB-2绿卡</li>
          <li><strong>家属陪同：</strong>配偶和子女可申请H-4签证，配偶特定条件下可工作</li>
          <li><strong>灵活换工作：</strong>可以更换雇主，Transfer不需要重新抽签</li>
          <li><strong>无国籍限制：</strong>全球申请人公平竞争，无特定国家配额</li>
        </ul>

        <h2>我们的雇主匹配服务</h2>
        <p>
          对于尚未找到雇主的申请人，我们提供专业的雇主资源匹配服务：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">精准匹配</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">根据您的专业背景和职业规划，匹配符合条件的H-1B友好雇主</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">真实职位</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">确保职位真实存在，薪资符合Prevailing Wage标准</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">多次机会</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">一次匹配，连续多年抽签机会，提高整体成功率</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">全程支持</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">从简历优化、面试辅导到签证获批，全程陪伴</p>
          </div>
        </div>

        <h2>H-1B抽签机制详解</h2>
        <p>H-1B每年有固定配额，需要通过抽签获得申请资格：</p>
        <ul>
          <li><strong>普通配额：</strong>65,000个名额，面向所有符合条件的申请人</li>
          <li><strong>硕士配额：</strong>20,000个名额，专门给美国硕士及以上学历持有者</li>
          <li><strong>抽签顺序：</strong>先进行硕士配额抽签，未中签者进入普通配额池</li>
          <li><strong>时间节点：</strong>每年3月注册，4月公布结果，10月1日生效</li>
        </ul>
        
        <h3>提高中签率的策略</h3>
        <p>虽然抽签本质上是随机过程，但以下策略可以帮助您最大化机会：</p>
        <ul>
          <li><strong>学历提升：</strong>美国硕士及以上学历可享受硕士配额，中签率更高</li>
          <li><strong>STEM专业优势：</strong>STEM专业毕业生拥有3年OPT，可参与最多4次抽签</li>
          <li><strong>雇主选择：</strong>选择愿意连续多年为您注册的稳定雇主</li>
          <li><strong>提前准备：</strong>中签后需要快速提交完整材料，提前准备避免延误</li>
        </ul>

        <h2>2025年H-1B政策更新</h2>
        <p>2025年H-1B申请有以下重要变化需要注意：</p>
        <ul>
          <li><strong>电子注册系统：</strong>继续采用电子抽签注册系统，简化申请流程</li>
          <li><strong>反欺诈措施：</strong>USCIS加强对重复注册和虚假申请的审查</li>
          <li><strong>社交媒体审查：</strong>签证申请人可能需要提供社交媒体账号信息</li>
          <li><strong>工资标准更新：</strong>Prevailing Wage标准每年调整，需关注最新数据</li>
        </ul>

        <h2>申请注意事项</h2>
        <p>申请H-1B签证时需要注意以下几点：</p>
        <ul>
          <li>
            <strong>提前规划：</strong>建议在OPT/STEM OPT期间尽早准备，利用多次抽签机会
          </li>
          <li>
            <strong>职位匹配：</strong>职位描述需要与您的学历专业高度相关，且属于"专业职位"
          </li>
          <li>
            <strong>薪资合规：</strong>雇主支付的工资必须达到或超过该地区的Prevailing Wage
          </li>
          <li>
            <strong>备选方案：</strong>准备L-1、O-1等替代方案，以防未中签
          </li>
        </ul>

        <h2>常见申请被拒原因</h2>
        <ul>
          <li>职位不被认定为"专业职位"（Specialty Occupation）</li>
          <li>申请人的学历与职位不匹配</li>
          <li>雇主资质不足或公司规模过小</li>
          <li>工资标准低于Prevailing Wage</li>
          <li>申请材料不完整或存在错误</li>
        </ul>

        <h2>未中签后的替代方案</h2>
        <p>如果H-1B抽签未中，不必灰心，还有多种替代方案可供选择：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">O-1杰出人才签证</h4>
            <p className="text-sm text-amber-800 dark:text-amber-200">无需抽签，适合有专业成就的人才</p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">L-1跨国公司签证</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">适合跨国公司员工调动</p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">继续STEM OPT</h4>
            <p className="text-sm text-green-800 dark:text-green-200">第二年继续参加抽签</p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Day-1 CPT</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">继续学业同时工作（需谨慎选择）</p>
          </div>
        </div>

        <h2>H-1B与绿卡规划</h2>
        <p>
          H-1B是通往绿卡的重要一步。建议在H-1B第三年启动绿卡申请流程：
        </p>
        <ol>
          <li><strong>PERM劳工证：</strong>雇主证明无法招募到合格的美国工人（6-12个月）</li>
          <li><strong>I-140移民申请：</strong>证明申请人符合EB-1或EB-2要求（4-8个月）</li>
          <li><strong>排期等待：</strong>根据出生国和类别，等待时间从数年到数年不等</li>
          <li><strong>I-485调整身份：</strong>排期到达后递交绿卡申请</li>
        </ol>
        
        <h3>H-1B延期超过6年的条件</h3>
        <p>在以下情况下，H-1B可以超过6年期限：</p>
        <ul>
          <li>PERM或I-140已提交超过365天</li>
          <li>I-140已获批且排期未到</li>
        </ul>
        <p>这使得H-1B持有者可以继续工作，直到绿卡申请完成。</p>
        <p>
          建议尽早启动绿卡申请，以便在H-1B六年期限前完成PERM，获得H-1B延期资格。
        </p>
      </div>
    </ImmigrationDetailLayout>
  );
}
