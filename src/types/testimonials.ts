export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  avatar: string;
}

import avatar1 from '../assets/oliivvia.webp';
import avatar2 from '../assets/chen2.webp';
import avatar3 from '../assets/shopiee.webp';

export const testimonialsData: TestimonialItem[] = [
  {
    id: '01',
    quote: "Adam understood the direction instantly. The final result felt refined, balanced, and aligned with exactly how we wanted to present ourselves.",
    clientName: "OLIVIA BENNETT",
    clientRole: "DIRECTOR",
    clientCompany: "AESTHA STUDIO",
    avatar: avatar1
  },
  {
    id: '02',
    quote: "Working with adam was a game-changer for our platform. His technical expertise and attention to detail transformed our vision into a seamless digital experience.",
    clientName: "MARCUS CHEN",
    clientRole: "FOUNDER",
    clientCompany: "TECHVISION",
    avatar: avatar2
  },
  {
    id: '03',
    quote: "The level of professionalism and creativity brought to our project was outstanding. Every interaction was smooth and the final product exceeded our expectations.",
    clientName: "SOPHIA RODRIGUEZ",
    clientRole: "HEAD OF PRODUCT",
    clientCompany: "NEXUS LABS",
    avatar: avatar3
  }
];