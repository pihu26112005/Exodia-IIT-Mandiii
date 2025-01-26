import React from 'react'
import Spomsors_Card from './Spomsors_Card'
import { SponList } from '@/lib/utils'
import { aboutNPfont } from '@/lib/font.utils'



const Spomsors_section = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <div className={`mt-[10rem] text-gold text-[5rem] max-sm:text-[3rem] ${aboutNPfont.className}`}>Sponsors</div>
        <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
            {SponList.map(({name, image},index) => (
               <Spomsors_Card key={index} name={name} image={image} />
            ))}
        </div>
    </div>
  )
}

export default Spomsors_section