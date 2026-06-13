import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import SmoothScroll from './components/FramerSmoothScroll';
import Header from './components/Header';
import SimpleScrollbar from './components/SimpleScrollbar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dorsasalimi.ir'),

  title: {
    default: 'Dorsa Salimi | Full Stack Developer',
    template: '%s | Dorsa Salimi',
  },

  description:
    'Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern web applications.',

  keywords: [
    'Dorsa Salimi',
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Web Developer',
    'Portfolio',
    'Software Engineer',
  ],

  authors: [
    {
      name: 'Dorsa Salimi',
      url: 'https://dorsasalimi.ir',
    },
  ],

  creator: 'Dorsa Salimi',
  publisher: 'Dorsa Salimi',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: 'https://dorsasalimi.ir',
  },

  openGraph: {
    title: 'Dorsa Salimi | Full Stack Developer',
    description:
      'Portfolio showcasing React, Next.js, TypeScript, Node.js and modern web development projects.',
    url: 'https://dorsasalimi.ir',
    siteName: 'Dorsa Salimi Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dorsa Salimi Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dorsa Salimi | Full Stack Developer',
    description:
      'Portfolio showcasing React, Next.js, TypeScript, Node.js and modern web development projects.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    shortcut: ['/favicon.ico'],
  },

  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dorsa Salimi',
  jobTitle: 'Full Stack Developer',
  url: 'https://dorsasalimi.ir',
  image: 'https://dorsasalimi.ir/og-image.jpg',
  sameAs: [
    'https://github.com/YOUR_GITHUB',
    'https://linkedin.com/in/YOUR_LINKEDIN',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <SmoothScroll>
          <Header />
          <SimpleScrollbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}