// Site content and metadata

export const siteMetadata = {
  name: 'BONDZE Precious Metals and Mineral Trading LLC',
  shortName: 'BONDZE',
  tagline: 'Building a disciplined precious metals platform connecting Africa and global markets.',
  description: 'BONDZE operates across mining development and precious metals trading with institutional discipline.',
  url: 'https://www.bondze.com',
  email: 'info@bondze.com',
  location: {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Dubai Multi Commodities Centre (DMCC)',
  },
  social: {
    // Add social media links when available
  },
  founded: 2020,
};

export const navigation = {
  main: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Business', path: '/business' },
    { label: 'Geography', path: '/geography' },
    { label: 'Governance', path: '/governance' },
    { label: 'Partnerships', path: '/partnerships' },
    { label: 'Investors', path: '/investors' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ],
  footer: {
    quick: [
      { label: 'About', path: '/about' },
      { label: 'Our Business', path: '/business' },
      { label: 'Geography', path: '/geography' },
      { label: 'Contact', path: '/contact' },
    ],
    governance: [
      { label: 'Governance', path: '/governance' },
      { label: 'Partnerships', path: '/partnerships' },
      { label: 'Investors', path: '/investors' },
      { label: 'Careers', path: '/careers' },
    ],
    legal: [
      { label: 'Legal Disclaimer', path: '/legal' },
      { label: 'Privacy Policy', path: '/legal' },
      { label: 'Terms of Use', path: '/legal' },
    ],
  },
};

export const businessVerticals = [
  {
    id: 'gold-mining',
    title: 'Gold Mining & Asset Development',
    description: 'Strategic partnerships and SPVs for mine activation and concession development.',
    activities: [
      'Mine activation through targeted investment',
      'SPVs and joint venture structures',
      'Concession development and exploration',
    ],
  },
  {
    id: 'gold-trading',
    title: 'Gold Trading & Offtake',
    description: 'Doré sourcing, export logistics, and refinery sales.',
    activities: [
      'Doré sourcing from verified mining partners',
      'Secure export logistics',
      'International refinery sales',
    ],
  },
  {
    id: 'copper-mining',
    title: 'Copper Mining',
    description: 'Copper operations with processing and value-addition capabilities.',
    activities: [
      'Concentrate trading',
      'Processing and value addition',
      'Semi-processing capabilities',
    ],
  },
  {
    id: 'minerals-trading',
    title: 'Minerals & Metals Trading',
    description: 'Diversified trading in critical and industrial minerals.',
    activities: [
      'Critical minerals (cobalt, lithium, nickel)',
      'Industrial metals (zinc, lead, tin)',
      'Precious metals (silver, PGMs)',
    ],
  },
];

export const geographicRegions = [
  {
    id: 'west-africa',
    name: 'West Africa',
    type: 'mining',
    focus: 'Gold mining and doré sourcing',
  },
  {
    id: 'central-africa',
    name: 'Central Africa',
    type: 'mining',
    focus: 'Copper and gold operations',
  },
  {
    id: 'dubai',
    name: 'Dubai HQ',
    type: 'hq',
    focus: 'Global trading and corporate operations',
  },
];

export const governancePrinciples = [
  {
    title: 'Transparency',
    description: 'Clear documentation and reporting for stakeholder visibility.',
  },
  {
    title: 'Accountability',
    description: 'Defined roles and clear lines of accountability.',
  },
  {
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation frameworks.',
  },
  {
    title: 'Compliance',
    description: 'Adherence to AML/CFT and responsible sourcing standards.',
  },
];

export const companyValues = [
  {
    title: 'Excellence',
    description: 'Pursuing excellence in every aspect of our operations.',
  },
  {
    title: 'Integrity',
    description: 'Operating with unwavering integrity and ethical standards.',
  },
  {
    title: 'Respect',
    description: 'Respecting communities, environments, and cultures.',
  },
  {
    title: 'Accountability',
    description: 'Taking ownership of our actions and impacts.',
  },
];

export const marketPrices = {
  lastUpdated: '2024-03-10',
  data: [
    { metal: 'Gold', price: '2,045.30', change: '+1.2%', unit: 'USD/oz' },
    { metal: 'Copper', price: '8,450.00', change: '-0.4%', unit: 'USD/tonne' },
    { metal: 'Silver', price: '23.85', change: '+0.8%', unit: 'USD/oz' },
  ],
  disclaimer: 'Market data for reference only. Not for trading purposes.',
};
