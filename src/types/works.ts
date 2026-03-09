export interface WorkItem {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  resultHighlight: string;
  tags: string[];
  thumbnail: string;
  link?: string;
}

// Import semua gambar lokal
import signieImg from '../assets/pj1.webp';
import notRiskImg from '../assets/pj2.webp';
import evincoImg from '../assets/pj3.webp';
import circuitImg from '../assets/pj4.webp';

export const worksData: WorkItem[] = [
  {
    id: '01',
    date: 'February 2026',
    title: 'The Digital Canvas',
    description: 'Architecting a High-Performance Editorial Identity Website',
    category: 'Frontend • Web Development',
    situation: "Traditional portfolios often fail to demonstrate a developer's mastery over complex layouts and high-end performance standards.",
    task: 'Engineer a typography-driven, high-performance SPA that merges minimalist editorial aesthetics with flawless technical execution.',
    action: 'Developed a custom React architecture with Tailwind CSS. Orchestrated fluid micro-interactions using GSAP and optimized asset delivery via lazy-loading to minimize Time to Interactive (TTI).',
    result: 'Successfully launched a personal site that is 90%+ mobile-friendly, providing a smooth and professional experience for everyone.',
    resultHighlight: '90%+',
    tags: ['React.js', 'Tailwind CSS', 'GSAP', 'Vercel'],
    thumbnail: signieImg,
    link: '#'
  },
  {
    id: '02',
    date: 'February 2026',
    title: 'FlowState OS',
    description: 'A Simple & Secure To-Do App',
    category: 'Full Stack • Productivity Tool',
    situation: 'Most basic to-do lists lose your data when you refresh the page or change devices.',
    task: 'Build a task manager that saves your work safely in a structured database and requires a secure login.',
    action: 'I built the app using Node.js and Express. I used PostgreSQL to store tasks in organized tables and added a login system so only you can see your data. I also made sure the UI updates instantly.',
    result: 'Created a reliable app with 95% data accuracy, helping users stay organized without losing their progress.',
    resultHighlight: '95%',
    tags: ['PostgreSQL', 'Express.js', 'React', 'Node.js'],
    thumbnail: notRiskImg,
    link: '#'
  },
  {
    id: '03',
    date: 'March 2026',
    title: 'ZeroBug Community',
    description: 'A Friendly Forum for Helping Developers',
    category: 'Full Stack • Community Site',
    situation: 'New developers often get stuck on errors and need a clear place to ask for help and find answers.',
    task: 'Create a forum where people can post questions, leave comments, and vote for the best solutions.',
    action: 'I used Next.js to make the website fast and easy for Google to find. I connected it to a PostgreSQL database via Prisma ORM to manage all the posts and user comments safely.',
    result: 'Built a community space with a 90% positive user satisfaction feel, making it easier for beginners to solve their coding bugs.',
    resultHighlight: '90%',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    thumbnail: evincoImg,
    link: '#'
  },
  {
    id: '04',
    date: 'March 2026',
    title: 'CineLens Engine',
    description: 'A Movie Search & Discovery App.',
    category: 'Frontend • Data Fetching',
    situation: 'It’s often hard to find movie details quickly because there is so much information to load at once.',
    task: 'Build a search engine that finds any movie in seconds and shows the details in a beautiful way.',
    action: 'I connected the app to a real movie database (TMDB API). I added a "loading skeleton" so the app feels smooth while fetching data and used Framer Motion for nice transitions between pages.',
    result: 'Developed a high-speed search tool with 98% UI responsiveness, allowing users to explore 500k+ movies without any lag',
    resultHighlight: '98%',
    tags: ['React', 'Axios', 'TMDB API', 'Framer Motion'],
    thumbnail: circuitImg,
    link: '#'
  }
];