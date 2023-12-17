import React from 'react'

import topLeft from "../../../assets/home/topLeft.png"
import topRight from "../../../assets/home/topRight.png"
import bottomLeft from "../../../assets/home/bottomLeft.png"
import bottomRight from "../../../assets/home/bottomRight.png"
import centerImage from "../../../assets/home/centerImage.png"
import metalImage from "../../../assets/home/radiator.png"
import DecouvertCard from './DecouvertCard'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

function Decouvert({}: Props) {
  return (
    <div className="w-full my-11">
		<div className='mx-auto w-full xl:container px-4 flex items-center flex-wrap xl:flex-nowrap justify-center xl:justify-start '>

        <div className="justify-center flex xl:flex-col flex-row flex-wrap items-center gap-3">
            <div className="flex items-center  ">
                
            <Link href={`/products?tube=cuivre`}><DecouvertCard color="text-yellow" border="border-yellow" image={metalImage} title="Cuivre" /></Link>
                    <div className="relative hidden xl:block w-[200px] h-[200px]">
                    <Image src={topLeft} alt="topLeft" fill={true} /> 
                    </div>
                
                    
            </div>
            <div className="flex items-center ">
            
            <Link href={`/products?tube=aluminium`}><DecouvertCard color="text-white" border="border-white" image={metalImage} title="Aluminium" /></Link>
                    <div className="relative hidden xl:block w-[200px] h-[200px]">
                      <Image src={bottomLeft} alt="topLeft" fill={true} />
                    </div>

            
            </div>


        </div>

        <div className="relative hidden xl:block w-[500px] h-[400px]">
            <Image src={centerImage} alt="centerImage" className="rounded-lg" fill={true} />
        </div>

        <div className="flex justify-center xl:flex-col flex-row flex-wrap items-center gap-3">
            <div className="flex items-center  ">
            
            <div className="relative hidden xl:block w-[200px] h-[200px]">
             <Image src={topRight} alt="topRight" fill={true} /> 
                    </div>
                    <Link href={`/products?tube=chauffage`}> <DecouvertCard color="text-red" border="border-red" image={metalImage} title="Chauffage" /> </Link> 
              
            </div>
            <div className="flex items-center ">
            
            <div className="relative hidden xl:block w-[200px] h-[200px]">
             <Image src={bottomRight} alt="topRight" fill={true} />
                    </div>
                    <Link href={`/products?tube=clim`}>   <DecouvertCard color="text-blue" border="border-blue" image={metalImage} title="Clim" /> </Link> 
            </div>


        </div>
        </div>
    </div>
  )
}

export default Decouvert