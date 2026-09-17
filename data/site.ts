/** Hero is the opening beat: seniority first, details in later sections */
export const SITE_HERO = {
  headline: 'Senior Frontend Engineer',
  currentRole: 'Leading frontend architecture at Teleoceans',
  paragraphs: [
    'Specializing in React.js, Next.js, and TypeScript, with proven expertise in building scalable products, leading frontend architecture, and mentoring teams. Passionate about product impact, writing maintainable code, and leveraging modern tools to ship faster.',
    'Known for questioning designs, suggesting improvements based on user behavior, and taking responsibility for code quality. Actively guides AI-assisted workflows to accelerate development while maintaining excellence. 4+ years of hands-on production experience across marketplaces, multilingual platforms, and high-scale systems.',
  ],
};

export const SITE_CONTACT = {
  email: 'marwanabdelwahab9@gmail.com',
  phone: '+20 127 400 5584',
  phoneHref: 'tel:+201274005584',
  linkedin: 'https://linkedin.com/in/marwanabdelwahab',
  github: 'https://github.com/mrwan14',
  portfolio: 'https://www.marwantaha.com/',
};

export type ExperienceRole = {
  title: string;
  company: string;
  dates: string;
  current?: boolean;
  bullets: string[];
};

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'Teleoceans',
    dates: 'April 2024 – Present',
    current: true,
    bullets: [
      'Led frontend architecture decisions and mentored team members across multiple product features',
      'Architected scalable React/Next.js solutions, focusing on performance, accessibility, and user experience',
      'Collaborated with product and design teams to identify improvements based on customer behavior and usage patterns',
      'Owned frontend features from concept through production, including testing, debugging, and optimization',
    ],
  },
  {
    title: 'Contract Frontend Developer',
    company: 'Aura Space & Multiple Clients',
    dates: '2024 – 2026',
    bullets: [
      'Led frontend development for Aura Space workspace management (analytics, client tracking, CRUD operations)',
      'Contributed to Aura’s core development team, architecting scalable solutions across client projects',
      'Delivered end-to-end frontend solutions across fintech, e-commerce, real estate, hospitality, and education',
      'Designed and implemented scalable architectures with API integrations, state management, and performance optimization',
      'Led multilingual (EN/AR) product builds with full RTL/LTR support and accessibility compliance',
      'Leveraged AI-assisted tools to accelerate development, reduce bugs, and improve code quality',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Cdia Software House',
    dates: 'Jan 2023 – April 2024',
    bullets: [
      'Built and maintained scalable React.js applications, collaborating closely with designers and backend teams',
      'Optimized component rendering and asset loading, improving application performance',
      'Developed reusable and type-safe components using TypeScript',
    ],
  },
];

export const EXPERIENCE_INTRO = {
  yearsLabel: '4+ years',
  yearsDetail:
    'intense, high-impact shipping across Teleoceans, Aura Space, and client products — marketplaces, SaaS, education, hospitality, real estate, and fintech.',
};

export const CORE_STRENGTHS = [
  'Scalable Frontend Architecture',
  'React & Next.js Expertise',
  'TypeScript Mastery',
  'Performance Optimization',
  'API Integration',
  'Multilingual (RTL/LTR) Development',
  'Accessible Interfaces',
  'Team Leadership & Mentorship',
  'Product-Driven Thinking',
  'AI-Assisted Workflows',
  'Mobile & Web Development',
];

export const TECHNICAL_SKILLS: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend Frameworks',
    items: ['React.js', 'Next.js (App Router)', 'Flutter', 'Redux', 'React Query', 'TanStack Query'],
  },
  {
    category: 'Styling & Design',
    items: ['Tailwind CSS', 'Material-UI', 'Bootstrap', 'Framer Motion', 'GSAP', 'Lottie'],
  },
  {
    category: 'Backend & Integration',
    items: ['REST APIs', 'Supabase', 'Firebase', 'React Hook Form', 'Yup / Zod'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git / GitHub', 'Vercel', 'Responsive design', 'Web performance', 'Accessibility (a11y)'],
  },
  {
    category: 'Practices',
    items: [
      'Component-based architecture',
      'State management',
      'Server / Client rendering',
      'Code review leadership',
      'Agile methodologies',
      'Mentorship',
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor's Degree in Software Engineering",
  dates: '2019 – 2023',
  school: 'Faculty of Computers and Artificial Intelligence, Helwan University',
  project: 'Graduation Project: Korek App — Vehicle Management System',
};

export const LANGUAGES = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Advanced' },
];
