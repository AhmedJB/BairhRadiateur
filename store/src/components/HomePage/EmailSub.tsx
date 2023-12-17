import React from 'react'
import sendIcon from "../../assets/home/SendIcon.svg"
import Image, { StaticImageData } from "next/image"

type Props = {}

function EmailSub({}: Props) {
  return <>
    <div className="w-full">
		<div className='mx-auto w-full xl:container px-4 flex items-center '>
            <div className=" flex gap-1 items-center w-full justify-between flex-wrap">
              <span className="flex items-center my-3">
              <Image src={sendIcon as StaticImageData} alt="send Icon" width={55} height={40} />
                    <div className="flex flex-col px-3 ">
                      <h1 className="lg:text-xl text-base font-semibold  text-darkGray">Obtenez des offres spéciales et des économies</h1>
                      <h4 className="lg:text-[1em] text-[0.7em] text-lighterGray ">Obtenez toutes les dernières informations sur les nouveaux arrivés</h4>
                    </div>

              </span>
                    
                    <div className="flex items-center lg:w-2/5 w-full ">
                      <input className="p-3 h-[50px] outline-none w-3/5 lg:w-4/5 lightBorder rounded-l-[30px] placeholder:text-lightgray placeholder:font-semibold placeholder:text-sm lg:placeholder:text-md " placeholder='Entrez votre adresse email'></input>
                      <button className="p-3 h-[50px] bg-darkGray w-2/5 lg:w-1/5 text-white rounded-r-[30px] lg:text-md text-sm font-semibold">{`s'inscrire`}</button>
                    </div>
            </div>
            </div>
            </div>
  </>
}

export default EmailSub