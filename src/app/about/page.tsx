import { Metadata } from 'next';
import AboutClient from '@/components/about/AboutClient';

export const metadata: Metadata = {
  title: 'About Us | OYEN GROUP',
  description: 'Learn about OYEN GROUP, our vision, mission, and philosophy.',
};

export default function AboutPage() {
  return <AboutClient />;
}
