export interface SkillItem {
  id: string;
  name: string;
  title: string;
  serialNumber: string;
  techStack: string[];
  description: string;
}

export const skillsData: SkillItem[] = [
  {
    id: '01',
    name: 'FRONTEND',
    title: '// frontend Development',
    serialNumber: '00-1',
    techStack: ['/React', '/Next.js', '/TypeScript', '/Tailwind CSS', '/GSAP'],
    description: 'Building responsive and performant user interfaces with modern frameworks and libraries. Focus on creating seamless user experiences with smooth animations and interactions.'
  },
  {
    id: '02',
    name: 'BACKEND',
    title: '// backend Development',
    serialNumber: '00-2',
    techStack: ['/Node.js', '/Express', '/PostgreSQL', '/Prisma', '/REST APIs'],
    description: 'Designing and implementing scalable server-side architecture, RESTful APIs, and microservices. Ensuring high performance and reliability for web applications.'
  },
  {
    id: '03',
    name: 'DATABASE',
    title: '// database design',
    serialNumber: '00-3',
    techStack: ['/PostgreSQL', '/Prisma', '/Schema Design', '/Query Optimization'],
    description: 'Designing efficient database schemas, optimizing queries, and managing data storage solutions. Ensuring data integrity, security, and scalability.'
  },
  {
    id: '04',
    name: 'DEVOPS',
    title: '// tools & deployment',
    serialNumber: '00-4',
    techStack: ['/DOCKER', '/GIT', '/GITHUB', '/VERCEL', '/POSTMAN'],
    description: 'Implementing continuous integration and deployment pipelines, containerization, and cloud infrastructure. Automating workflows for efficient development processes.'
  }
];