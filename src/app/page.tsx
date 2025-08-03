"use client";

import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Header from '../components/Hospital/Header';
import Hero from '../components/Hospital/Hero';
import About from '../components/Hospital/About';
import Departments from '../components/Hospital/Departments';
import Doctors from '../components/Hospital/Doctors';
import Facilities from '../components/Hospital/Facilities';
import Contact from '../components/Hospital/Contact';
import News from '../components/Hospital/News';
import Footer from '../components/Hospital/Footer';

export default function HomePage() {
  // Section refs for smooth scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const departmentsRef = useRef<HTMLDivElement>(null);
  const doctorsRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState('Home');
  const navLinks = [
    { label: 'Home', active: active === 'Home' },
    { label: 'About Us', active: active === 'About Us' },
    { label: 'Departments', active: active === 'Departments' },
    { label: 'Doctors', active: active === 'Doctors' },
    { label: 'Facilities', active: active === 'Facilities' },
    { label: 'Contact', active: active === 'Contact' },
  ];

  const handleNavClick = (label: string) => {
    setActive(label);
    const sectionMap: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      'Home': heroRef,
      'About Us': aboutRef,
      'Departments': departmentsRef,
      'Doctors': doctorsRef,
      'Facilities': facilitiesRef,
      'Contact': contactRef,
      'News': newsRef,
      'Footer': footerRef,
    };
    const ref = sectionMap[label];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh',  }}>
      <Header navLinks={navLinks} onNavClick={handleNavClick} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Departments ref={departmentsRef} />
      <Doctors ref={doctorsRef} />
      <Facilities ref={facilitiesRef} />
      <Contact ref={contactRef} />
      <News ref={newsRef} />
      <Footer ref={footerRef} />
    </Box>
  );
}