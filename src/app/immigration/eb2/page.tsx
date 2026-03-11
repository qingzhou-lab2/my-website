'use client';

import { ImmigrationDetailLayout } from '@/components/immigration/ImmigrationDetailLayout';

const eb2Features = [
  '高学历专业人士可申请',
  'NIW（国家利益豁免）无需雇主',
  '相比其他职业移民，排期相对较短',
  '可申请加急处理（PP）',
  '全家可同时申请绿卡',
  '可在美国境内调整身份',
  '适用范围广',
  '费用相对较低',
];

const eb2Requirements = [
  '拥有硕士或更高学位，或',
  '拥有学士学位+5年相关工作经验，或',
  '满足NIW标准：',
  '  - 拥有高等学位或特殊能力',
  '  - 所从事领域对美国具有实质性价值',
  '  - 愿意在美国继续从事该领域工作',
  '  - 申请免除雇主要求对美国有利',
];

const eb2Timeline = [
  { step: '评估准备', time: '2-3个月', description: '评估资格，准备申请材料' },
  { step: '提交PERM', time: '3-6个月', description: '劳工证认证（非NIW需此步骤）' },
  { step: '提交I-140', time: '1个月', description: '提交移民申请，可加急' },
  { step: '等待排期', time: '2-5年', description: '等待排期到达' },
  { step: '身份调整', time: '6-12个月', description: '调整身份或申请移民签证' },
];

const eb2Documents = [
  '护照复印件',
  'I-140申请表',
  '学历证明及成绩单',
  '工作经验证明',
  '推荐信',
  '个人陈述',
  '发表论文/专利证明',
  '奖项证书',
  '劳工证（非NIW）',
  '工资证明',
];

const eb2FAQs = [
  {
    question: 'EB-2需要什么学历要求？',
    answer: 'EB-2需要硕士或以上学历，或者本科学历+5年相关工作经验。如果是特殊能力类别，需要证明在科学、艺术或商业领域有显著成就。',
  },
  {
    question: '什么是NIW？',
    answer: 'NIW（National Interest Waiver）是国家利益豁免，允许EB-2申请人免除雇主担保要求，只要有特殊能力且符合美国国家利益即可申请。',
  },
  {
    question: 'EB-2 NIW需要雇主吗？',
    answer: '不需要。EB-2 NIW的最大优势就是无需雇主担保，可以个人申请，比普通EB-2更灵活。',
  },
];

export default function EB2Page() {
  return (
    <ImmigrationDetailLayout
      title="EB-2 高学历专业人士移民"
      subtitle="第二优先"
      description="EB-2是美国第二优先职业移民类别，适合拥有硕士及以上学位或具有特殊能力的专业人士。包含NIW（国家利益豁免）子类别，无需雇主担保。"
      features={eb2Features}
      requirements={eb2Requirements}
      timeline={eb2Timeline}
      documents={eb2Documents}
      faqs={eb2FAQs}
    >
      <div className="prose dark:prose-invert max-w-none">
        <h2>EB-2类别介绍</h2>
        <p>EB-2包含两个子类别：</p>
        <ul>
          <li><strong>EB-2A：</strong>拥有硕士或以上学位的专业人士</li>
          <li><strong>EB-2B：</strong>拥有特殊能力的人士</li>
          <li><strong>EB-2 NIW：</strong>国家利益豁免，无需雇主担保</li>
        </ul>
        <p>其中，EB-2 NIW是许多科研人员、学者的首选，因为无需雇主且审批相对快速。</p>
      </div>
    </ImmigrationDetailLayout>
  );
}
