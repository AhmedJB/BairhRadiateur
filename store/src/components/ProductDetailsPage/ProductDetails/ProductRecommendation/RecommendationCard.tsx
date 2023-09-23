import React from 'react'
import Image, { StaticImageData } from "next/image"
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import Link from 'next/link'

type Props = {
    key: string,
    image : string | StaticImageData,
    title : string,
    subtitle : string,
    rating : number,
    price : number,

}

const RecommendationCard = (props: Props) => {
  return  <>
    <Link  href="/details">
    <div key={props.key}  className="flex flex-col h-[300px] w-[200px]">
        <div className="w-full h-1/2 relative mb-3">
            <Image src={props.image} className="rounded-md" alt="prod Image" fill={true} />
        </div>
        <h3 className="text-mainBlack text-[16px] my-0 font-semibold">{props.title}</h3>
        <h3 className="text-lighterGray  text-[16px] font-medium">{props.subtitle}</h3>
        <div className="flex items-center my-1">
            {
                [...(Array(props.rating) as number[])].map((e,i) => <AiFillStar key={`pstar-${i}`} className="text-yellow text-[16px]"></AiFillStar>)
            }
            {
                [...(Array(5-props.rating) as number[])].map((e,i) => <AiOutlineStar key={`nstar-${i}`} className="text-[16px]"></AiOutlineStar>)
            }


        </div>
        <h1 className="text-2xl text-darkGray my-1 font-semibold">{`DH ${props.price}`}</h1>

    </div>

    </Link>
  </>

}

export default RecommendationCard