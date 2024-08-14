import React from 'react'
import bgImage from "../../../assets/home/radiator2.png"
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

const SecondaryOffre = (props: Props) => {
  return <>
    <div className="w-full h-full relative">
        <Image src={bgImage} fill={true} className="w-full h-full z-[1]" alt="right image" />
        <div className="absolute w-full h-full bg-[#000] z-[2] opacity-60"/>
        <div className="absolute z-[3] w-full h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-medium">UNE PRESTATION</h2>
            <h2 className="text-4xl font-semibold">DE QUALITE</h2>
            <h2 className="text-2xl font-medium">POUR UN AVENIR</h2>
            <h2 className="text-4xl font-semibold">SECURISE</h2>
            <Link href={"/products"}><button className='p-3 border-white border-2 mt-2 uppercase text-white font-semibold hover:bg-white hover:text-mainBlack transition-transform hover:scale-105 text-md cursor-pointer'>
				{`Voir les produits`}
			</button></Link>
        </div>

    </div>
  </>
}

export default SecondaryOffre