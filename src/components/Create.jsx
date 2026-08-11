import React from 'react'
import leftImg from '../assets/Insert Image Here.png'
import { Check } from 'lucide-react'

export default function Create() {
  return (
    <div className="w-full md:w-310 m-auto mt-16 md:mt-25 mb-16 md:mb-25 px-5 md:px-0 flex flex-col md:flex-row gap-10 md:gap-15 items-center">
        <img src={leftImg} className="w-full md:w-auto max-w-[554px]" alt="" />
        <div className="flex flex-col gap-7 w-full md:w-146.75 text-[#23262F]">
            <h1 className="font-semibold text-[32px] md:text-[40px] text-center md:text-left">
                We Create your home more aestetic
            </h1>
            <p className="text-[18px] md:text-[20px] text-center md:text-left">
                Furnitre power is a software as services for multiperpose business management system,
            </p>
            <div className="flex flex-col gap-2">
                <div className="flex gap-5 items-center">
                    <div className="w-8 h-8 rounded-2xl bg-[#23262F] flex justify-center items-center text-white">
                        <Check />
                    </div>
                    <p className="font-semibold text-[18px] md:text-[20px]">
                        Valuation Services
                    </p>
                </div>
                <p className="ml-13 text-[15px] md:text-[16px]">
                    Sometimes features require a short description. This can be detailed description
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-5 items-center">
                    <div className="w-8 h-8 rounded-2xl bg-[#23262F] flex justify-center items-center text-white">
                        <Check />
                    </div>
                    <p className="font-semibold text-[18px] md:text-[20px]">
                        Development of Furniture Models
                    </p>
                </div>
                <p className="ml-13 text-[15px] md:text-[16px]">
                    Sometimes features require a short description. This can be detailed description
                </p>
            </div>
        </div>
    </div>
  )
}
