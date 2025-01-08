import { AboutSociallinks } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About_JoinSection = () => {
  return (
    <>
    <div className='m-0 p-0 flex  flex-col justify-center items-center z-[900] relative mb-[10rem] max-sm:gap-[1rem]'>
        <div className='harry-text text-[4rem] max-sm:text-[2rem] max-2xl:text-[3rem]'>
            Join the Exodia Community 
        </div>
        <div className='flex gap-[1rem] '>
            {AboutSociallinks.map((link, index) => (
                <Link className='hover:scale-150 max-sm:w-[2rem]' key={index} href={link.href}>
                    <Image src={link.icon} alt={link.title} width={50} height={50} />
                </Link>
            ))}
        </div>
    </div>
    </>
  )
}

export default About_JoinSection