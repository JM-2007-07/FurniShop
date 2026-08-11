import { Plus } from 'lucide-react'
import React from 'react'
import img1 from '../assets/llight 1.png'
import img2 from '../assets/llight 1 (1).png'
import img3 from '../assets/llight 1 (2).png'
import img4 from '../assets/llight 1 (3).png'
import img5 from '../assets/llight 1 (4).png'
import img6 from '../assets/llight 1 (5).png'
import img7 from '../assets/llight 1 (6).png'
import img8 from '../assets/llight 1 (7).png'

let products = [
    {
        id: 1,
        name: 'Ceiling Light',
        price: '75.00',
        lastprice: '82.00',
        img: img1
    },
    {
        id: 2,
        name: 'Wood Chair',
        price: '50.00',
        lastprice: '70.00',
        img: img2
    },
    {
        id: 3,
        name: 'Papper Cupboard',
        price: '105.00',
        lastprice: '120.00',
        img: img3
    },
    {
        id: 4,
        name: 'Ole Gundorse Spring...',
        price: '82.00',
        lastprice: '100.00',
        img: img4
    },
    {
        id: 5,
        name: 'Treos Seroes 911',
        price: '200.00',
        lastprice: '210.00',
        img: img5
    },
    {
        id: 6,
        name: 'Multi bilderman slibber...',
        price: '45.00',
        lastprice: '50.00',
        img: img6
    },
    {
        id: 7,
        name: 'XORA corner desk',
        price: '320.00',
        lastprice: '325.00',
        img: img7
    },
    {
        id: 8,
        name: 'Black Forest Series wo...',
        price: '225.00',
        lastprice: '240.00',
        img: img8
    }
]

export default function Products() {
  return (
    <div className="w-full md:w-310 m-auto text-center flex flex-col gap-8 md:gap-12 items-center px-5 md:px-0">
        <h1 className="text-[32px] md:text-[40px] font-semibold">All Product</h1>
        <p className="w-full md:w-135 text-sm md:text-base">
            The products we provide only for you as our service are selected from the best products with number 1 quality in the world
        </p>
        <div className="w-full md:w-310 flex flex-wrap justify-center gap-8 md:gap-5">
            {products.map(el => (
                <div key={el.id} className="w-full sm:w-72.5 h-auto md:h-95 flex flex-col gap-3">
                    <div className="w-full h-[300px] md:w-[290px] border border-[#1026371A] rounded-2xl flex justify-center relative items-center">
                        <img src={el.img} alt="" className="max-w-[85%] max-h-[85%] object-contain" />
                        <div className="absolute right-5 bottom-3 w-8 h-8 rounded-2xl bg-[#D9D9D9] flex justify-center items-center cursor-pointer">
                            <Plus />
                        </div>
                    </div>
                    <h1 className="font-semibold text-[22px] md:text-[24px] text-start">
                        {el.name}
                    </h1>
                    <div className="flex gap-5 items-center">
                        <p className="text-[16px]">${el.price}</p>
                        <p className="line-through text-gray-500 text-[14px]">
                            ${el.lastprice}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
