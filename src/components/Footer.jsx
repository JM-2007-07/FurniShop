import React from 'react'
import icon from '../assets/Icon.svg'
import icon1 from '../assets/Icon (1).svg'
import icon2 from '../assets/Icon (2).svg'
import icon3 from '../assets/Icon (3).svg'

export default function Footer() {
  return (
    <div className='w-full h-auto p-5 md:p-0 bg-[#23262F] md:h-128.25 flex justify-center '>
        <div className='w-full md:w-310 text-white flex flex-col gap-15 '>
            <div className='w-full flex gap-7 flex-col md:flex-row justify-between mt-10'>
                <h1 className="text-2xl md:text-4xl font-bold">
                    FurniShop
                </h1>
                <div className='flex gap-5'>
                    <div className='w-12 h-12 rounded-[50%] bg-[#2B2B3F] flex justify-center items-center '>
                        <img src={icon} alt="" />
                    </div>
                    <div className='w-12 h-12 rounded-[50%] bg-[#2B2B3F] flex justify-center items-center '>
                        <img src={icon1} alt="" />
                    </div>
                    <div className='w-12 h-12 rounded-[50%] bg-[#2B2B3F] flex justify-center items-center '>
                        <img src={icon2} alt="" />
                    </div>
                    <div className='w-12 h-12 rounded-[50%] bg-[#2B2B3F] flex justify-center items-center '>
                        <img src={icon3} alt="" />
                    </div>
                </div>
            </div>
            <hr className='w-full h-px bg-white border-none' />
            <div className='flex w-full gap-10 flex-wrap justify-between '>
                <div className='flex flex-col gap-5 text-[14px] '>
                    <h3 className='text-[18px]'>Our Products</h3>
                    <p>The Support Suite</p>
                    <p>The Sales Suite</p>
                    <p>Support</p>
                    <p>Guide</p>
                </div>
                <div className='flex flex-col gap-5 text-[14px] '>
                    <h3 className='text-[18px]'>Top Features</h3>
                    <p>Ticketing System</p>
                    <p>Knowledge Base</p>
                    <p>Community Forums</p>
                    <p>Help Desk Software</p>
                </div>
                <div className='flex flex-col gap-5 text-[14px] '>
                    <h3 className='text-[18px]'>Resources</h3>
                    <p>Product Support</p>
                    <p>Request Demo</p>
                    <p>Library</p>
                    <p>Peoplepower Blog</p>
                </div>
                <div className='flex flex-col gap-5 text-[14px] '>
                    <h3 className='text-[18px]'>Company</h3>
                    <p>About Us</p>
                    <p>Press</p>
                    <p>Investors</p>
                    <p>Events</p>
                </div>
                <div className='flex flex-col gap-5 text-[14px] '>
                    <h3 className='text-[18px]'>Favourite Things</h3>
                    <p>For Enterprise</p>
                    <p>For Startups</p>
                    <p>For Benchmark</p>
                    <p>For Small Business</p>
                </div>
            </div>
            <p className='text-center text-[14px] '>© NameBrand 2022 - All Rights Reserved</p>
        </div>
    </div>
  )
}
