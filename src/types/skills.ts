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
    techStack: ['/REACT', '/NEXT.JS', '/TYPESCRIPT', '/TAILWIND', '/GSAP'],
    description: 'Building responsive and performant user interfaces with modern frameworks and libraries. Focus on creating seamless user experiences with smooth animations and interactions.'
  },
  {
    id: '02',
    name: 'BACKEND',
    title: '// backend Development',
    serialNumber: '00-2',
    techStack: ['/NODE.JS', '/EXPRESS', '/PYTHON', '/GO', '/REST API'],
    description: 'Designing and implementing scalable server-side architecture, RESTful APIs, and microservices. Ensuring high performance and reliability for web applications.'
  },
  {
    id: '03',
    name: 'UI/UX',
    title: '// creative design',
    serialNumber: '00-3',
    techStack: ['/FIGMA', '/ADOBE XD', '/PROTOTYPING', '/DESIGN SYSTEMS'],
    description: 'Creating intuitive and engaging user experiences through research, wireframing, prototyping, and visual design. Bridging the gap between user needs and business goals.'
  },
  {
    id: '04',
    name: 'DATABASE',
    title: '// database design',
    serialNumber: '00-4',
    techStack: ['/MONGODB', '/POSTGRESQL', '/REDIS', '/SCHEMA ARCHITECTURE'],
    description: 'Designing efficient database schemas, optimizing queries, and managing data storage solutions. Ensuring data integrity, security, and scalability.'
  },
  {
    id: '05',
    name: 'DEVOPS',
    title: '// tools & deployment',
    serialNumber: '00-5',
    techStack: ['/DOCKER', '/GIT', '/JENKINS', '/AWS', '/CI/CD'],
    description: 'Implementing continuous integration and deployment pipelines, containerization, and cloud infrastructure. Automating workflows for efficient development processes.'
  }
];