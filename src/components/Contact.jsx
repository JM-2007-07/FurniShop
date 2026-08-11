import React from 'react'
import fone from '../assets/Rectangle 928.png'

export default function Contact() {
  return (
    <div className='w-full bg-no-repeat bg-left md:bg-center h-62.5 bg-cover md:h-122.5 ' style={{backgroundImage: `url(${fone})`}}>
        <div className="w-full  md:w-310 m-auto mt-16 md:mt-25 mb-16 md:mb-25 px-5 md:px-0 flex flex-col md:flex-row md:justify-end md:h-122.5 md:items-center text-white gap-10 md:gap-15 items-center">
            <div className="flex flex-col gap-7 w-full md:w-140">
                <h1 className="font-semibold text-[32px] md:text-[40px] text-center md:text-left">
                    Get more discount <br />Off your order
                </h1>
                <p className="text-[18px] md:text-[20px] text-center md:text-left">
                    Join our mailing list
                </p>           
                <div className='flex gap-5 items-center '>
                    <input type="text" placeholder="Your email address" className="w-88 px-4 h-15 rounded-lg bg-white text-[#23262F] " />
                    <button className='w-38 h-15 font-semibold text-[14px] md:text-[20px] bg-[#23262F] rounded-lg '>Shop Now</button>
                </div>     
            </div>
        </div>
    </div>
  )
}
