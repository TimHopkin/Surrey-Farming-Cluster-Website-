export interface FundingOpportunity {
  id: string;
  title: string;
  description: string;
  amount: string;
  deadline: string;
  provider: string;
  category: string;
  eligibility: string[];
  status: 'open' | 'closed' | 'coming-soon';
  link?: string;
}

export interface SuccessStory {
  id: string;
  farmName: string;
  title: string;
  description: string;
  amount: string;
  fundingSource: string;
  year: string;
  impact: string[];
  image?: string;
}

export const fundingOpportunities: FundingOpportunity[] = [
  {
    id: '1',
    title: 'Sustainable Farming Incentive (SFI)',
    description: 'Annual payments for farmers who adopt environmentally sustainable farming practices including soil health, biodiversity, and water quality improvements.',
    amount: 'Up to £40,000/year',
    deadline: 'Rolling applications',
    provider: 'DEFRA',
    category: 'Environmental',
    eligibility: [
      'Active farmers with agricultural land',
      'Minimum 5-hectare holding',
      'Must be registered for Basic Payment Scheme'
    ],
    status: 'open',
    link: 'https://www.gov.uk/guidance/sustainable-farming-incentive'
  },
  {
    id: '2',
    title: 'Countryside Stewardship Higher Tier',
    description: 'Competitive scheme offering payments for complex environmental management on the most environmentally significant sites.',
    amount: 'Variable rates',
    deadline: '31st July 2024',
    provider: 'Natural England',
    category: 'Environmental',
    eligibility: [
      'Landowners and land managers',
      'Sites with high environmental value',
      'Willingness to enter 10-year agreement'
    ],
    status: 'open'
  },
  {
    id: '3',
    title: 'Innovation in Agriculture Fund',
    description: 'Support for farmers and agricultural businesses developing innovative technologies and practices to improve productivity and sustainability.',
    amount: '£25,000 - £250,000',
    deadline: '15th September 2024',
    provider: 'Innovate UK',
    category: 'Innovation',
    eligibility: [
      'Agricultural businesses',
      'Collaborative projects preferred',
      'Clear innovation and commercial potential'
    ],
    status: 'open'
  },
  {
    id: '4',
    title: 'Local Nature Recovery Fund',
    description: 'Funding to support landscape-scale nature recovery projects that deliver environmental benefits alongside agricultural production.',
    amount: 'Up to £100,000',
    deadline: 'Applications opening Q1 2025',
    provider: 'Surrey County Council',
    category: 'Biodiversity',
    eligibility: [
      'Surrey-based farmers and landowners',
      'Collaborative approaches encouraged',
      'Must demonstrate biodiversity benefits'
    ],
    status: 'coming-soon'
  },
  {
    id: '5',
    title: 'Renewable Energy on Farms Grant',
    description: 'Capital grants to support the installation of renewable energy systems on agricultural holdings.',
    amount: '40% of eligible costs',
    deadline: 'Closed - reopening 2025',
    provider: 'Rural Development Fund',
    category: 'Energy',
    eligibility: [
      'Agricultural holdings',
      'Systems primarily for farm use',
      'Planning permission obtained'
    ],
    status: 'closed'
  }
];

export const successStories: SuccessStory[] = [
  {
    id: '1',
    farmName: 'Greenfield Organic Farm',
    title: 'Solar Installation Transforms Energy Costs',
    description: 'Successfully secured £35,000 in renewable energy grants to install a 50kW solar panel system, reducing electricity costs by 70% and generating additional income through feed-in tariffs.',
    amount: '£35,000',
    fundingSource: 'Renewable Energy on Farms Grant',
    year: '2023',
    impact: [
      '70% reduction in electricity costs',
      '£3,000 annual feed-in tariff income',
      '25-tonne CO2 reduction per year',
      'Enhanced farm sustainability profile'
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: '2',
    farmName: 'Surrey Dairy Collective',
    title: 'Sustainable Grazing System Implementation',
    description: 'Received SFI funding to implement rotational grazing systems and improve soil health across 150 hectares, resulting in improved biodiversity and milk yield.',
    amount: '£18,500',
    fundingSource: 'Sustainable Farming Incentive',
    year: '2023',
    impact: [
      '15% increase in milk yield per hectare',
      '30% improvement in soil organic matter',
      'Significant increase in bird species count',
      'Reduced reliance on artificial fertilizers'
    ],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format'
  },
  {
    id: '3',
    farmName: 'Hillside Arable Farm',
    title: 'Precision Agriculture Technology Adoption',
    description: 'Innovation fund supported the implementation of GPS-guided machinery and variable rate application systems, improving efficiency and reducing input costs.',
    amount: '£45,000',
    fundingSource: 'Innovation in Agriculture Fund',
    year: '2022',
    impact: [
      '20% reduction in fertilizer use',
      '12% increase in crop yields',
      'Improved data-driven decision making',
      '£8,000 annual cost savings'
    ],
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=300&h=200&fit=crop&auto=format'
  }
];