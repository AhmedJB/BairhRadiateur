import React from 'react'

import topLeft from "../../../assets/home/topLeft.png"
import topRight from "../../../assets/home/topRight.png"
import bottomLeft from "../../../assets/home/bottomLeft.png"
import bottomRight from "../../../assets/home/bottomRight.png"
import centerImage from "../../../assets/home/centerImage.png"
import metalImage from "../../../assets/home/radiator.png"
import DecouvertCard from './DecouvertCard'
import Image from 'next/image'


type Props = {}

function Decouvert({}: Props) {
  return (
    <div className="w-full my-11">
		<div className='mx-auto w-full xl:container px-4 flex items-center '>

        <div className="flex flex-col items-center gap-3">
            <div className="flex items-center ">
                    <DecouvertCard color="text-yellow" border="border-yellow" image={metalImage} title="Cuivre" />
                    <div className="relative w-[200px] h-[200px]">
                        <Image src={topLeft} alt="topLeft" fill={true} />
                    </div>
            </div>
            <div className="flex items-center ">
                    <DecouvertCard color="text-white" border="border-white" image={metalImage} title="Aluminium" />
                    <div className="relative w-[200px] h-[200px]">
                        <Image src={bottomLeft} alt="topLeft" fill={true} />
                    </div>
            </div>


        </div>

        <div className="relative w-[500px] h-[400px]">
            <Image src={centerImage} alt="centerImage" className="rounded-lg" fill={true} />
        </div>
        <div className="flex flex-col items-center gap-3">
            <div className="flex items-center ">
            <div className="relative w-[200px] h-[200px]">
                        <Image src={topRight} alt="topRight" fill={true} />
                    </div>
                    <DecouvertCard color="text-red" border="border-red" image={metalImage} title="Chauffage" />
                    
            </div>
            <div className="flex items-center ">
            <div className="relative w-[200px] h-[200px]">
                        <Image src={bottomRight} alt="topRight" fill={true} />
                    </div>
                    <DecouvertCard color="text-blue" border="border-blue" image={metalImage} title="Clim" />
                    
            </div>


        </div>
           

        </div>
    </div>
  )
}

export default Decouvert