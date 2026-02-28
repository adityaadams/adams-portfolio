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
import signieImg from '../assets/work1.webp';
import notRiskImg from '../assets/works2.webp';
import evincoImg from '../assets/works3.webp';
import circuitImg from '../assets/works4.webp';

export const worksData: WorkItem[] = [
  {
    id: '01',
    date: 'March 2025',
    title: 'Signie',
    description: 'Gamified Sign Language Learning',
    category: 'Web App • Full Stack Development',
    situation: 'Breaking communication barriers for deaf communities with limited access to sign language education.',
    task: 'Develop a real-time, on-device gesture recognition web app that makes learning sign language engaging and accessible.',
    action: 'Built with React Native and Expo for cross-platform compatibility. Integrated MediaPipe Hands for real-time hand tracking and trained a custom CNN on ASL datasets. Implemented gamification mechanics and Firebase for auth & progress sync.',
    result: '94% gesture recognition accuracy with 50k+ active learners in first month',
    resultHighlight: '94%',
    tags: ['React Native', 'Expo', 'MediaPipe', 'Firebase', 'CNN'],
    thumbnail: signieImg,
    link: '#'
  },
  {
    id: '02',
    date: 'February 2025',
    title: '(not)-RISK',
    description: 'Receipts, Insurance & Services Keeper',
    category: 'SaaS • Full Stack Development',
    situation: 'People lose important receipts and miss warranty claims, costing millions in unclaimed value annually.',
    task: 'Create a digital vault that automatically organizes receipts and tracks insurance policies with smart reminders.',
    action: 'Built responsive frontend with React + TailwindCSS. Developed Node.js/Express REST API with MongoDB for scalable storage. Implemented JWT authentication and scheduled cron jobs for automated warranty expiration reminders.',
    result: '10k+ receipts processed monthly with 95% user retention',
    resultHighlight: '10k+',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    thumbnail: notRiskImg,
    link: '#'
  },
  {
    id: '03',
    date: 'January 2025',
    title: 'Evinco',
    description: 'Event • Interact • Connect',
    category: 'Web Design • Full Stack Development',
    situation: 'Event organizers struggle to create engaging hybrid experiences that foster genuine connections.',
    task: 'Design and build a platform where events come alive with seamless interaction and networking.',
    action: 'Architected React frontend with CSS Grid/Flexbox for responsive layouts. Built Node.js backend with Socket.io for real-time messaging and live Q&A. Implemented JWT refresh token rotation for secure authentication across devices.',
    result: '50k+ events hosted across 12 countries with 4.8/5 user rating',
    resultHighlight: '50k+',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
    thumbnail: evincoImg,
    link: '#'
  },
  {
    id: '04',
    date: 'December 2024',
    title: 'Circuit Creations',
    description: 'Interactive Digital Logic Design',
    category: 'Educational Tool • Frontend Development',
    situation: 'Computer science students struggle with abstract logic gate concepts without hands-on experimentation.',
    task: 'Build an interactive tool where students can visually design and simulate digital circuits in real-time.',
    action: 'Developed component-driven UI with React and TailwindCSS. Created custom JavaScript evaluation engine for logic simulation. Utilized Canvas API for rendering circuit visualization with drag-and-drop functionality.',
    result: 'Adopted by 200+ universities worldwide with 92% improved student comprehension',
    resultHighlight: '200+',
    tags: ['React', 'TailwindCSS', 'Canvas API', 'JavaScript'],
    thumbnail: circuitImg,
    link: '#'
  }
];