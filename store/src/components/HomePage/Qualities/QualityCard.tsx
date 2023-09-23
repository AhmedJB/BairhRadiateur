import React from 'react'
import Image, { StaticImageData } from "next/image"

type Props = {
    image : string | StaticImageData,
    caption : string

}

function QualityCard({image,caption}: Props) {
  return <>
    <div className="flex flex-col items-center">
        <Image src={image} alt="cardImage" width={32} height={32} />
        <h2 className="text-lg font-semibold text-darkGray mt-6">{caption}</h2>
    </div>
  
  </>
}

export default QualityCard