import React from 'react'
import leftImg from '../assets/Insert Image Here (1).png'

export default function BestProduct() {
  return (
    <div className="w-full md:w-310 m-auto mt-16 md:mt-25 mb-16 md:mb-25 px-5 md:px-0 flex flex-col md:flex-row gap-10 md:gap-15 items-center">
        <div className="flex flex-col gap-7 w-full md:w-146.75 text-[#23262F]">
            <h1 className="font-semibold text-[32px] md:text-[40px] text-center md:text-left">
                The Best Furniture Manufacturer of your choice
            </h1>
            <p className="text-[18px] md:text-[20px] text-center md:text-left">
                Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services \
            </p>
            
        </div>
        <img src={leftImg} className="w-full md:w-auto max-w-[554px]" alt="" />
    </div>
  )
}
