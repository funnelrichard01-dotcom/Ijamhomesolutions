import { ServiceItem, ProjectItem, TestimonialItem } from '../types';

export const BUSINESS_INFO = {
  name: 'IJAM Home Solutions',
  tagline: 'Where You Jam and We Provide Home Solutions',
  phone: '727-692-5922',
  phoneFormatted: '(727) 692-5922',
  phoneInternational: '+1 727-692-5922',
  email: 'ijamhomes@gmail.com',
  contractingEmail: 'ijamcontractingsolutions@gmail.com',
  whatsappNumber: '+1 727-692-5922',
  whatsappUrl: 'https://wa.me/17276925922?text=Hi%20IJAM%20Home%20Solutions%2C%20I%20found%20your%20website%20and%20I%27d%20like%20to%20discuss%20a%20home%20project.',
  hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
  serviceArea: 'Tampa, FL & Surrounding Areas',
  stateContractorPool: '191,478',
  percentileRank: '99th Percentile (Top 1%)',
  logoUrl: '/images/ijam-logo-1024.png',
  logoOriginal: '/images/ijam-logo.png',
};

export const TRUST_PILLARS = [
  {
    id: 'communication',
    title: 'Clear Communication',
    description: 'You are involved at every step with full transparency throughout the process.',
    icon: 'MessageSquareText',
    badge: '100% Transparency',
  },
  {
    id: 'experts',
    title: 'Qualified Experts',
    description: 'Licensed, certified, and insured.',
    icon: 'ShieldCheck',
    badge: 'Verified & Insured',
  },
  {
    id: 'all-projects',
    title: 'All Projects Are Welcome',
    description: 'Equipped to handle any project of any size or scope.',
    icon: 'Hammer',
    badge: 'Any Size & Scope',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'customer-home-service',
    title: 'Customer Home Services',
    category: 'residential',
    subtitle: 'From minor repairs to complete home renovations',
    description: 'We provide reliable home construction services tailored to your needs. From minor repairs to full renovations, our skilled team delivers quality workmanship, timely service, and lasting results you can trust.',
    features: [
      'Custom Home Remodeling tailored to your lifestyle and vision',
      'Kitchen remodeling with precision craftsmanship and care',
      'Interior living space transformations',
      'Minor repairs to full structural renovations',
    ],
    image: '/images/project-kitchen-1.jpeg',
    tag: 'Residential Focus',
  },
  {
    id: 'multi-family-services',
    title: 'Multi Family Services',
    category: 'multifamily',
    subtitle: 'Apartments, duplexes, and residential complexes',
    description: 'We provide expert multifamily construction services for apartments, duplexes, and residential complexes. Our team delivers quality workmanship, efficient timelines, and long-lasting results.',
    features: [
      'Multi-unit apartment and duplex renovation solutions',
      'Efficient timelines designed for property turnaround',
      'Durable, high-traffic materials selection',
      'Professional project coordination and clear milestones',
    ],
    image: '/images/project-remodel-2.jpeg',
    tag: 'Multi-Unit Expertise',
  },
  {
    id: 'custom-home-remodel',
    title: 'Custom Home Remodeling',
    category: 'residential',
    subtitle: 'Designed to fit your lifestyle, needs, and vision',
    description: 'We specialize in custom home remodeling designed to fit your lifestyle, needs, and vision. Quality delivered through craftsmanship, precision, and care.',
    features: [
      'Personalized design consultation & planning',
      'Transparent breakdown of costs and materials',
      'Budget-aligned material selection (durable & attractive)',
      'Constant communication throughout the build',
    ],
    image: '/images/project-interior-3.jpeg',
    tag: 'Custom Craftsmanship',
  },
  {
    id: 'handy-services',
    title: 'Handy Services & Maintenance',
    category: 'specialized',
    subtitle: 'Small but important jobs that keep your property in top condition',
    description: 'Our handy services are designed to take care of the small but important jobs that keep your home or property in top condition. From minor repairs and installations to general maintenance tasks, our skilled team delivers reliable workmanship with attention to detail. Whether it’s fixing, replacing, adjusting, or improving, we handle each task efficiently and professionally.',
    features: [
      'Quick-response repairs and fixture replacements',
      'General home and rental property maintenance',
      'Adjustments, installations, and precision touch-ups',
      'Focus on safety, durability, and convenience',
    ],
    image: '/images/project-kitchen-1.jpeg',
    tag: 'Handy Solutions',
  },
  {
    id: 'contracting-solutions',
    title: 'IJAM Contracting Solutions',
    category: 'specialized',
    subtitle: 'Complete construction connections for residential & commercial needs',
    description: 'IJAM Contracting Solutions has all the connections needed to tackle full projects. We provide complete construction solutions tailored to residential and commercial projects of all sizes with experienced specialists across key construction trades.',
    features: [
      'Licensed trade connections: Plumber, Carpenter, Mason',
      'Certified Electrician & HVAC specialist coordination',
      'General contractor oversight and milestone management',
      'Investor renovation and appraisal-aligned execution',
    ],
    image: '/images/project-remodel-2.jpeg',
    tag: 'Full Trades Network',
  },
];

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: 'kitchen-remodel-tampa',
    title: 'Custom Kitchen Remodel',
    category: 'Kitchens',
    description: 'Custom kitchen transformation featuring modern cabinetry, upgraded countertops, recessed lighting, and precision installation delivered on budget and on schedule.',
    image: '/images/project-kitchen-1.jpeg',
    highlight: 'Craftsmanship & Precision',
    details: [
      'Quality delivered through craftsmanship, precision, and care',
      'Durable, beautiful materials matched to customer budget',
      'Full transparency and regular progress updates',
    ],
  },
  {
    id: 'interior-renovation-living',
    title: 'Complete Interior Living Renovation',
    category: 'Interior Renovations',
    description: 'Full interior revitalization with open-concept spatial flow, premium flooring, clean trim work, and high-standard finishing.',
    image: '/images/project-remodel-2.jpeg',
    highlight: 'Quality Delivered',
    details: [
      'Tailored to fit lifestyle, needs, and vision',
      'Consistent communication from start to finish',
      'Meticulous site cleanup and quality walk-through',
    ],
  },
  {
    id: 'residential-custom-build',
    title: 'Residential Custom Transformation',
    category: 'Home Projects',
    description: 'Custom structural and architectural upgrades demonstrating quality craftsmanship, attention to detail, and durable construction.',
    image: '/images/project-interior-3.jpeg',
    highlight: 'High Standards Met',
    details: [
      'Equipped for any project size or scope',
      'Clear milestones and budget adherence',
      'Guaranteed project satisfaction',
    ],
  },
  {
    id: 'multifamily-complex-upgrade',
    title: 'Multi-Family Property Improvement',
    category: 'Multi-Family Projects',
    description: 'Unit turn and common area enhancements for residential complex, balancing rapid turnaround with lasting durability for tenants.',
    image: '/images/project-remodel-2.jpeg',
    highlight: 'Turnaround & Durability',
    details: [
      'Efficient timelines minimizing downtime',
      'Heavy-duty hardware and materials',
      'Professional contractor oversight',
    ],
  },
  {
    id: 'bathroom-interior-refresh',
    title: 'Modern Bathroom & Fixture Refresh',
    category: 'Bathrooms',
    description: 'Custom bathroom enhancements with modern tile work, updated vanity, precision plumbing fixtures, and clean waterproofing.',
    image: '/images/project-kitchen-1.jpeg',
    highlight: 'Precision Detail',
    details: [
      'Durable and stylish materials within customer price range',
      'Full waterproofing and licensed trade execution',
      'On-time delivery and clean handover',
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'review-1',
    quote: '“One of my biggest concerns going into this project was affordability and staying within a strict budget while not compromising on the quality of work. IJAM Home Solutions understood my concerns and my vision and provided a detailed and transparent breakdown of costs while also remaining in constant contact with me throughout the entire project.“',
    author: 'Homeowner Renovation Client',
    location: 'Tampa Area',
    rating: 5,
    highlight: 'Strict Budget Adherence & Constant Contact',
  },
  {
    id: 'review-2',
    quote: '“I wanted to renovate our office space. They provided a reasonable quote and were very professional. The job was done in a timely manner and I am very pleased with the results. I would highly recommend them.”',
    author: 'Commercial & Property Client',
    location: 'Tampa Area',
    rating: 5,
    highlight: 'Reasonable Quote & Timely Delivery',
  },
  {
    id: 'review-3',
    quote: '“They helped pick out the materials that would be both durable, good looking and in my price range. Even with a few small modifications they stayed on budget.“',
    author: 'Residential Project Client',
    location: 'Tampa Area',
    rating: 5,
    highlight: 'Durable Materials & Stayed on Budget',
  },
];

export const ABOUT_STORY = {
  heading: 'About IJAM Home Solutions',
  slogan: 'Where You Jam, and We Provide Home Solutions!',
  paragraphs: [
    'We started as a humble handyman company, we found the potential in the sales of Real estate so we first became wholesalers to licensed realtors, blending real estate insight with contracting expertise.',
    'IJAM Home Solutions handles handyman tasks, while IJAM Contracting Solutions has all the connections needed to tackle full projects. With almost a decade worth of real estate experience, we bring our connections and experience together so you can jam throughout the process, and we provide any solution needed.',
    'As a leading contractor in the Tampa area, we deliver with an unwavering commitment to quality, integrity, honesty and craftsmanship. We work with you every step of the way to guarantee project satisfaction and exceed your standards.',
  ],
  stats: [
    { label: 'Statewide Percentile', value: 'Top 1%', desc: 'Ranked in 99th percentile among 191,478 Florida contractors' },
    { label: 'Real Estate & Construction Insight', value: '10+ Years', desc: 'Blending market understanding with hands-on trade skills' },
    { label: 'Project Scope', value: 'All Sizes', desc: 'From minor handy repairs to full custom remodels' },
    { label: 'Communication Standard', value: '100%', desc: 'Full transparency at every step of your project' },
  ],
};
