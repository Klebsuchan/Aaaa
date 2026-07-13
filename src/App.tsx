/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const AboutUs = lazy(() => import('./components/AboutUs'));
const Partners = lazy(() => import('./components/Partners'));
const Features = lazy(() => import('./components/Features'));
const Steps = lazy(() => import('./components/Steps'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Security = lazy(() => import('./components/Security'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'));

export default function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white via-slate-100 to-[#0f1e33]/80 dark:bg-none dark:bg-secondary-dark pointer-events-none" />
      <div className="min-h-screen font-sans antialiased text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white scroll-smooth cursor-default overflow-x-hidden">
        <Navbar />
        <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-16 space-y-16 sm:space-y-24 lg:space-y-32 max-w-[1440px] mx-auto">
          <Hero />
          <Suspense fallback={<div className="h-24 flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
            <Partners />
            <AboutUs />
            <Features />
            <Steps />
            <WhyUs />
            <Testimonials />
            <Security />
            <FAQ />
            <CTA />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <CookieConsent />
          <FloatingWhatsApp />
        </Suspense>
      </div>
    </>
  );
}
