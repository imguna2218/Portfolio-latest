import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Internship from '@/components/Internship';
import Achievements from '@/components/Achievements';
import ResumeDownload from '@/components/ResumeDownload';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {showLoader && <Loader />}
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Internship />
        <Achievements />
        <ResumeDownload />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
