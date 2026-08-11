import React from 'react'
import fone from '../assets/Herofone.png'
import Header from './Header'

export default function Hero() {
  return (
    <div className="w-full min-h-screen text-white bg-cover bg-center bg-no-repeat flex flex-col items-center text-center gap-12 md:gap-35 px-5 py-6" style={{ backgroundImage: `url(${fone})` }}>
        <Header />
        <div className="flex flex-col items-center gap-5 md:gap-7">
            <h1 className="text-4xl md:text-[64px] font-semibold w-full md:w-222 leading-tight">
                Creative Home Simpify your Furniture
            </h1>
            <p className="text-base md:text-[20px] w-full md:w-150">
                Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto
            </p>
            <button className="text-lg md:text-[20px] font-semibold bg-[#e2e2e275] rounded-[10px] w-52 md:w-85 h-14 md:h-16">
                Shop Now
            </button>
        </div>
        <div className="w-full md:w-310 text-white bg-[#286F6C] rounded-3xl md:justify-around grid grid-cols-2 md:flex gap-6 py-8 md:h-45 justify-items-center items-center">
            <div className="flex flex-col items-center gap-1">
                <h1 className="font-semibold text-3xl md:text-[40px]">7</h1>
                <p className="text-sm md:text-[20px] text-center">Year Experience</p>
            </div>
            <hr className=' hidden md:block w-px h-25 bg-white border-none' />
            <div className="flex flex-col items-center gap-1">
                <h1 className="font-semibold text-3xl md:text-[40px]">2</h1>
                <p className="text-sm md:text-[20px] text-center">Opened in the country</p>
            </div>
            <hr className=' hidden md:block w-px h-25 bg-white border-none' />
            <div className="flex flex-col items-center gap-1">
                <h1 className="font-semibold text-3xl md:text-[40px]">10k+</h1>
                <p className="text-sm md:text-[20px] text-center">Furniture sold</p>
            </div>
            <hr className=' hidden md:block w-px h-25 bg-white border-none' />
            <div className="flex flex-col items-center gap-1">
                <h1 className="font-semibold text-3xl md:text-[40px]">260+</h1>
                <p className="text-sm md:text-[20px] text-center">Variant Furniture</p>
            </div>
        </div>
    </div>
  )
}
