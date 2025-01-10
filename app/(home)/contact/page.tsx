"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// import './component/page.css'
import Contact_Card from '@/components/Contact_Card'


const page: React.FC = () => {
  return (
    <>
      <Navbar/>

      <div className=' h-[100vh] flex justify-center items-center flex-wrap'>
        <Contact_Card src="/assets/contact/c1.jpeg" title='Albus Dumbledore' desc="Headmaster" contact="+91-987384738" />

        <Contact_Card src="/assets/contact/c2.jpeg" title="Minerva Mcgonagall" desc="Professor of Transfiguration" contact="+91-987384738" />

        <Contact_Card src="/assets/contact/c1.jpeg" title="Severus Snape" desc="Professor of Magical Posions" contact="+91-987384738" />

        <Contact_Card src="/assets/contact/c2.jpeg" title="Harry Potter" desc="Head boy" contact="+91-987384738" />
      </div>

      <Footer/>
    </>
  )
}

export default page