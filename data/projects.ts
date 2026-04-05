export type ChallengeSolution = {
  challenge: string;
  solution: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  highlights: string[];
  url: string;
  featured: boolean;
  /** Set when live URL is not ready yet */
  comingSoon?: boolean;
  problem: string;
  whatIBuilt: string;
  keyFeatures: string[];
  techStack: string[];
  challenges: ChallengeSolution[];
};

const projects: Project[] = [
  {
    slug: 'tanklist',
    title: 'TankList',
    tagline: 'Global marketplace for buying, selling, and franchising businesses.',
    tags: ['Marketplace', 'SaaS', 'High-traffic UI'],
    highlights: [
      'Advanced filtering and discovery across industries',
      'CMS-driven content and scalable listing architecture',
      'Performance-focused UI for large catalogs',
    ],
    url: 'https://tanklist.com/',
    featured: true,
    problem:
      'Teams needed a single platform to list, discover, and transact on businesses worldwide—with clarity, trust, and speed at scale.',
    whatIBuilt:
      'Frontend experiences for discovery, listings, and core marketplace flows, emphasizing fast navigation, clear hierarchy, and maintainable patterns as the product grew.',
    keyFeatures: [
      'Search and filter-heavy browsing tuned for real users',
      'Structured content areas aligned with CMS workflows',
      'Responsive layouts and consistent component patterns',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    challenges: [
      {
        challenge: 'Complex data surfaces without overwhelming the UI.',
        solution: 'Progressive disclosure, strong typographic hierarchy, and reusable filter/list modules.',
      },
      {
        challenge: 'Keeping performance acceptable with rich pages.',
        solution: 'Lean rendering paths, careful list virtualization patterns where needed, and asset discipline.',
      },
    ],
  },
  {
    slug: 'voliop',
    title: 'Voliop',
    tagline:
      'Bilingual horse marketplace for buying, selling, auctions, stables, vets, and trainers.',
    tags: ['Marketplace', 'RTL / i18n', 'Next.js'],
    highlights: [
      'Listings and category flows for horses, stables, accessories, trainers, and veterinary services',
      'English / Arabic UX with proper RTL and LTR layout switching',
      'Auth, dynamic routing, and third-party API integrations to backend services',
    ],
    url: 'https://voliop.vercel.app/',
    featured: true,
    problem:
      'Equestrian buyers and sellers needed one place to trade horses, join auctions, rent stables, and book vets and trainers—without juggling fragmented sites or unclear trust signals.',
    whatIBuilt:
      'Frontend for Voliop (voliop.vercel.app) under Why Not Tech—freelance / project-based: a fast, responsive Next.js and Tailwind UI spanning marketing pages, listings, categories, and core marketplace journeys.',
    keyFeatures: [
      'Responsive interface across breakpoints with performance-minded page structure',
      'Category and listing experiences with dynamic routing across marketplace verticals',
      'Login and registration flows wired into the product’s auth model',
      'Bilingual support (English and Arabic) with correct RTL/LTR behavior',
      'Integrations with backend and external APIs for live data and services',
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
    challenges: [
      {
        challenge:
          'Serving two reading directions and languages without duplicating layouts or breaking component reuse.',
        solution:
          'Direction-aware layout primitives, shared components tested in both LTR and RTL, and consistent spacing and typography rules per locale.',
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
    slug: 'helbing',
    title: 'Helbing World',
    tagline:
      'Arabic creative platform for weekly blogs, podcasts, dialogues, and writing exercises.',
    tags: ['Media', 'Subscriptions', 'RTL'],
    highlights: [
      'Next.js + Tailwind frontend with full RTL support for Arabic content',
      'Authentication plus subscription paywall for exclusive weekly releases',
      'Dynamic blog and media pages for articles, podcasts, and translated dialogues',
    ],
    url: 'https://helbing.vercel.app/',
    featured: true,
    problem:
      'Readers wanted a calm, Arabic-first space for weekly blogs, podcasts, and creative exercises—while the business needed accounts, subscriptions, and gated premium content.',
    whatIBuilt:
      'Full frontend for Helbing World (freelance / project-based): a polished, on-brand experience with RTL-native layouts, auth, paywalled content, and rich editorial pages.',
    keyFeatures: [
      'End-to-end UI in Next.js and Tailwind with RTL tuned for long-form Arabic reading',
      'Login, sign-up, and password reset flows',
      'Subscription and paywall patterns that gate exclusive weekly content behind accounts',
      'Dynamic routing for articles, podcast episodes, translated dialogues, and related content templates',
      'Responsive layout consistent with brand identity across devices',
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    challenges: [
      {
        challenge: 'Balancing a subscription paywall with a smooth reading and discovery experience.',
        solution:
          'Clear states for signed-out, subscribed, and trial users; focused CTAs without interrupting content hierarchy.',
      },
      {
        challenge: 'Multiple content formats (blog, podcast, dialogue) under one navigation model.',
        solution:
          'Shared article shells with format-specific modules and predictable URLs for sharing and return visits.',
      },
    ],
  },
  {
    slug: 'new-home-vision',
    title: 'New Home Vision',
    tagline:
      'Real estate lead platform: ZIP search, filters, and API-driven property discovery.',
    tags: ['Real estate', 'Lead gen', 'APIs'],
    highlights: [
      'ZIP-based property search with filters matched to investor criteria',
      'Third-party REST APIs for property data and dynamic filtering',
      'Streamlined discovery flow that cuts manual research time',
    ],
    url: '#',
    featured: true,
    comingSoon: true,
    problem:
      'Real estate investors needed to discover high-potential properties by ZIP and custom criteria without slow manual research across disconnected sources.',
    whatIBuilt:
      'A lead generation frontend that connects search, filtering, and listing views to third-party property APIs so users can evaluate opportunities in one workflow.',
    keyFeatures: [
      'Search and discovery flows organized around ZIP codes and investor-relevant filters',
      'Dynamic filtering systems aligned with backend and third-party property data',
      'UI focused on scanability and decision support for high-volume browsing',
      'Type-safe Next.js and TypeScript codebase with clear data boundaries for API responses',
    ],
    techStack: ['Next.js', 'TypeScript', 'REST APIs'],
    challenges: [
      {
        challenge: 'API latency, partial data, and varying field availability from external providers.',
        solution:
          'Defensive UI states, consistent empty and error handling, and filters that degrade gracefully when fields are missing.',
      },
      {
        challenge: 'Translating complex investor rules into usable filter controls.',
        solution:
          'Progressive filter groups, sensible defaults, and feedback when no results match the current criteria.',
      },
    ],
  },
  {
    slug: 'aura-space',
    title: 'Aura Space',
    tagline: 'Workspace management: clients, analytics, and financial visibility.',
    tags: ['Dashboard', 'SaaS', 'Internal tools'],
    highlights: [
      'Unified views for clients and operational data',
      'Analytics-oriented layouts and clear data hierarchy',
      'Maintainable structure for evolving admin workflows',
    ],
    url: 'https://github.com/mrwan14/aura-space-showcase/tree/main/images',
    featured: true,
    problem:
      'Teams needed one place to track clients, monitor performance, and reason about financial data without switching tools.',
    whatIBuilt:
      'Dashboard-style interfaces and flows that prioritize scanability, consistent patterns, and room for future modules.',
    keyFeatures: [
      'Client and workspace-oriented navigation',
      'Analytics summaries with emphasis on clarity',
      'Extensible UI patterns for new data slices',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    challenges: [
      {
        challenge: 'Dense data without a cluttered interface.',
        solution: 'Grid systems, spacing rhythm, and progressive detail in panels and tables.',
      },
    ],
  },
  {
    slug: 'angezz',
    title: 'Angezz',
    tagline: 'Exam digitization and results for schools in Saudi Arabia.',
    tags: ['EdTech', 'RTL'],
    highlights: [],
    url: 'https://angezz.vercel.app/ar',
    featured: false,
    problem:
      'Schools needed a digital path for examinations and result corrections aligned with local workflows.',
    whatIBuilt:
      'RTL-first educational flows and interfaces that support administrators and students.',
    keyFeatures: ['Arabic-first UX', 'Structured exam and result flows'],
    techStack: ['React', 'Next.js'],
    challenges: [
      {
        challenge: 'RTL layout and content density.',
        solution: 'Consistent direction-aware components and tested reading order.',
      },
    ],
  },
  {
    slug: 'oman-moe',
    title: 'Oman Ministry of Education',
    tagline: 'Government site with tailored RTL and horizontal Arabic layout.',
    tags: ['Government', 'RTL'],
    highlights: [],
    url: 'https://moe-gov-om-master.vercel.app/',
    featured: false,
    problem:
      'Public-facing ministry content required correct RTL presentation and readable Arabic layouts.',
    whatIBuilt:
      'Frontend layout and styling aligned with RTL and horizontal rendering requirements.',
    keyFeatures: ['RTL layout system', 'Accessible public content structure'],
    techStack: ['React', 'CSS'],
    challenges: [
      {
        challenge: 'Official content with strict layout expectations.',
        solution: 'Reusable RTL primitives and careful typography choices.',
      },
    ],
  },
  {
    slug: 'menawebsites',
    title: 'MenaWebsites',
    tagline: 'Agency one-pager with email-based lead capture.',
    tags: ['Marketing', 'Lead gen'],
    highlights: [],
    url: 'https://menawebsites.com/',
    featured: false,
    problem:
      'The agency needed a fast, credible single page that turned visitors into inquiries.',
    whatIBuilt:
      'A focused landing experience with clear CTAs and a simple inquiry path.',
    keyFeatures: ['Conversion-oriented sections', 'Email inquiry flow'],
    techStack: ['Next.js', 'Tailwind CSS'],
    challenges: [
      {
        challenge: 'Strong first impression with minimal copy.',
        solution: 'Tight visual hierarchy and above-the-fold clarity.',
      },
    ],
  },
  {
    slug: 'korek-app',
    title: 'Korek App',
    tagline: 'Vehicle registration, maintenance history, and appointments.',
    tags: ['Product', 'Utilities'],
    highlights: [],
    url: '#',
    featured: false,
    comingSoon: true,
    problem:
      'Car owners needed a simple system to register vehicles and track maintenance.',
    whatIBuilt:
      'Core UI flows for registration, records, and scheduling (demo link TBD).',
    keyFeatures: ['Vehicle profiles', 'Maintenance timeline', 'Appointment scheduling'],
    techStack: ['React'],
    challenges: [
      {
        challenge: 'Multi-step flows staying approachable.',
        solution: 'Step clarity and persistent state cues in the UI.',
      },
    ],
  },
  {
    slug: 'eyewear-ecommerce',
    title: 'EyeWear E-Commerce',
    tagline: 'Catalog, cart, and checkout for eyewear.',
    tags: ['E-commerce'],
    highlights: [],
    url: 'https://e-commerce-mrwan14.vercel.app/',
    featured: false,
    problem:
      'Shoppers needed a straightforward catalog-to-checkout path for eyewear.',
    whatIBuilt:
      'Storefront UI with product browsing, cart, and checkout experience.',
    keyFeatures: ['Product catalog', 'Cart', 'Checkout flow'],
    techStack: ['React'],
    challenges: [
      {
        challenge: 'Merchandising clarity on small screens.',
        solution: 'Responsive product grids and legible product detail.',
      },
    ],
  },
  {
    slug: 'full-ecommerce',
    title: 'Full E-Commerce Store',
    tagline: 'Auth, catalog, and payments in one shop.',
    tags: ['E-commerce'],
    highlights: [],
    url: 'https://full-ecommerce-website-marwan.vercel.app/',
    featured: false,
    problem:
      'A complete retail flow from account to payment was required for the demo product.',
    whatIBuilt:
      'End-to-end shopping UX including authentication and payment integration surfaces.',
    keyFeatures: ['User auth', 'Product management UI', 'Payment integration'],
    techStack: ['React', 'Node ecosystem'],
    challenges: [
      {
        challenge: 'Multiple subsystems in one cohesive UI.',
        solution: 'Shared layout shell and consistent form patterns.',
      },
    ],
  },
  {
    slug: 'cdia',
    title: 'Cdia',
    tagline: 'Software house marketing site and portfolio.',
    tags: ['Agency', 'Marketing'],
    highlights: [],
    url: 'https://cdia-web.vercel.app/',
    featured: false,
    problem:
      'Cdia needed a professional site that communicates services and credibility.',
    whatIBuilt:
      'Agency portfolio and services presentation with modern layout.',
    keyFeatures: ['Services sections', 'Portfolio presentation'],
    techStack: ['Next.js', 'Tailwind CSS'],
    challenges: [
      {
        challenge: 'Balancing portfolio density with scanability.',
        solution: 'Modular sections and consistent card rhythm.',
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

export const featuredProjects: Project[] = projects.filter((p) => p.featured);

export const otherProjects: Project[] = projects.filter((p) => !p.featured);

export { projects };
