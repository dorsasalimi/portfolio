// app/layout.tsx - Add this script to your existing layout
import './globals.css'
import type { Metadata } from 'next'
import SmoothScroll from './components/FramerSmoothScroll'
import Header from './components/Header'
import SimpleScrollbar from './components/SimpleScrollbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Dorsa Salimi',
  description: 'Full-Stack Web-Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Header />
          <SimpleScrollbar /> {/* Add this - no extra styling needed */}
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}