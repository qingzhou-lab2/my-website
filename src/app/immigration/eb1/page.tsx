'use client';

import { ImmigrationDetailLayout } from '@/components/immigration/ImmigrationDetailLayout';

const eb1Features = [
  '无需雇主担保，个人可直接申请',
  '目前对中国申请人无排期',
  '可申请加急处理（15天）',
  '全家可同时申请并获得绿卡',
  '无年龄、学历、语言要求',
  '可在美国境内或境外申请',
  '官方批准率约77.76%（2022财年数据）',
  '绿卡有效期10年，可续期',
];

const eb1Requirements = [
  '在科学、艺术、教育、商业或体育领域具有杰出能力',
  '获得过国际或国家级的重大奖项（如诺贝尔奖、奥斯卡奖等）可一步到位',
  '或满足以下十项条件中的至少三项：',
];

const eb1Criteria = [
  {
    title: '获得专业奖项',
    description: '获得国家或国际级别的专业奖项，奖项越有分量，EB-1A把握越大',
  },
  {
    title: '专业论文发表',
    description: '发表学术论文、专利或专业文章，需有一定引用量（一般200-500引用）',
  },
  {
    title: '原创性重要贡献',
    description: '在学术研究、商业应用或艺术创作领域有独特的原创性贡献',
  },
  {
    title: '担任专业评审',
    description: '担任专业期刊审稿人、项目或比赛评委等，一般需要10-30次评审',
  },
  {
    title: '专业协会会员',
    description: '成为需经专家评定才能加入的专业协会会员，非仅缴费即可加入的协会',
  },
  {
    title: '举办专业展览/表演',
    description: '在国家级或国际级具有高声誉的场合举办展览或表演',
  },
  {
    title: '担任关键职务',
    description: '在工作机构、专业组织或项目中担任主要领导或关键职务',
  },
  {
    title: '获得媒体报道',
    description: '在专业刊物、商业出版物或主流媒体上获得过报道',
  },
  {
    title: '商业成就',
    description: '在专利商业化、表演艺术等方面获得商业成功',
  },
  {
    title: '高薪收入',
    description: '在相关领域薪资远高于同行平均水平（一般年薪百万人民币以上）',
  },
];

const eb1Timeline = [
  {
    step: '材料准备',
    time: '2-3个月',
    description:
      '整理申请材料，准备推荐信（4-8封），撰写个人陈述',
  },
  {
    step: '提交I-140申请',
    time: '1个月',
    description:
      '提交I-140职业移民申请，可选择加急处理（额外$2,805）',
  },
  {
    step: '移民局审批',
    time: '15天-6个月',
    description:
      '加急处理15天内出结果，普通处理3-6个月',
  },
  {
    step: '身份调整',
    time: '6-12个月',
    description:
      '提交I-485调整身份（在美境内）或申请移民签证（境外）',
  },
];

const eb1Documents = [
  '护照复印件',
  'I-140申请表格',
  '获奖证书复印件及翻译',
  '专业协会会员证明',
  '媒体报道资料（含发行量、阅读量信息）',
  '担任评委/审稿证明',
  '学术论文首页、引用记录',
  '作品展示材料',
  '推荐信（4-8封，含独立推荐人）',
  '个人陈述（Petition Letter）',
  '薪酬证明/税务文件',
  '专利证书、商业化证明',
];

const eb1FAQs = [
  {
    question: 'EB-1A真的不需要雇主吗？',
    answer:
      '是的。EB-1A签证完全不需要雇主担保，申请人可以个人名义直接申请。这是EB-1A最大的优势之一，意味着您可以自由选择雇主或自行创业。获得绿卡后可以在美国从事任何工作。',
  },
  {
    question: '没有获得过国际大奖可以申请EB-1A吗？',
    answer:
      '可以。国际大奖（如诺贝尔奖、奥斯卡奖、奥运会金牌）只是EB-1A的两条申请路径之一——一次性成就（One-time Achievement）。大多数人通过满足"十项中的三项"标准成功获批。例如：发表过论文并有引用、担任过审稿人、获得过专业奖项等。',
  },
  {
    question: 'EB-1A需要多少论文引用？',
    answer:
      '没有硬性要求，但根据实际案例：EB-1A一般需要5-10篇文章 + 200-500引用。如果期刊水准高、研究原创性强、或者专业冷门，100引用也有希望。引用数量只是考量因素之一，移民局还会综合评估期刊排名、影响因子、作者排序等因素。',
  },
  {
    question: 'EB-1A的审批需要多长时间？',
    answer:
      '如果选择加急处理（Premium Processing），移民局承诺15个日历日内给出结果。普通处理通常需要3-6个月。相比其他移民类别，EB-1A的审批速度非常快，是目前最快的职业移民途径之一。',
  },
  {
    question: 'EB-1A可以携带家属吗？',
    answer:
      '可以。主申请人的配偶和21岁以下的未婚子女可以作为随行申请人同时获得绿卡。家属不需要满足杰出人才的单独要求，只需提供婚姻/亲属关系证明。子女拿绿卡后可享受美国优质公立教育，入读名校几率大幅提升。',
  },
  {
    question: 'EB-1A申请费用是多少？',
    answer:
      '主要费用包括：I-140申请费$715，加急处理费$2,805（可选），律师费$5,000-$20,000（视案件复杂程度）。相比国内中介动辄40-80万人民币的报价，直接聘请美国律师可节省大量费用。我们提供免费评估，帮您判断是否符合申请条件。',
  },
  {
    question: 'EB-1A和EB-2 NIW有什么区别？',
    answer:
      '主要区别：1）EB-1A要求更高，但无排期；EB-2 NIW门槛较低，但有约3年排期；2）EB-1A可加急，EB-2 NIW不能加急；3）批准率：EB-1A约77.76%，EB-2 NIW约95.66%。如果条件符合EB-1A，建议优先申请；如果条件稍弱，可以先申请NIW锁定优先日期。',
  },
  {
    question: '哪些职业适合申请EB-1A？',
    answer:
      '科学类：科学家、教授、研究员、工程师、医生、AI专家等；艺术类：艺术家、音乐家、导演、设计师等；商业类：企业家、高管、金融专家等；体育类：运动员、教练等。只要在五大领域（科学、艺术、教育、商业、体育）有杰出成就，都有机会申请。',
  },
];

const eb1Articles = [
  {
    id: 'eb1a-criteria-explained',
    title: 'EB-1A十项标准详解：如何判断自己是否符合条件',
    date: '2024-03-10',
    category: '政策解读',
    excerpt: '深入解析EB-1A申请的十项标准，帮助您判断是否符合资格',
  },
  {
    id: 'eb1a-reference-letter-guide',
    title: '如何准备有效的EB-1A推荐信',
    date: '2024-02-25',
    category: '操作指南',
    excerpt: '推荐信是EB-1A申请的关键材料，本文详细讲解如何准备高质量推荐信',
  },
  {
    id: 'eb1a-vs-niw',
    title: 'EB-1A vs EB-2 NIW：如何选择最适合的移民路径',
    date: '2024-01-20',
    category: '移民对比',
    excerpt: '对比分析两种杰出人才移民方式的优劣势，助您做出明智选择',
  },
  {
    id: 'eb1a-academic-papers',
    title: '学术论文在EB-1A申请中的重要性',
    date: '2024-01-15',
    category: '案例分析',
    excerpt: '通过案例分析，说明学术发表如何帮助您满足EB-1A标准',
  },
  {
    id: 'eb1a-o1-pathway',
    title: 'O-1签证：通往EB-1A绿卡的捷径',
    date: '2024-01-10',
    category: '移民路径',
    excerpt: 'O-1签证批准率高达96%，是很多申请人的保底选择',
  },
];

export default function EB1Page() {
  return (
    <ImmigrationDetailLayout
      title="EB-1A 杰出人才移民"
      subtitle="第一优先"
      description="EB-1A是美国移民法规定的第一优先职业移民类别，专门面向在科学、艺术、教育、商业或体育领域具有杰出能力的外国人才。无需雇主担保，目前无排期，加急15天获批，全家直接拿绿卡。"
      features={eb1Features}
      requirements={eb1Requirements}
      timeline={eb1Timeline}
      documents={eb1Documents}
      faqs={eb1FAQs}
      articles={eb1Articles}
    >
      <div className="prose dark:prose-invert max-w-none">
        <h2>什么是EB-1A杰出人才移民？</h2>
        <p>
          EB-1A（Employment-Based Immigration: First Preference - Alien with Extraordinary Ability）是美国移民法规定的第一优先职业移民类别。该类别专门面向在科学、艺术、教育、商业或体育领域具有杰出能力的外国人才，是美国移民中的"黄金签证"。
        </p>
        <p>
          很多申请人一听到"杰出人才"就被劝退了，以为只有获得诺贝尔奖、奥斯卡奖或奥运会金牌的人才能申请。事实上，这些天花板级别的奖项只是EB-1A的两条申请路径之一。大多数成功获批的申请人，都是通过满足"十项中的三项"标准获得绿卡。
        </p>

        <h2>EB-1A申请的两条路径</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">路径一：一次性成就</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              获得过诺贝尔奖、奥斯卡奖、奥运会金牌等国际顶级奖项，仅需提交奖项证明即可一步获批，无需其他材料。
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">路径二：十项中满足三项</h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              大多数申请人走的路径。在十项标准中至少满足三项即可申请，移民局会综合评估申请人的整体杰出程度。
            </p>
          </div>
        </div>

        <h2>EB-1A十项标准详解</h2>
        <p>以下是美国移民局规定的十项标准，满足其中至少三项即可申请：</p>
        <div className="space-y-3 not-prose my-4">
          {eb1Criteria.map((item, index) => (
            <div key={index} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                {index + 1}. {item.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>

        <h2>官方批准率数据</h2>
        <p>
          根据美国移民局公开的2022财年数据：
        </p>
        <ul>
          <li><strong>EB-1A批准率：</strong>77.76%（批准5,623份，拒绝1,608份）</li>
          <li><strong>EB-2 NIW批准率：</strong>95.66%（批准10,316份，拒绝468份）</li>
          <li><strong>O-1签证批准率：</strong>96.21%（批准19,102份，拒绝753份）</li>
        </ul>
        <p>
          整体难度顺序：O-1 &lt; EB-2 NIW &lt; EB-1A。如果您的条件符合EB-1A，建议优先申请；如果条件稍弱，O-1签证是很好的保底选择。
        </p>

        <h2>EB-1A的核心优势</h2>
        <ul>
          <li><strong>无需雇主：</strong>个人可直接申请，不受雇主限制，来美后可自由选择工作</li>
          <li><strong>无排期：</strong>目前对中国申请人无排期，获批后即可调整身份</li>
          <li><strong>审批快：</strong>加急处理15天出结果</li>
          <li><strong>全家受益：</strong>配偶和21岁以下子女可同时获得绿卡</li>
          <li><strong>条件宽松：</strong>无年龄、学历、语言要求</li>
          <li><strong>直接拿永久绿卡：</strong>无需经过临时绿卡阶段</li>
          <li><strong>子女教育：</strong>子女享受美国优质公立教育，入读名校几率大幅提升</li>
        </ul>

        <h2>谁适合申请EB-1A？</h2>
        <p>以下职业人群在满足条件时可申请EB-1A：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">科学类</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              生物学家、化学家、物理学家、计算机工程师、航空工程师、教授、博士、博士后、数据科学家、AI专家
            </p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">艺术类</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              摄影师、插画师、电影制作人、演员、歌手、画家、书法家、时尚设计师、舞台设计师
            </p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">商业类</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              企业顾问、战略顾问、金融分析师、投资顾问、经济学家、行业分析师、高级人力资源经理
            </p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">体育类</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              职业运动员、教练、裁判、球队经理、体能训练师、运动医学专家
            </p>
          </div>
        </div>

        <h2>申请策略建议</h2>
        <ul>
          <li><strong>尽早准备：</strong>审稿机会、论文发表、媒体报道等都需要时间积累</li>
          <li><strong>推荐信质量：</strong>邀请行业内知名专家撰写推荐信，尤其是独立推荐人</li>
          <li><strong>个人陈述：</strong>清晰陈述您的杰出成就和对美国的国家利益贡献</li>
          <li><strong>选择加急：</strong>建议选择加急处理，缩短等待时间，快速获得结果</li>
          <li><strong>避免过度包装：</strong>材料必须真实可证，移民局会核实</li>
        </ul>

        <h2>申请费用参考</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">费用项目</th>
              <th className="text-right py-2">金额</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">I-140申请费</td>
              <td className="text-right">$715</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">加急处理费（可选）</td>
              <td className="text-right">$2,805</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">I-485调整身份费</td>
              <td className="text-right">$1,225</td>
            </tr>
            <tr>
              <td className="py-2">律师费（参考范围）</td>
              <td className="text-right">$5,000 - $20,000</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-slate-500 mt-2">
          * 国内中介报价往往高达40-80万人民币，选择美国本土律师可大幅节省费用
        </p>
      </div>
    </ImmigrationDetailLayout>
  );
}
