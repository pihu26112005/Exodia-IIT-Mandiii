"use client";

import React from 'react';
import AboutExodiaTop from '@/components/About_exodia_top';
import AboutExodiaBottom from '@/components/About_exodia_bottom';
import About_aboutSection from '@/components/About_aboutSection';
import Navbar from '@/components/Navbar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/lib/utils';
import Footer from '@/components/Footer';
import About_VideoSection from '@/components/About_VideoSection';
import About_JoinSection from '@/components/About_JoinSection';

const App: React.FC = () => {
  return (
    <>
      {/* <div className="AboutExodia_about">
        <AboutExodiaTop />
        <br />
        <AboutExodiaBottom />
      </div> */}

      <div className='m-0 p-0 overflow-x-hidden'>
        <Navbar />
        <FloatingNav  namex="P" className="max-md:hidden" />

        <About_aboutSection />

        <About_VideoSection />

        <About_JoinSection />

        <Footer />
      </div>
    </>
  );
};

export default App; 