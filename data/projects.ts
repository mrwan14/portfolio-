export type ChallengeSolution = {
  challenge: string;
  solution: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role?: string;
  tags: string[];
  highlights: string[];
  impact?: string;
  url: string;
  featured: boolean;
  /** Set when live URL is not ready yet */
  comingSoon?: boolean;
  /** Client / proprietary work with no public URL */
  proprietary?: boolean;
  problem: string;
  whatIBuilt: string;
  keyFeatures: string[];
  techStack: string[];
  challenges: ChallengeSolution[];
};

const projects: Project[] = [
  {
    slug: 'marbat',
    title: 'marbat',
    tagline: 'Multi-platform equestrian marketplace for riders, trainers, and stable operators.',
    role: 'Lead Frontend Developer & Team Monitor',
    tags: ['Marketplace', 'Next.js', 'Flutter'],
    highlights: [
      'Led architecture and team involvement across web and mobile',
      'Next.js 14 marketing site plus a Flutter rider app with 10+ modules',
      'Auth, real-time notifications, booking flows, and analytics dashboards',
    ],
    impact:
      'Architected a scalable multi-platform product, mentored the team, and kept code quality consistent across web and mobile.',
    url: 'https://mrbad-nine.vercel.app',
    featured: true,
    problem:
      'Riders, trainers, and stable operators needed one product to discover services, book, and manage operations instead of fragmented tools.',
    whatIBuilt:
      'Led frontend architecture and team involvement across both platforms. The web frontend is a Next.js 14, TypeScript, and Tailwind marketing site on Vercel with a hero and service sections. The mobile app is Flutter with clean architecture, Firebase auth, OTP login, and push notifications, a rider-facing experience with onboarding, service browsing, stable profiles, booking flows, order tracking, favorites, and account management.',
    keyFeatures: [
      'Marketing-driven Next.js landing site with hero and service sections',
      'Flutter rider app: onboarding, browsing, stables, bookings, orders, favorites, account',
      'Firebase authentication, OTP login, and push notifications',
      'Complex booking flows and order status tracking',
      'Team mentorship and shared quality bar across web and mobile',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Firebase'],
    challenges: [
      {
        challenge: 'One product story across web marketing and a feature-heavy mobile app.',
        solution:
          'Clear platform boundaries: Next.js for the public site, Flutter clean architecture for rider modules, shared product language for bookings and profiles.',
      },
      {
        challenge: 'Keeping quality high while mentoring across two codebases.',
        solution:
          'Reusable patterns, explicit module ownership, and reviews that covered auth, notifications, and booking edge cases.',
      },
    ],
  },
  {
    slug: 'dinary',
    title: 'Dinary',
    tagline: 'Bilingual restaurant ordering platform with a full admin console.',
    role: 'Frontend Developer',
    tags: ['Hospitality', 'RTL / i18n', 'Admin'],
    highlights: [
      'EN/AR customer app with full RTL layout, OTP auth, and live order tracking',
      'Admin dashboard: Recharts analytics, drag-and-drop orders, menu and inventory CRUD',
      'Supabase and Firebase integrations with validated form flows',
    ],
    impact:
      'Shipped a production-ready multilingual platform covering ordering, admin workflows, and real-time data with reusable components and animation.',
    url: '#',
    featured: true,
    proprietary: true,
    problem:
      'A restaurant technology product needed a customer-facing bilingual web app and a serious admin console for ordering, live status, inventory, and analytics, without compromising RTL or motion quality.',
    whatIBuilt:
      'Full-stack frontend delivery for the customer website and admin dashboard. The customer app includes phone + OTP auth (international phone input, reCAPTCHA), menu browsing, order flow, live status, order history with Lottie, plus marketing, partners, and scroll-based motion (Framer Motion, GSAP). The admin side covers KPI charts, drag-and-drop order status, CRUD for menus, inventory, and customers, and a shared internationalized layout. Backend integration through Supabase and Firebase, with React Hook Form and Yup/Zod validation.',
    keyFeatures: [
      'Bilingual (EN/AR) customer app with full RTL and responsive layout',
      'Phone + OTP authentication with international input and reCAPTCHA',
      'Menu, checkout, live status tracking, and order history',
      'Admin analytics with Recharts and drag-and-drop order management',
      'CRUD for menus, inventory, and customers',
      'Supabase and Firebase data/auth, React Hook Form + Yup/Zod',
    ],
    techStack: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Firebase',
      'Framer Motion',
      'GSAP',
      'Recharts',
    ],
    challenges: [
      {
        challenge: 'Ordering UX that stays clear in both English LTR and Arabic RTL.',
        solution:
          'Shared internationalized layout, direction-aware components, and the same polish on menu, checkout, and status screens in both locales.',
      },
      {
        challenge: 'An admin console dense enough for operations without becoming noisy.',
        solution:
          'KPI-first analytics, drag-and-drop status handling, and consistent CRUD patterns for menus, inventory, and customers.',
      },
    ],
  },
  {
    slug: 'erasmus-egypt',
    title: 'Erasmus+ Egypt Portal',
    tagline: 'Multilingual education portal for Egyptian students pursuing study abroad.',
    role: 'Senior Frontend Developer',
    tags: ['Education', 'RTL / i18n', 'High-traffic'],
    highlights: [
      'Frontend refactor and API migration from legacy endpoints',
      'Full RTL/LTR compatibility for a multilingual audience',
      'Performance work for 100K+ monthly visitors',
    ],
    impact:
      'Led the API migration, refactored for scale, and improved maintainability so the team could iterate faster on a high-traffic public portal.',
    url: 'https://erasmus.edu.eg/',
    featured: true,
    problem:
      'The Erasmus+ Egypt information and application portal needed a frontend that could leave legacy APIs behind, stay bilingual, and hold up under heavy public traffic.',
    whatIBuilt:
      'Comprehensive frontend refactoring and API migration for the multilingual portal. Rebuilt components for scalability, ensured RTL/LTR compatibility, and optimized performance for more than 100K monthly visitors so new features could ship without fighting the old structure.',
    keyFeatures: [
      'Migration from legacy API endpoints to a maintainable client layer',
      'Refactored component architecture for reuse and faster iteration',
      'Full RTL/LTR support across information and application flows',
      'Performance-minded rendering for a high-traffic education audience',
    ],
    techStack: ['Next.js', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
    challenges: [
      {
        challenge: 'Replacing legacy endpoints without stalling a live public site.',
        solution:
          'Incremental API migration, isolated data adapters, and refactored components that could adopt new contracts safely.',
      },
      {
        challenge: 'Scale and bilingual layout for 100K+ monthly visitors.',
        solution:
          'Leaner rendering paths, consistent RTL/LTR primitives, and a structure that made follow-on features cheaper to add.',
      },
    ],
  },
  {
    slug: 'tanklist',
    title: 'TankList',
    tagline: 'Global marketplace for listing, buying, selling, and franchising businesses.',
    role: 'Lead Front-End Developer',
    tags: ['Marketplace', 'SaaS', 'CMS'],
    highlights: [
      'Large-scale discovery with dynamic filtering across industries',
      'Strapi headless CMS for dynamic content and scalable listings',
      'Performance-focused UI for large catalogs',
    ],
    impact:
      'Architected a scalable marketplace with CMS-driven content, efficient business discovery, and maintainable listing patterns.',
    url: 'https://tanklist.com/',
    featured: true,
    problem:
      'Teams needed a single platform to list, discover, and transact on businesses worldwide, with clarity, trust, and speed at scale.',
    whatIBuilt:
      'Lead frontend for a large-scale web platform enabling users to list, buy, sell, and franchise businesses worldwide. Integrated Strapi as a headless CMS for dynamic content management and a scalable backend architecture, with discovery, listings, and core marketplace flows that stay fast as the catalog grows.',
    keyFeatures: [
      'Search and filter-heavy browsing tuned for real users',
      'CMS-driven content areas aligned with Strapi workflows',
      'Responsive layouts and consistent component patterns',
      'Listing architecture that stays maintainable at catalog scale',
    ],
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Strapi'],
    challenges: [
      {
        challenge: 'Complex data surfaces without overwhelming the UI.',
        solution: 'Progressive disclosure, strong typographic hierarchy, and reusable filter/list modules.',
      },
      {
        challenge: 'Keeping performance acceptable with rich pages and a growing catalog.',
        solution: 'Lean rendering paths, careful list patterns, and asset discipline.',
      },
    ],
  },
  {
    slug: 'voliop',
    title: 'Voliop',
    tagline:
      'Bilingual marketplace for auctions, stable rentals, veterinary care, and trainer bookings.',
    role: 'Frontend Developer',
    tags: ['Marketplace', 'RTL / i18n', 'Next.js'],
    highlights: [
      'Modular service-based architecture across equestrian verticals',
      'English / Arabic UX with proper RTL and LTR layout switching',
      'Auth, dynamic routing, and multiple API integrations',
    ],
    impact:
      'Engineered a multilingual EN/AR platform with RTL/LTR support and a seamless experience across complex marketplace features.',
    url: 'https://voliop.vercel.app/',
    featured: true,
    problem:
      'Equestrian buyers and sellers needed one place to trade horses, join auctions, rent stables, and book vets and trainers, without juggling fragmented sites.',
    whatIBuilt:
      'Frontend for a bilingual equestrian marketplace: auctions, stable rentals, veterinary care, and trainer bookings. Built with Next.js, TypeScript, and Tailwind, including dynamic routing, modular service-based architecture, authentication flows, and multiple API integrations.',
    keyFeatures: [
      'Responsive interface with performance-minded page structure',
      'Category and listing experiences with dynamic routing',
      'Login and registration wired into the product auth model',
      'Bilingual English and Arabic with correct RTL/LTR behavior',
      'Integrations with backend and external APIs',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    challenges: [
      {
        challenge:
          'Serving two reading directions and languages without duplicating layouts or breaking reuse.',
        solution:
          'Direction-aware layout primitives, shared components tested in both LTR and RTL, and consistent spacing and typography per locale.',
      },
      {
        challenge:
          'Many marketplace modules (auctions, rentals, services) on one brand without a noisy UI.',
        solution:
          'Repeated section patterns, clear hierarchy per page type, and predictable navigation between categories and detail views.',
      },
    ],
  },
  {
    slug: 'homie',
    title: 'Homie',
    tagline: 'Rental property platform for browsing, filtering, and managing listings across Egypt.',
    role: 'Frontend Developer',
    tags: ['Real estate', 'Marketplace', 'Maps'],
    highlights: [
      'Intuitive search and comprehensive listing features',
      'Advanced filtering with map integration',
      'Fast, responsive experience on mobile and desktop',
    ],
    impact:
      'Built a property discovery experience with advanced filtering, maps, and flows optimized for load time and navigation on every screen size.',
    url: 'https://homie-eg.com/',
    featured: true,
    problem:
      'Renters in Egypt needed a modern way to browse, filter, and evaluate properties without clunky search or slow listing pages.',
    whatIBuilt:
      'Frontend for Homie: a platform to browse, filter, and manage rental properties across Egypt. Focused on intuitive search, comprehensive listings, map integration, and seamless user flows that stay fast on mobile and desktop.',
    keyFeatures: [
      'Property discovery with advanced filtering',
      'Map-integrated browsing for location-first decisions',
      'Listing management and clear property detail flows',
      'Responsive layouts tuned for mobile and desktop performance',
    ],
    techStack: ['React.js', 'Next.js', 'Tailwind CSS', 'REST APIs'],
    challenges: [
      {
        challenge: 'Filter-heavy real estate search that still feels simple.',
        solution:
          'Progressive filter groups, scannable listing cards, and map context that supports rather than competes with the list.',
      },
      {
        challenge: 'Fast loads across listing-heavy pages on mobile networks.',
        solution:
          'Lean page structure, disciplined assets, and navigation that keeps people oriented while they scan.',
      },
    ],
  },
  {
    slug: 'c-trips',
    title: 'C-Trips',
    tagline: 'School trip management for planning, tracking, and student coordination.',
    role: 'Frontend Developer',
    tags: ['Education', 'SaaS', 'Dashboards'],
    highlights: [
      'Dashboards for trip organizers, student tracking, and updates',
      'Core UI workflows established during the design/development phase',
      'Scalable component structure for platform growth',
    ],
    impact:
      'Architected the responsive design and core UI workflows, then established a component structure the product could grow on.',
    url: 'https://www.c-trips.com/',
    featured: true,
    problem:
      'Schools and trip organizers needed one place to plan, manage, and track educational trips with real-time updates and student management.',
    whatIBuilt:
      'Frontend for C-Trips during the design and development phase: responsive design, core UI workflows, organizer dashboards, student tracking, and real-time communication patterns, with a component structure built for the platform to grow.',
    keyFeatures: [
      'Organizer dashboards for planning and managing trips',
      'Student tracking and trip status visibility',
      'Real-time communication and update surfaces',
      'Responsive UI system established early for later modules',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    challenges: [
      {
        challenge: 'Defining product workflows while the design was still moving.',
        solution:
          'Shipped core UI journeys first, then locked a scalable component structure so later features could land without a rewrite.',
      },
      {
        challenge: 'Dashboards that serve organizers and student-safety needs at once.',
        solution:
          'Clear information hierarchy for trip status, student lists, and communication, with layouts that stay usable on smaller screens.',
      },
    ],
  },
  {
    slug: 'helbing',
    title: 'Helbing World',
    tagline: 'Subscription-based Arabic creative platform for weekly blogs, podcasts, and writing.',
    role: 'Frontend Developer',
    tags: ['Media', 'Subscriptions', 'RTL'],
    highlights: [
      'Next.js + TypeScript frontend with subscription access control',
      'Authentication plus paywall for exclusive weekly releases',
      'Dynamic blog and media pages for articles, podcasts, and dialogues',
    ],
    url: 'https://helbing.vercel.app/',
    featured: false,
    problem:
      'Readers wanted a calm, Arabic-first space for weekly blogs, podcasts, and creative exercises, while the business needed accounts, subscriptions, and gated premium content.',
    whatIBuilt:
      'Full frontend for Helbing World: a polished, on-brand experience with RTL-native layouts, auth, paywalled content, and rich editorial pages.',
    keyFeatures: [
      'End-to-end UI in Next.js and Tailwind with RTL tuned for long-form Arabic reading',
      'Login, sign-up, and password reset flows',
      'Subscription and paywall patterns for exclusive weekly content',
      'Dynamic routing for articles, podcasts, and translated dialogues',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    challenges: [
      {
        challenge: 'Balancing a subscription paywall with a smooth reading experience.',
        solution:
          'Clear states for signed-out and subscribed users, with focused CTAs that do not interrupt content hierarchy.',
      },
    ],
  },
  {
    slug: 'angezz',
    title: 'Angezz',
    tagline: 'Educational platform for exam digitization and results in Saudi Arabia.',
    role: 'Frontend Developer',
    tags: ['EdTech', 'RTL'],
    highlights: [
      'RTL-first flows for administrators and students',
      'Structured journeys for digitized examinations and result corrections',
    ],
    url: 'https://angezz.vercel.app/ar',
    featured: false,
    problem:
      'Schools needed a digital path for examinations and result corrections aligned with local workflows.',
    whatIBuilt:
      'RTL-first educational flows and interfaces that support administrators and students around exams and results.',
    keyFeatures: ['Arabic-first UX', 'Structured exam and result flows'],
    techStack: ['Next.js', 'TypeScript'],
    challenges: [
      {
        challenge: 'RTL layout and content density.',
        solution: 'Consistent direction-aware components and tested reading order.',
      },
    ],
  },
  {
    slug: 'new-home-vision',
    title: 'New Home Vision',
    tagline: 'Real estate lead platform with ZIP search, filters, and API-driven discovery.',
    role: 'Frontend Developer',
    tags: ['Real estate', 'Lead gen', 'APIs'],
    highlights: [
      'ZIP-based property search with investor-relevant filters',
      'Third-party REST APIs and dynamic filtering',
    ],
    url: '#',
    featured: false,
    comingSoon: true,
    problem:
      'Real estate investors needed to discover high-potential properties by ZIP and custom criteria without slow manual research.',
    whatIBuilt:
      'A lead generation frontend that connects search, filtering, and listing views to third-party property APIs so users can evaluate opportunities in one workflow.',
    keyFeatures: [
      'Search organized around ZIP codes and investor-relevant filters',
      'Dynamic filtering aligned with third-party property data',
      'Type-safe Next.js and TypeScript codebase with clear API boundaries',
    ],
    techStack: ['Next.js', 'TypeScript', 'REST APIs'],
    challenges: [
      {
        challenge: 'API latency, partial data, and varying fields from external providers.',
        solution:
          'Defensive UI states, consistent empty and error handling, and filters that degrade gracefully when fields are missing.',
      },
    ],
  },
  {
    slug: 'aura-space',
    title: 'Aura Space',
    tagline: 'Workspace management system with clients, analytics, and financial visibility.',
    role: 'Lead Frontend Developer',
    tags: ['Dashboard', 'SaaS', 'Analytics'],
    highlights: [
      'Analytics, client tracking, and CRUD operations',
      'Recharts-driven visibility for operational data',
    ],
    url: 'https://github.com/mrwan14/aura-space-showcase/tree/main/images',
    featured: false,
    problem:
      'Teams needed one place to track clients, monitor performance, and reason about financial data without switching tools.',
    whatIBuilt:
      'Frontend for Aura Space: workspace management with client tracking, analytics dashboards, and CRUD operations, structured so new admin modules can land cleanly.',
    keyFeatures: [
      'Client and workspace-oriented navigation',
      'Recharts analytics with emphasis on scanability',
      'Extensible UI patterns for evolving admin workflows',
    ],
    techStack: ['React.js', 'TypeScript', 'Recharts'],
    challenges: [
      {
        challenge: 'Dense operational data without a cluttered interface.',
        solution: 'Grid systems, spacing rhythm, and progressive detail in panels and tables.',
      },
    ],
  },
  {
    slug: 'oman-moe',
    title: 'Oman Ministry of Education',
    tagline: 'Government site with tailored RTL layout and jsPlumb customization.',
    role: 'Frontend Developer',
    tags: ['Government', 'RTL'],
    highlights: [],
    url: 'https://moe-gov-om-master.vercel.app/',
    featured: false,
    problem:
      'Public-facing ministry content required correct RTL presentation and readable Arabic layouts.',
    whatIBuilt:
      'Frontend layout and styling aligned with RTL requirements, including jsPlumb customization for official content structures.',
    keyFeatures: ['RTL layout system', 'jsPlumb customization', 'Accessible public content structure'],
    techStack: ['React', 'CSS', 'jsPlumb'],
    challenges: [
      {
        challenge: 'Official content with strict layout expectations.',
        solution: 'Reusable RTL primitives, careful typography, and jsPlumb behavior tuned for Arabic reading order.',
      },
    ],
  },
  {
    slug: 'menawebsites',
    title: 'MenaWebsites',
    tagline: 'Agency landing page with a clear path from visit to inquiry.',
    role: 'Frontend Developer',
    tags: ['Marketing', 'Lead gen'],
    highlights: [],
    url: 'https://menawebsites.com/',
    featured: false,
    problem:
      'The agency needed a fast, credible single page that turned visitors into inquiries.',
    whatIBuilt:
      'A focused Next.js and Tailwind landing experience with clear CTAs and a simple inquiry path.',
    keyFeatures: ['Conversion-oriented sections', 'Email inquiry flow'],
    techStack: ['Next.js', 'Tailwind CSS'],
    challenges: [
      {
        challenge: 'Strong first impression with minimal copy.',
        solution: 'Tight visual hierarchy and above-the-fold clarity.',
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

const FEATURED_FIRST = ['homie', 'erasmus-egypt', 'c-trips'];

export const featuredProjects: Project[] = [
  ...FEATURED_FIRST.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is Project => Boolean(p)
  ),
  ...projects.filter((p) => p.featured && !FEATURED_FIRST.includes(p.slug)),
];

export const otherProjects: Project[] = projects.filter((p) => !p.featured);

export { projects };
