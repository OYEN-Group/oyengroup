import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import SignatureLoader from '@/components/SignatureLoader';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta-sans' });

export const metadata: Metadata = {
 title: 'OYEN GROUP — People. Ideas. Solutions. Impact.',
 description: 'OYEN GROUP is a diversified business group focused on building and scaling innovative solutions across key sectors.',
 keywords: 'Oyen Group, diversified business, energy, tech, agro',
 authors: [{ name: 'OYEN GROUP' }],
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <html lang="en">
 <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased flex flex-col min-h-screen bg-brand-offwhite text-brand-primary`}>
 <CustomCursor />
 <SignatureLoader />
 <Header />
 <main className="grow">{children}</main>
 <Footer />

 </body>
 </html>
 );
}
