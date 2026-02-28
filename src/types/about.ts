export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: '01',
    position: 'Senior Full-Stack Architect',
    company: 'Northline Digital',
    period: "'23 - Today",
    description: 'Directed full-stack development projects, guiding teams from concept to execution. Helped shape technical architectures and digital campaigns for diverse clients.',
    tags: ['React', 'Node.js', 'TypeScript', 'AWS']
  },
  {
    id: '02',
    position: 'Lead Frontend Developer',
    company: 'Studio DAI',
    period: "'21 - '23",
    description: 'Led frontend development for multiple high-traffic web applications. Established component libraries and design systems that improved development efficiency by 40%.',
    tags: ['Next.js', 'GSAP', 'TailwindCSS', 'Figma']
  },
  {
    id: '03',
    position: 'Full-Stack Developer',
    company: 'Startup Accelerator',
    period: "'19 - '21",
    description: 'Developed and launched 5 SaaS products from scratch. Implemented real-time features and optimized database queries for scalable performance.',
    tags: ['MERN Stack', 'Socket.io', 'MongoDB', 'Express']
  }
];