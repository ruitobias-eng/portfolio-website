import React from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Team />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}