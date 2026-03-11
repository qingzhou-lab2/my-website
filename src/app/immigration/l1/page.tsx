'use client';

import { ImmigrationDetailLayout } from '@/components/immigration/ImmigrationDetailLayout';

const l1Features = [
  '无年度配额限制，无需抽签',
  '加急处理最快15个工作日获批',
  'L-1A最长可留美7年，L-1B最长5年',
  '配偶（L-2）可合法在美工作，无限制',
  '21岁以下子女可免费入读公立学校',
  'L-1A可直接转换EB-1C绿卡（目前无排期）',
  '新设美国公司也可申请',
  '无语言成绩要求',
  '官方批准率约93.14%（EB-1C绿卡）',
];

const l1Requirements = [
  '申请人在过去三年内至少为海外公司连续工作满一年',
  '海外公司与美国公司存在合格的关联关系（母子公司、分公司或附属公司）',
  'L-1A：担任高管或经理职位',
  'L-1B：掌握公司核心专业知识或技术',
  '美国公司需要真实运营，有办公场地和业务活动',
  '中国母公司年盈利建议20万美金以上（支撑美国公司运营）',
];

const l1Types = [
  {
    type: 'L-1A',
    title: '跨国公司高管/经理',
    duration: '最长7年',
    description: '适用于在公司担任高管或经理职位的人员，如CEO、总监、部门经理等',
    greencard: '可直接转EB-1C绿卡，目前无排期，约1.5-2年拿绿卡',
  },
  {
    type: 'L-1B',
    title: '跨国公司专业人员',
    duration: '最长5年',
    description: '适用于掌握公司核心专业知识或技术的人员',
    greencard: '需通过EB-2或EB-3申请绿卡，有排期，约5年拿绿卡',
  },
];

const l1Timeline = [
  {
    step: '前期评估与规划',
    time: '1-2周',
    description:
      '评估申请资格，制定美国公司落地方案，准备商业计划书',
  },
  {
    step: '美国公司设立',
    time: '2-4周',
    description:
      '注册美国公司、开立银行账户、租赁办公场地、建立运营架构',
  },
  {
    step: 'I-129申请递交',
    time: '2-4周',
    description:
      '准备全套申请材料，向USCIS递交L-1申请',
  },
  {
    step: '移民局审批',
    time: '15天-6个月',
    description:
      '加急处理15个工作日获批，常规处理约2-6个月',
  },
  {
    step: '入境美国',
    time: '签证获批后',
    description:
      '持L-1签证入境美国，开始为新公司工作',
  },
];

const l1Documents = [
  '申请人护照复印件（有效期至少6个月）',
  '个人简历（详细工作经历和教育背景）',
  '海外公司营业执照、章程、股权结构证明',
  '海外公司财务报表、审计报告、税务证明',
  '海外公司与申请人的雇佣合同、工资单（近三年）',
  '美国公司注册文件、营业执照、章程',
  '美国公司银行对账单、办公场地租赁合同',
  '商业计划书（新设公司必须）',
  '公司组织架构图、职位说明',
  '中美公司关联关系证明（股权证明等）',
  '照片（符合签证要求）',
];

const l1FAQs = [
  {
    question: 'L-1签证有名额限制吗？',
    answer:
      '没有。L-1签证是美国唯一没有年度配额限制的工作签证，无需抽签，任何时候都可以申请。这是L-1相对于H-1B最大的优势之一。H-1B每年只有85,000个名额，需要抽签，中签率越来越低。',
  },
  {
    question: '新成立的公司可以申请L-1吗？',
    answer:
      '可以。新设立的美国公司可以为高管或核心员工申请L-1签证，首次批准通常为1年，之后需要证明公司已开始正常运营才能延期。移民局更关注海外公司的经济实力和商业计划的可行性。我们提供完整的公司落地服务。',
  },
  {
    question: 'L-1签证可以直接转绿卡吗？',
    answer:
      'L-1A持有者可以直接申请EB-1C跨国公司高管绿卡，无需经过PERM劳工证程序，目前无排期，约1.5-2年可拿到绿卡。L-1B持有者需通过EB-2或EB-3申请绿卡，需要等排期约5年。这是L-1A相对于L-1B的重大优势。',
  },
  {
    question: 'L-1和H-1B有什么区别？',
    answer:
      '主要区别：1）L-1无配额限制，H-1B需要抽签；2）L-1需要跨国公司背景，H-1B只需要美国雇主；3）L-1A最长7年，H-1B最长6年；4）L-1配偶可无限制工作，H-1B配偶需要满足特定条件；5）L-1A可直接转EB-1C绿卡无排期，H-1B需等排期。',
  },
  {
    question: '申请L-1签证需要多长时间？',
    answer:
      '如果选择Premium Processing加急服务，移民局会在15个工作日内给出结果。常规处理约2-6个月。加上前期准备（公司设立、材料整理），整个流程通常需要3-4个月。',
  },
  {
    question: 'L-1签证需要多少资金投入？',
    answer:
      '签证申请费用约$8,000-$15,000，商业计划书约$2,000-$4,000。更重要的是美国公司运营成本：办公场地、员工工资等，每年约需$10-20万美金。中国母公司年盈利建议20-30万美金以上，才能支撑美国公司正常运营。',
  },
  {
    question: '哪些行业适合申请L-1签证？',
    answer:
      '各行各业都适用：传统零售业（餐馆、超市）、贸易行业、服务业（物流、咨询、法律）、在线业务（电商、培训）、高新科技（软件、IT、生物）等。只要有真实的跨国业务需求，都可以申请。',
  },
  {
    question: 'L-1签证的常见失败原因有哪些？',
    answer:
      '常见失败原因：1）申请人在海外公司工作时间不满一年；2）商业计划书无法说服移民局；3）中国公司营收无法支撑美国公司运营（至少需20万美金/年）；4）美国公司缺乏真实运营；5）L-1续期时材料准备不足。',
  },
];

const l1Articles = [
  {
    id: 'l1-vs-h1b',
    title: 'L-1与H-1B签证全面对比：哪个更适合您？',
    date: '2024-03-20',
    category: '签证对比',
    excerpt: '深入分析L-1和H-1B两种工作签证的优劣势，帮助您选择最适合的赴美工作途径',
  },
  {
    id: 'l1-startup-guide',
    title: '新设美国公司L-1申请全攻略',
    date: '2024-02-15',
    category: '操作指南',
    excerpt: '详解新设公司申请L-1签证的流程、材料准备和注意事项',
  },
  {
    id: 'l1-eb1c-path',
    title: '从L-1A到EB-1C：跨国高管绿卡速通指南',
    date: '2024-01-25',
    category: '移民路径',
    excerpt: '解析L-1A持有者如何通过EB-1C快速获得美国永久居留权',
  },
  {
    id: 'l1-requirements',
    title: 'L-1签证申请条件详解：公司要求与个人要求',
    date: '2024-01-15',
    category: '政策解读',
    excerpt: '详解L-1签证对中国公司、美国公司和申请人的具体要求',
  },
  {
    id: 'l1-extension',
    title: 'L-1签证延期与续签指南',
    date: '2024-01-10',
    category: '操作指南',
    excerpt: '新公司L-1首次获批仅1年，如何成功延期续签',
  },
];

export default function L1Page() {
  return (
    <ImmigrationDetailLayout
      title="L-1 跨国公司高管签证"
      subtitle="工作签证"
      description="L-1签证是跨国公司调派高管和专业人员的理想选择，无配额限制、无需抽签，L-1A可直接转EB-1C绿卡无排期。我们提供从美国公司设立到签证获批的全流程服务。"
      features={l1Features}
      requirements={l1Requirements}
      timeline={l1Timeline}
      documents={l1Documents}
      faqs={l1FAQs}
      articles={l1Articles}
    >
      <div className="prose dark:prose-invert max-w-none">
        <h2>什么是L-1签证？</h2>
        <p>
          L-1签证是美国移民法规定的一种非移民工作签证，专门为跨国公司内部人员调派而设。该签证允许跨国公司将海外的高管、经理或具有特殊专业知识的人员调派到美国的分公司、子公司或附属公司工作。
        </p>
        <p>
          很多人误以为L-1签证只有世界500强的大公司才能申请，事实上，只要符合一定资质，中小企业的高管和技术人才同样可以申请。L-1不是大公司的专利，而是所有有真实跨国业务需求的企业都可以利用的工具。
        </p>

        <h2>L-1A vs L-1B：两种类型对比</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          {l1Types.map((item, index) => (
            <div key={index} className={`p-4 rounded-lg border ${index === 0 ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-lg font-bold ${index === 0 ? 'text-blue-900 dark:text-blue-100' : 'text-green-900 dark:text-green-100'}`}>
                  {item.type}
                </span>
                <span className={`text-sm px-2 py-0.5 rounded ${index === 0 ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-100' : 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-100'}`}>
                  {item.duration}
                </span>
              </div>
              <h4 className={`font-semibold mb-1 ${index === 0 ? 'text-blue-900 dark:text-blue-100' : 'text-green-900 dark:text-green-100'}`}>
                {item.title}
              </h4>
              <p className={`text-sm mb-2 ${index === 0 ? 'text-blue-700 dark:text-blue-300' : 'text-green-700 dark:text-green-300'}`}>
                {item.description}
              </p>
              <p className={`text-xs ${index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'}`}>
                <strong>绿卡路径：</strong>{item.greencard}
              </p>
            </div>
          ))}
        </div>

        <h2>谁适合申请L-1签证？</h2>
        <p>L-1签证特别适合以下人群：</p>
        <ul>
          <li><strong>国内企业主/创业者：</strong>计划在美国设立分公司或子公司，拓展北美市场</li>
          <li><strong>跨国公司高管：</strong>被派往美国分公司担任管理职务</li>
          <li><strong>技术专家：</strong>掌握公司核心技术或产品知识，需要支持美国团队</li>
          <li><strong>希望陪读的家庭：</strong>配偶（L-2）可无限制工作，子女可免费入读公立学校</li>
          <li><strong>想快速拿绿卡的人：</strong>L-1A转EB-1C绿卡无排期，约1.5-2年拿绿卡</li>
        </ul>

        <h2>L-1签证的核心优势</h2>
        <p>相比其他工作签证，L-1具有独特优势：</p>
        <ul>
          <li><strong>无配额限制：</strong>不受H-1B抽签影响，任何时候都可以申请</li>
          <li><strong>审批速度快：</strong>加急处理15个工作日内获批</li>
          <li><strong>全家受益：</strong>配偶（L-2）可合法工作无限制，子女享受免费公立教育</li>
          <li><strong>移民通道清晰：</strong>L-1A可直接转EB-1C绿卡，目前无排期</li>
          <li><strong>新公司可申请：</strong>新设立的美国公司同样可以申请L-1</li>
          <li><strong>门槛相对较低：</strong>无语言要求，无学历要求，不限制行业和年龄</li>
          <li><strong>允许移民倾向：</strong>L-1是双意向签证（Dual Intent），可以直接申请绿卡</li>
        </ul>

        <h2>L-1A转EB-1C绿卡路径</h2>
        <p>
          L-1A持有者在满足条件后可以直接申请EB-1C跨国公司高管绿卡，这是目前获得美国绿卡最快的方式之一：
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">阶段</th>
              <th className="text-left py-2">时间</th>
              <th className="text-left py-2">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">L-1A申请获批</td>
              <td className="py-2">第1-4个月</td>
              <td className="py-2">持L-1A签证入境美国</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">美国公司运营</td>
              <td className="py-2">第4-16个月</td>
              <td className="py-2">公司正常运营，建立业绩记录</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">提交EB-1C申请</td>
              <td className="py-2">第16-20个月</td>
              <td className="py-2">提交I-140申请，可加急15天获批</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">身份调整</td>
              <td className="py-2">第20-28个月</td>
              <td className="py-2">提交I-485，等待绿卡获批</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">获得绿卡</td>
              <td className="py-2">约20-28个月</td>
              <td className="py-2">全家获得10年永久绿卡</td>
            </tr>
          </tbody>
        </table>

        <h2>官方批准率数据</h2>
        <p>
          根据美国移民局公开的2023财年第一季度数据，EB-1C跨国公司高管绿卡：
        </p>
        <ul>
          <li><strong>批准率：</strong>93.14%（批准4,089份，拒绝301份）</li>
          <li><strong>审理中：</strong>5,803份</li>
        </ul>
        <p>
          EB-1C是EB-1类别中批准率最高的子类别，也是目前中国人获得绿卡最快的途径之一。
        </p>

        <h2>我们的美国公司落地服务</h2>
        <p>
          对于计划在美国新设公司的客户，我们提供一站式公司落地解决方案，让您专注于业务发展：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">公司注册</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">选择最优注册州（特拉华、内华达等），完成公司注册、章程制定</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">银行账户</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">协助开立美国商业银行账户，建立公司财务体系</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">办公场地</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">办公场地选址、租赁谈判、装修布置</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">税务合规</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">联邦税号申请、州税务登记、年度报税服务</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">人力资源</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">员工招聘、薪酬体系设计、员工手册制定</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">商业计划</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">专业商业计划书撰写，满足移民局审核要求</p>
          </div>
        </div>

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
              <td className="py-2">L-1签证申请费</td>
              <td className="text-right">$8,000 - $15,000</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">商业计划书</td>
              <td className="text-right">$2,000 - $4,000</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">加急处理费（可选）</td>
              <td className="text-right">$2,805</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">律师费（首次L-1）</td>
              <td className="text-right">$10,000 - $20,000</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">律师费（L-1延期）</td>
              <td className="text-right">$10,000 - $20,000</td>
            </tr>
            <tr>
              <td className="py-2">律师费（EB-1C绿卡）</td>
              <td className="text-right">$10,000 - $20,000</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-slate-500 mt-2">
          * 此外还需考虑美国公司运营成本：办公场地、员工工资等，每年约$10-20万美金
        </p>

        <h2>申请注意事项</h2>
        <p>申请L-1签证时需要注意以下几点：</p>
        <ul>
          <li>
            <strong>关联关系证明：</strong>中美公司之间必须存在合格的关联关系（母子公司、分公司或附属公司），股权结构需清晰可证
          </li>
          <li>
            <strong>真实运营：</strong>美国公司需要有真实的办公场地和业务活动，移民局会进行实地检查
          </li>
          <li>
            <strong>职位匹配：</strong>申请人的职位和职责需要符合L-1A（管理/高管）或L-1B（专业知识）的定义
          </li>
          <li>
            <strong>时间规划：</strong>建议提前3-6个月开始准备，特别是新设公司需要时间完成落地工作
          </li>
          <li>
            <strong>续期准备：</strong>新公司L-1首次批准仅1年，需在到期前3个月提交续期申请
          </li>
        </ul>

        <h2>常见申请被拒原因</h2>
        <ul>
          <li>申请人在海外公司工作时间不满一年（必须连续工作，海外出差时间需扣除）</li>
          <li>中美公司关联关系不明确或证据不足</li>
          <li>申请人职位不符合"高管/经理"或"专业知识人员"定义</li>
          <li>美国公司缺乏真实运营（无办公场地、无业务活动）</li>
          <li>商业计划书不切实际或缺乏可行性</li>
          <li>中国公司营收无法支撑美国公司运营成本</li>
          <li>L-1续期时材料准备不足，业绩与商业计划书差距过大</li>
        </ul>

        <h2>适用行业范围</h2>
        <p>L-1签证适用于各行各业：</p>
        <ul>
          <li><strong>传统零售业：</strong>餐馆、超市、干洗店、美容美发店、加油站等</li>
          <li><strong>贸易行业：</strong>批发、经销商、中介、进出口贸易等</li>
          <li><strong>服务业：</strong>物流、仓储、咨询、法律、旅游、市场推广、影视制作等</li>
          <li><strong>在线业务：</strong>电商、培训、直播、网红等</li>
          <li><strong>高新科技：</strong>软件、硬件、IT、生物科技等</li>
        </ul>
        <p>
          只要有真实的跨国业务需求，都可以申请L-1签证。移民局关注的是商业计划的合理性和真实性，而非公司规模大小。
        </p>
      </div>
    </ImmigrationDetailLayout>
  );
}
