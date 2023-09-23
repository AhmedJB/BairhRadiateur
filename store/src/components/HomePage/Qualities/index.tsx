import React from 'react'
import Garantie from "../../../assets/home/garantie.svg"
import Payment from "../../../assets/home/payment.svg"
import Repare from "../../../assets/home/repare.svg"
import Livraison from "../../../assets/home/livraison.svg"
import QualityCard from './QualityCard'
import { StaticImageData } from 'next/image'

type Props = {}

const Qualities = (props: Props) => {

    const cardData = [
        {
            image : Garantie as StaticImageData,
            caption : "GARANTIE"
        },
        {
            image : Payment as StaticImageData,
            caption : "PAIEMENT SECURISEE"
        },
        {
            image : Repare as StaticImageData,
            caption : "REPARATION EFFICACE"
        },
        {
            image : Livraison as StaticImageData,
            caption : "LIVRAISON RAPIDE"
        }
    ]



  return <>
    <div className="w-full">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
            <div className="flex w-full items-center justify-between px-6 py-20">
                {
                    cardData.map((e,i) => {
                   return <QualityCard key={`quality-${i}`} image={e.image} caption={e.caption} />      
                    })
                }
                
            </div>
    </div>
    </div>
  </>
}

export default Qualities