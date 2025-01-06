import React from 'react';
import Sidebar from './Sidebar';
import Scrollbar from './Scrollbar';

const page: React.FC = () => {
  const handleTeamClick = (teamId: string) => {
    const teamBox = document.getElementById(teamId);
    if (teamBox) {
      window.scrollTo({
        top: teamBox.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container flex">
      <Sidebar onTeamClick={handleTeamClick} />
      <Scrollbar />
    </div>
  );
};

export default page;


