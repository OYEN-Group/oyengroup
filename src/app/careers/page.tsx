import CareersClient from '@/components/careers/CareersClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | OYEN GROUP',
  description: 'Explore opportunities to build, research, and innovate with OYEN GROUP.',
};

export default function CareersPage() {
  return <CareersClient />;
}
