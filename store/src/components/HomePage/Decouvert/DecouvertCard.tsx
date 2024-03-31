import React from 'react'
import Image, { StaticImageData } from 'next/image'

type Props = {
    color : string;
    image : StaticImageData;
    title : string;
    border:string;
    metal ?: string;
}

function DecouvertCard({color,image,title,border,metal}: Props) {
  return (
    <div className={`relative w-[300px] h-[200px] overflow-auto rounded-lg border-2 ${border}`}>
        <Image src={image} alt={title} fill={true} className="rounded-md"  />
        {/* <div className="absolute z-10 w-full h-full bg-[#00000080]"></div> */}
        {/* <h1 className={`z-20 absolute ${color} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-semibold uppercase text-center w-full`}>{title} </h1>
        {metal && <> <h1 className={`z-20 absolute ${color} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-semibold uppercase text-center w-full`}>{metal}</h1> </>} */}
    </div>
  )
}

export default DecouvertCard