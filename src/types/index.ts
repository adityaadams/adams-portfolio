export interface NavItem {
  label: string;
  href: string;
  desktopLabel: string;
}

export interface HeroProps {
  firstName: string;
  lastName: string;
  role: string;
  description: string;
  location: string;
  imageUrl?: string;
}
