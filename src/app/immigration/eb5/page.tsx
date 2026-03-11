'use client';

import { ImmigrationDetailLayout } from '@/components/immigration/ImmigrationDetailLayout';

const eb5Features = [
  '无年龄、学历、语言要求',
  '无需雇主担保',
  '无需在美国创办企业',
  '全家可同时申请绿卡',
  '投资回报可收回',
  '可在美国任意地方生活',
  '子女可免费享受公立教育',
  '持绿卡5年后可申请美国国籍',
];

const eb5Requirements = [
  '投资额要求：',
  '  - TEA地区：80万美元（目标就业区）',
  '  - 非TEA地区：105万美元',
  '投资资金需合法来源（需证明）',
  '投资需为"风险投资"（无保本承诺）',
  '需创造或保留至少10个就业机会',
  '申请人无犯罪记录',
  '身体健康',
];

const eb5Timeline = [
  { step: '评估准备', time: '1-2个月', description: '评估资格，准备资金证明' },
  { step: '选择项目', time: '1-2个月', description: '选择投资项目，签署投资协议' },
  { step: '提交I-526', time: '2-5年', description: '提交临时绿卡申请，等待审批' },
  { step: '获得临时绿卡', time: '2-3年', description: '获得2年期临时绿卡' },
  { step: '提交I-829', time: '3-5年', description: '提交正式绿卡申请' },
  { step: '获得永久绿卡', time: '永久', description: '获得10年期永久绿卡' },
];

const eb5Documents = [
  '护照复印件',
  'I-526申请表',
  '资金来源证明',
  '资金转移证明',
  '投资协议',
  '项目文件',
  '出生证明',
  '结婚证明（如适用）',
  '无犯罪记录证明',
  '体检报告',
];

const eb5FAQs = [
  {
    question: 'EB-5投资款可以拿回来吗？',
    answer: '原则上可以。大多数EB-5投资项目承诺在5年左右返还投资款，但这是基于项目运营情况，没有法律强制性。投资存在风险。',
  },
  {
    question: '什么是TEA？',
    answer: 'TEA（Targeted Employment Area）是指目标就业区，包括农村地区或失业率高的地区。投资在TEA地区可享受较低的80万美元投资门槛。',
  },
  {
    question: 'EB-5需要在美国工作吗？',
    answer: '不需要。EB-5移民不需要您在美国工作或经营企业，投资完成后您可以自由生活、学习或工作。',
  },
  {
    question: 'EB-5资金来源如何证明？',
    answer: '需要提供完整的资金链证明，包括工资收入、房产出售、企业分红、赠予、继承等。所有资金必须合法来源。',
  },
];

export default function EB5Page() {
  return (
    <ImmigrationDetailLayout
      title="EB-5 投资移民"
      subtitle="第五优先"
      description="EB-5是美国投资移民项目，允许外国投资者通过在美国投资创造就业机会获得美国绿卡。无需年龄、学历、语言要求，是投资移民的首选。"
      features={eb5Features}
      requirements={eb5Requirements}
      timeline={eb5Timeline}
      documents={eb5Documents}
      faqs={eb5FAQs}
    >
      <div className="prose dark:prose-invert max-w-none">
        <h2>EB-5投资移民概述</h2>
        <p>EB-5是美国移民法规定的第五优先职业移民类别，通过投资获得绿卡。项目设立于1990年，旨在吸引外国投资，为美国创造就业机会。</p>
        
        <h2>投资金额要求</h2>
        <ul>
          <li><strong>TEA地区：</strong>80万美元（目标就业区）</li>
          <li><strong>非TEA地区：</strong>105万美元</li>
          <li><strong>区域中心项目：</strong>大多数投资者选择区域中心项目，由专业机构管理</li>
        </ul>
        
        <h2>注意事项</h2>
        <ul>
          <li><strong>投资风险：</strong>EB-5投资为风险投资，无保本承诺</li>
          <li><strong>就业创造：</strong>必须创造或保留10个就业机会</li>
          <li><strong>资金证明：</strong>需要完整合法的资金来源证明</li>
          <li><strong>排期：</strong>中国大陆申请人需要等待排期（约5-10年）</li>
        </ul>
      </div>
    </ImmigrationDetailLayout>
  );
}
