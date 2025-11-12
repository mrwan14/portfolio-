'use client';

import AboutCard from '@/components/sections/AboutCard';
import ContactCard from '@/components/sections/ContactCard';
import ProjectCard from '@/components/sections/ProjectCard';
import Footer from '@/components/sections/Footer';

const projects = [
  {
    title: 'TankList',
    description: 'Global marketplace platform enabling users to list, buy, sell, and franchise businesses across multiple industries worldwide.',
    url: 'https://tanklist.com/',
  },
  {
    title: 'Aura Space',
    description: 'Comprehensive workspace management system for tracking clients, monitoring analytics, and managing financial data.',
    url: 'https://github.com/mrwan14/aura-space-showcase/tree/main/images',
  },
  {
    title: 'Angezz',
    description: 'Educational management system for schools in Saudi Arabia to digitize examination processes and result corrections.',
    url: 'https://angezz.vercel.app/ar',
  },
  {
    title: 'Oman Ministry of Education',
    description: 'Official government website with customized RTL layout and horizontal rendering for Arabic interfaces.',
    url: 'https://moe-gov-om-master.vercel.app/',
  },
  {
    title: 'MenaWebsites',
    description: 'Modern one-page website for a digital agency with email-based client inquiry system for lead generation.',
    url: 'https://menawebsites.com/',
  },
  {
    title: 'Korek App',
    description: 'Vehicle management system for car owners to register vehicles, manage maintenance records, and schedule appointments.',
    url: '#',
  },
  {
    title: 'Trending Movies App',
    description: 'Movie discovery platform with real-time trending content and comprehensive movie database.',
    url: 'https://trending-movies-rho.vercel.app/#/home',
  },
  {
    title: 'EyeWear E-Commerce Store',
    description: 'Online eyeglasses shopping platform with product catalog, cart functionality, and seamless checkout experience.',
    url: 'https://e-commerce-mrwan14.vercel.app/',
  },
  {
    title: 'Full E-Commerce Store',
    description: 'Complete shopping platform with product management, user authentication, and payment integration.',
    url: 'https://full-ecommerce-website-marwan.vercel.app/',
  },
  {
    title: 'Cdia - Software House Website',
    description: 'Professional agency portfolio website showcasing services and portfolio with modern design.',
    url: 'https://cdia-web.vercel.app/',
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Row: About + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <AboutCard />
          </div>
          <div className="md:col-span-2">
            <ContactCard />
          </div>
        </div>
        
        {/* Bottom Row: Projects Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
