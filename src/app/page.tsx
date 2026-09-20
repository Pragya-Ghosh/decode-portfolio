'use client'; 

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section/Section'; 
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal/index';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import LatestBlogs from '@/components/Blog/LatestBlogs';
import Footer from '@/components/Footer';

export default function DeveloperPortfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0, 
        rootMargin: "-100px 0px -50% 0px" 
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg font-sans text-text-main">
      <Navbar activeSection={activeSection} />
      
      <Section id="home">
        <Hero />
      </Section>
      
      <Section id="about">
        <Terminal />
      </Section>
      
      <Section id="projects">
        <ProjectsSection />
      </Section>
    
      <Section id="blogs">
        <LatestBlogs />
      </Section>
      
      <Footer />
    </div>
  );
}