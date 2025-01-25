import localFont from 'next/font/local'
import React from 'react'
import FAQ from './Announcement_qnaSection'
import { announcements, faqquestions } from '@/lib/utils'

const aboutNPfont = localFont({
    src: '../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-Black.ttf',
    display: 'swap',
})

const aboutNPfont2 = localFont({
    src: '../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-Regular.ttf',
    display: 'swap',
})

const aboutNPfont3 = localFont({
    src: '../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-BoldItalic.ttf',
    display: 'swap',
})

const aboutNPfont4 = localFont({
    src: '../public/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf',
    display: 'swap',
})



const Anouncement_NewsSection = () => {
    return (
        <>
            <div className={`bg-repeat bg-center  w-full text-black`}
                style={{ backgroundImage: "url('/assets/anouncement/nbg.avif')" }}>
                <div className='flex flex-col justify-center items-center'>
                    <div className={`pt-[6rem] text-[70px] ${aboutNPfont.className}`}>
                        The Exodia Times
                    </div>

                    <div className='flex justify-center items-center'>
                        <hr className="absolute w-[80%] h-[2px] bg-black mb-1 " />
                        <hr className="absolute w-[80%] h-[1px] bg-black mt-1 " />
                    </div>
                    <div className={`mt-2 mb-2 w-[80%] text-[20px] ${aboutNPfont2.className}`}>
                        Announcement
                    </div>
                    <div className='flex justify-center items-center'>
                        <hr className="absolute w-[80%] h-[1px] bg-black mt-1 " />
                        <hr className="absolute w-[80%] h-[2px] bg-black mb-1 " />
                    </div>

                    {/* Map through the announcements array */}
                    <div className='flex flex-col justify-center items-center w-[80%]  max-sm:w-[90%] mt-5'>
                        {announcements.map((item, index) => (
                            <>
                                <div key={index} className='flex flex-row justify-between items-center w-full'>
                                    <div className={`w-[75%]  left-0 flex flex-col justify-center items-center`}>
                                        <div className={`w-[80%] ${aboutNPfont3.className} font-serif italic text-[40px] max-sm:text-[20px] text-start`}>
                                            {item.title}
                                        </div>
                                        <div className={`w-[80%] text-[15px] max-sm:text-[10px] ${aboutNPfont4.className} text-start mt-4 mb-8`}>
                                            {item.description}
                                        </div>
                                    </div>
                                    <div className='w-[1px] h-full '>
                                        <hr className="w-[1px] h-[100px] bg-black" />
                                    </div>
                                    <div className='w-[25%] max-sm:w-[15%] right-0 flex flex-col justify-center items-center'>
                                        <div className={`${aboutNPfont4.className} max-sm:text-[10px]`}>
                                            {item.day}
                                        </div>
                                        <div className={`${aboutNPfont4.className} max-sm:text-[10px]`}>
                                            {item.date}
                                        </div>
                                        <div className={`${aboutNPfont4.className} max-sm:text-[10px]`}>
                                            {item.time}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center w-[80%] mb-8'>
                                    <hr className="absolute w-[70%] h-[1px] bg-black mt-1" />
                                </div>
                            </>
                        ))}
                    </div>

                    <div className="container mx-auto p-6  flex flex-col">
                        <FAQ data={faqquestions} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Anouncement_NewsSection
