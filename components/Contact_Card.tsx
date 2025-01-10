// import React from 'react'
// import './card.css'

// interface CardProps {
//      src: string; 
//      title: string; 
//      desc: string; 
//      contact: string; 
// }

// const Contact_Card: React.FC<CardProps> = (props) => {
//   return (
//     <div className="Contact_card">
//         <h4 className="Contact_title"> {props.title} </h4> <br />
//         <img className="Contact_src" src={props.src} alt=""  />
//         <p className="Contact_desc">  {props.desc} </p>
//         <p className="Contact_contact"> 
//             <span> <img src="/icons/socialmedia2/call.png" alt="" /> </span>
//             <span> +91-9378882318 </span>
//          </p>

//          <div className="Contact_icons">
//             <a href="" target='_blank' className='Contact_email'> <button className="Contact_email"> <img src="/icons/socialmedia2/email.png" alt="" /> </button> </a>
//             <a href="" target='_blank' className="Contact_insta">  <button className="Contact_insta"> <img src="/icons/socialmedia2/instagram.png" alt=""/> </button> </a>
//             <a href="" target='_blank' className="Contact_linkedin"> <button className="Contact_linkedin">  <img src="/icons/socialmedia2/linkedin.png" alt="" /> </button> </a>
//             <a href="" target='_blank' className="Contact_whatsapp">   <button className="Contact_whatsapp">  <img src="/icons/socialmedia2/whatsapp.png" alt=""  /> </button> </a>
//          </div>
//     </div>
//   )
// }

// export default Contact_Card


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  src: string;
  title: string;
  desc: string;
  contact: string;
}

const ContactCard: React.FC<CardProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-4 border border-yellow-500 rounded-xl shadow-lg bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 hover:scale-105 transition-transform duration-300">
      <h4 className="text-lg font-bold text-center mb-2">{props.title}</h4>
      <Image
        className="w-24 h-24 rounded-full shadow-md mb-4"
        src={props.src}
        alt={`${props.title} image`}
        width={96}
        height={96}
        objectFit="cover"
      />
      <p className="text-sm text-center mb-4">{props.desc}</p>
      <div className="flex items-center space-x-2 mb-4">
        <Image src="/icons/socialmedia2/call.png" alt="Call" width={20} height={20} />
        <span className="text-sm">+91-9378882318</span>
      </div>
      <div className="flex gap-4">
        <Link href="" className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
          {/* <a target="_blank" > */}
          <Image src="/icons/socialmedia2/email.png" alt="Email" width={32} height={32} />
          {/* </a> */}
        </Link>
        <Link href="" className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
          {/* <a target="_blank" > */}
          <Image src="/icons/socialmedia2/instagram.png" alt="Instagram" width={32} height={32} />
          {/* </a> */}
        </Link>
        <Link href="" className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
          {/* <a target="_blank" > */}
          <Image src="/icons/socialmedia2/linkedin.png" alt="LinkedIn" width={32} height={32} />
          {/* </a> */}
        </Link>
        <Link href="" className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
          {/* <a target="_blank" > */}
          <Image src="/icons/socialmedia2/whatsapp.png" alt="WhatsApp" width={32} height={32} />
          {/* </a> */}
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
