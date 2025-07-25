import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when navigating from another page
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          // Use Lenis for smooth scrolling
          window.lenis?.scrollTo(element, { duration: 1.2 });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default HomePage;