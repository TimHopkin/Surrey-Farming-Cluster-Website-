export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  image?: string;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  registrationLink?: string;
  cost?: string;
  capacity?: number;
  organizer: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Surrey Farming Cluster Awarded £150,000 Innovation Grant',
    excerpt: 'The cluster has been awarded a significant grant to support digital innovation and sustainability initiatives across member farms.',
    content: `The Surrey Farming Cluster has been awarded a £150,000 innovation grant from the Department for Environment, Food and Rural Affairs (DEFRA) to support digital transformation and sustainability initiatives across member farms.

This exciting development will enable the cluster to implement a comprehensive digital platform that connects farmers, facilitates knowledge sharing, and provides data-driven insights to improve farming practices and environmental outcomes.

The grant will fund several key initiatives:

**Digital Platform Development**: Creation of a comprehensive online portal for member farmers to share data, access resources, and collaborate on projects.

**Precision Agriculture Pilot**: Implementation of IoT sensors and data analytics across 10 member farms to monitor soil health, water usage, and crop performance.

**Sustainability Assessment Tools**: Development of tools to help farmers measure and track their environmental impact and progress towards net-zero goals.

**Training and Support**: Comprehensive training programs to help farmers adopt new technologies and sustainable practices.

"This grant represents a significant step forward for agriculture in Surrey," said cluster facilitator Sarah Johnson. "It will enable us to demonstrate how technology and collaboration can drive both productivity and environmental benefits."

The project will begin implementation in early 2024 and is expected to benefit all 45 member farms within the cluster.`,
    author: 'Sarah Johnson',
    publishDate: '2024-01-15',
    category: 'Funding',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop&auto=format',
    featured: true
  },
  {
    id: '2',
    title: 'New Sustainable Farming Practices Workshop Series Launched',
    excerpt: 'A comprehensive workshop series covering regenerative agriculture, soil health, and biodiversity enhancement begins this month.',
    content: `The Surrey Farming Cluster is excited to announce the launch of our new Sustainable Farming Practices Workshop Series, designed to help farmers transition to more environmentally friendly and economically viable farming methods.

The workshop series will cover:

**Regenerative Agriculture Principles**: Understanding the fundamentals of regenerative farming and how to implement these practices on your farm.

**Soil Health Management**: Advanced techniques for improving soil structure, organic matter, and microbial diversity.

**Biodiversity Enhancement**: Creating wildlife corridors, managing field margins, and integrating conservation into productive farming.

**Carbon Sequestration**: Strategies for capturing and storing carbon in agricultural soils and vegetation.

**Water Management**: Efficient irrigation systems and natural flood management techniques.

The workshops will be led by expert practitioners and researchers from the University of Surrey, Royal Agricultural University, and successful farmers who have already implemented these practices.

Each session includes both theoretical learning and practical demonstrations, with opportunities for participants to visit working farms implementing these techniques.

Registration is free for cluster members, with limited spaces available for non-members. All participants will receive comprehensive resource packs and ongoing support.`,
    author: 'Dr. Michael Green',
    publishDate: '2024-01-10',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=300&fit=crop&auto=format',
    featured: false
  },
  {
    id: '3',
    title: 'Member Spotlight: Greenfield Organic Farm\'s Solar Success',
    excerpt: 'Learn how Greenfield Organic Farm reduced energy costs by 70% through their renewable energy installation.',
    content: `This month, we're highlighting the remarkable success of Greenfield Organic Farm in implementing renewable energy solutions that have transformed their operational efficiency and environmental impact.

Located in Guildford, Greenfield Organic Farm has been a cluster member since our inception and serves as an inspiring example of how innovation and sustainability can go hand in hand.

**The Challenge**: Rising energy costs were significantly impacting the farm's profitability, particularly for their cold storage and processing facilities.

**The Solution**: Working with cluster partners and accessing government grants, the farm installed a 50kW solar panel system along with battery storage capabilities.

**The Results**:
- 70% reduction in electricity costs
- £3,000 annual income from feed-in tariffs
- 25-tonne reduction in CO2 emissions per year
- Enhanced reputation with environmentally conscious customers

"The support from the cluster was invaluable," says farm owner James Mitchell. "From helping us navigate the grant application process to connecting us with reliable suppliers, we couldn't have achieved this without the collaborative network."

The installation has also opened new opportunities for the farm, including educational visits and consultancy work helping other farms implement similar systems.

Greenfield Organic Farm is now planning phase two of their renewable energy program, which will include a small wind turbine and expanded battery storage.`,
    author: 'Emma Thompson',
    publishDate: '2024-01-05',
    category: 'Success Story',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=300&fit=crop&auto=format',
    featured: true
  },
  {
    id: '4',
    title: 'Cluster Annual Meeting: Celebrating 2023 Achievements',
    excerpt: 'Join us for our annual meeting where we\'ll review the year\'s accomplishments and plan for 2024.',
    content: `We invite all cluster members and interested parties to attend our Annual Meeting on February 15th, 2024, where we'll celebrate our collective achievements and set our vision for the year ahead.

**2023 Highlights**:
- 15 new member farms joined the cluster
- £450,000 in total funding secured by members
- 25 collaborative projects initiated
- 300% increase in knowledge-sharing activities

**Agenda Items**:
- Financial report and membership update
- Presentation of major achievements and case studies
- Introduction of new sustainability initiatives
- Planning for 2024 projects and goals
- Networking lunch and farm tours

**Guest Speakers**:
- Professor Lisa Anderson, University of Surrey - "The Future of Sustainable Agriculture"
- Tom Wilson, DEFRA - "New Funding Opportunities for 2024"
- Member presentations on successful projects

The meeting will be held at the Surrey Agricultural Centre from 9:00 AM to 4:00 PM, including lunch and farm tours of nearby member operations.

Registration is required for catering purposes. The event is free for all cluster members and £25 for non-members (including lunch).

This is an excellent opportunity to network with fellow farmers, learn about new opportunities, and contribute to shaping the cluster's future direction.`,
    author: 'Surrey Farming Cluster Admin',
    publishDate: '2024-01-01',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=300&fit=crop&auto=format',
    featured: false
  }
];

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Regenerative Agriculture Workshop',
    description: 'Hands-on workshop covering soil health, cover crops, and rotational grazing techniques.',
    date: '2024-02-20',
    time: '09:00 - 16:00',
    location: 'Hillside Arable Farm, Farnham',
    category: 'Workshop',
    registrationLink: '/events/register/1',
    cost: 'Free for members, £50 for non-members',
    capacity: 25,
    organizer: 'Surrey Farming Cluster'
  },
  {
    id: '2',
    title: 'Farm Business Planning Session',
    description: 'Expert guidance on financial planning, diversification opportunities, and risk management.',
    date: '2024-02-28',
    time: '10:00 - 15:00',
    location: 'Surrey Agricultural Centre, Guildford',
    category: 'Business',
    registrationLink: '/events/register/2',
    cost: 'Free for members',
    capacity: 30,
    organizer: 'Surrey Farming Cluster'
  },
  {
    id: '3',
    title: 'Technology Showcase: Precision Agriculture',
    description: 'Demonstration of the latest precision agriculture technologies and their practical applications.',
    date: '2024-03-15',
    time: '13:00 - 17:00',
    location: 'Woodland Edge Market Garden, Reigate',
    category: 'Technology',
    registrationLink: '/events/register/3',
    cost: 'Free',
    capacity: 40,
    organizer: 'Surrey Farming Cluster & AgTech Partners'
  },
  {
    id: '4',
    title: 'Biodiversity and Wildlife Management Tour',
    description: 'Farm walk showcasing successful biodiversity enhancement projects and wildlife-friendly farming.',
    date: '2024-03-22',
    time: '14:00 - 16:30',
    location: 'Surrey Dairy Collective, Dorking',
    category: 'Conservation',
    registrationLink: '/events/register/4',
    cost: 'Free for members, £15 for non-members',
    capacity: 20,
    organizer: 'Surrey Farming Cluster & Natural England'
  }
];