import { MoveRight } from 'lucide-react'
import React from 'react'
import fone from '../assets/lui-peng-8NxTrV6i4WQ-unsplash.png'
import fone1 from '../assets/erik-mclean-Ij9nIghkI6k-unsplash.png'
import fone2 from '../assets/sanibell-bv-g01h0WtY22s-unsplash.png'

export default function NewProducts() {
  return (
    <div className="w-full md:w-310 m-auto flex flex-col md:flex-row gap-10 md:gap-12 items-center px-5 md:px-0">
        <div className="flex flex-col gap-6 md:gap-10 w-full md:w-61">
            <h1 className="text-[32px] md:text-[40px] font-semibold">New In Store Now</h1>
            <p>Get the latest items immediately with promo prices</p>
            <div className="flex items-center">
                <a href="#" className="underline">Chek All</a>
                <MoveRight />
            </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-5 md:gap-10 justify-between">
            <div className="w-full sm:w-66.25 h-80 md:h-100 flex text-center flex-col justify-end bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${fone})` }}>
                <p className="text-[24px] md:text-[28px] text-white font-semibold">Chair</p>
            </div>

            <div className="w-full sm:w-66.25 h-80 md:h-100 flex text-center flex-col justify-end bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${fone1})` }}>
                <p className="text-[24px] md:text-[28px] text-white font-semibold">Bed</p>
            </div>

            <div className="w-full sm:w-66.25 h-80 md:h-100 flex text-center flex-col justify-end bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${fone2})` }}>
                <p className="text-[24px] md:text-[28px] text-white font-semibold">Cupboard</p>
            </div>
        </div>
    </div>
  )
}
