import React from 'react'
import leftImg from '../assets/Insert Image Here (2).png'
import photo from '../assets/Ellipse 202.png'

export default function About() {
  return (
    <div className="w-full md:w-310 m-auto mt-16 md:mt-25 mb-16 md:mb-25 px-5 md:px-0 flex flex-col md:flex-row gap-10 md:gap-15 items-center">
            <div className="flex flex-col gap-7 w-full md:w-146.75 text-[#23262F]">
                <h1 className="font-semibold text-[32px] md:text-[40px] text-center md:text-left">
                    What people are saying about us
                </h1>
                <div className='flex gap-5'>
                    <img src={photo} alt="" />
                    <div className='flex flex-col gap-2 '>
                        <h2 className='font-semibold text-[20px] '>Josh Smith</h2>
                        <p className=''>Manager of The New York Times</p>
                    </div>
                </div>
                <p className="text-[18px] md:text-[20px] text-center md:text-left">
                    “They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”
                </p>
            </div>
            <img src={leftImg} className="w-full md:w-auto max-w-[554px]" alt="" />
        </div>
  )
}
