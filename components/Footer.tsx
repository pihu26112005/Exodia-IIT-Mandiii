import React from 'react'
import { FooterSocialMediaDock } from './Home_FooterSocialMediaDock'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 flex flex-col items-center">


      <div className="container mx-auto grid grid-cols-4 max-md:grid-cols-1">

        <div className='z-[900]'>
          <p className="harry-text text-[3rem] flex justify-center items-center">EXODIA '25</p>
        </div>

        {/* Participate Section */}
        <div className='max-md:hidden'>
          <h3 className="text-gray-400 font-semibold mb-3">Participate</h3>
          <ul className="space-y-2">
            <li><a href="/events" className="hover:text-pink-500">Events Portal</a></li>
            <li><a href="/events" className="hover:text-pink-500">Join The Community</a></li>
            <li><a href="/brochure" className="hover:text-pink-500">Brochure</a></li>
          </ul>
        </div>

        {/* Explore More Section */}
        <div className='max-md:hidden'>
          <h3 className="text-gray-400 font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2">
          <li><a href="/about" className="hover:text-pink-500">About Exodia</a></li>
            <li><a href="/gallery" className="hover:text-pink-500">Previous Star Attractions</a></li>
            <li><a href="/gallery" className="hover:text-pink-500">Gallery</a></li>
          </ul>
        </div>

        {/* Reach Out Section */}
        <div className='max-md:hidden'>
          <h3 className="text-gray-400 font-semibold mb-3">Reach Out To Us</h3>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:text-pink-500">Have Any Queries?</a></li>
            <li><a href="/contact" className="hover:text-pink-500">Contact Us</a></li>
            <li><a href="/team" className="hover:text-pink-500">Associate With Us</a></li>
          </ul>
        </div>

      </div>

      <FooterSocialMediaDock />


      {/* Social Icons and Copyright */}
      <div className=" border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center lg:px-12">
        {/* Social Media Links */}

        {/* Copyright */}
        <p className="text-gray-400 mt-4 md:mt-0 text-sm">
          © Exodia '25, IIT Mandi &nbsp; | &nbsp; Made with <span className="text-pink-500">♥</span> by Web Dev Team
        </p>
      </div>
    </footer>
  )
}

export default Footer