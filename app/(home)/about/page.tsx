import React from 'react';
import AboutExodiaTop from '@/components/About_exodia_top';
import AboutExodiaBottom from '@/components/About_exodia_bottom';

const App: React.FC = () => {
  return (
    <>
      <div className="AboutExodia_about">
        <AboutExodiaTop />
        <br />
        <AboutExodiaBottom />
      </div>
    </>
  );
};

export default App; 