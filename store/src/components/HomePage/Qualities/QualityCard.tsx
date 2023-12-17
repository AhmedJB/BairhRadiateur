import React from 'react'
import Image, { StaticImageData } from "next/image"

type Props = {
    image : string | StaticImageData,
    caption : string

}

function QualityCard({image,caption}: Props) {
  return <>
    <div className="flex flex-col items-center w-[180px] aspect-square justify-center rounded-lg shadow-md p-5">
        <Image src={image} alt="cardImage" width={32} height={32} />
        <h2 className="text-lg text-center font-semibold text-darkGray mt-6">{caption}</h2>
    </div>
  
  </>
}

export default QualityCard