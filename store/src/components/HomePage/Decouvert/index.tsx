import React from 'react'

import topLeft from "../../../assets/home/topLeft.png"
import topRight from "../../../assets/home/topRight.png"
import bottomLeft from "../../../assets/home/bottomLeft.png"
import bottomRight from "../../../assets/home/bottomRight.png"
import centerImage from "../../../assets/home/centerImage.png"
import metalImage from "../../../assets/home/radiator.png"
import Cuiv from "../../../assets/home/Cuiv.jpg"
import Clim from "../../../assets/home/Clim.jpg"
import Faisceaux from "../../../assets/home/Faisceaux.jpg"
import Chaff from "../../../assets/home/Chauff.jpg"
import AL from "../../../assets/home/AL.jpg"
import Test from "../../../assets/home/Test.jpg"
import DecouvertCard from './DecouvertCard'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

function Decouvert({}: Props) {
  return (
      <div className="w-full my-11">
          <div className='mx-auto w-full xl:container px-4 flex items-center flex-wrap xl:flex-nowrap justify-center xl:justify-start '>

          <div className="justify-center flex xl:flex-col flex-row flex-wrap items-center gap-3 mb-2 xl:mb-0">
              <div className="flex items-center  ">
              <Link href={`/products?cat=eau`} ><DecouvertCard color="text-white" border="border-alum" image={AL} title="Radiateur Eau" metal={"Aluminium"} /></Link>
             
                      <div className="relative hidden xl:block w-[200px] h-[200px]">
                      <Image src={topLeft} alt="topLeft" fill={true} /> 
                      </div>
                  
                      
              </div>
              <div className="flex items-center ">
              
              <Link href={`/products?cat=cuivre`} ><DecouvertCard color="text-yellow" border="border-cuivre" image={Cuiv} title="Radiateur Eau" metal={"Cuivre"} /></Link>
                      <div className="relative hidden xl:block w-[200px] h-[200px]">
                        <Image src={bottomLeft} alt="topLeft" fill={true} />
                      </div>

              
              </div>


          </div>

          <div className="relative hidden xl:block w-[500px] h-[400px]">
              <Image src={centerImage} alt="centerImage" className="rounded-lg" fill={true} />
          </div>

          <div className="flex justify-center xl:flex-col flex-row flex-wrap items-center gap-4">
              <div className="flex items-center  ">
              
              <div className="relative hidden xl:block w-[200px] h-[200px]">
               <Image src={topRight} alt="topRight" fill={true} /> 
                      </div>
                      <Link href={`/products?cat=chauf`} > <><DecouvertCard color="text-red" border="border-chauff" image={Chaff} title="Radiateur Chauffage" /></>  </Link> 
                
              </div>
              <div className="flex items-center ">
              
              <div className="relative hidden xl:block w-[200px] h-[200px]">
               <Image src={bottomRight} alt="topRight" fill={true} />
                      </div>
                      <Link href={`/products?cat=clime`} >   <DecouvertCard color="text-blue" border="border-clim" image={Clim} title="Radiateur Clim" /> </Link> 
              </div>


          </div>
          
          </div>
          <div className="w-full flex flex-col items-center justify-center xl:-translate-y-16 mt-1">
          <div className="relative hidden xl:block w-[200px] h-[200px] ">
               <Image src={bottomRight} alt="topRight" className={`rotate-45`} fill={true} />
                      </div>
          <Link href={`/products?cat=faisseaux`} >   <DecouvertCard color="text-blue" border="border-gray" image={Faisceaux} title="Radiateur Faisseaux" /> </Link> 
          </div>
      </div>
  );
}

export default Decouvert