import React from 'react';
import Sponsors from '../../../components/Sponsors'; 



const Page: React.FC = () => {
  const pageStyle = {
    minHeight: '100vh', // Ensure the div takes up the full height of the viewport
    padding: '20px', 
    backgroundImage: 'url(https://images.pexels.com/photos/7978055/pexels-photo-7978055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',  
    backgroundSize: 'cover',     
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' 
  };
  return (
    <div  style={pageStyle} >
      <Sponsors />
    </div>
  );
};

export default Page;