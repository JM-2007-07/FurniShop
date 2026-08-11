import { TextAlignEnd } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-5 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl md:text-4xl font-bold">
            FurniShop
        </h1>
        <nav className="hidden md:flex gap-16 text-[16px]">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
        </nav>
        <TextAlignEnd className="block md:hidden text-3xl cursor-pointer" />
    </div>
  )
}
