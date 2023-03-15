import React from 'react'
import Image from "next/image"
import {AiFillStar,AiOutlineStar} from "react-icons/ai"

type Props = {
    image : any,
    title : string,
    subtitle : string,
    rating : number,
    price : number,

}

const RecommendationCard = (props: Props) => {
  return  <>
    <div className="flex flex-col h-[300px] w-[200px]">
        <div className="w-full h-1/2 relative mb-3">
            <Image src={props.image} className="rounded-md" alt="prod Image" fill={true} />
        </div>
        <h3 className="text-mainBlack text-[16px] my-0 font-semibold">{props.title}</h3>
        <h3 className="text-lighterGray  text-[16px] font-medium">{props.subtitle}</h3>
        <div className="flex items-center my-1">
            {
                [...Array(props.rating)].map((e,i) => <AiFillStar className="text-yellow text-[16px]"></AiFillStar>)
            }
            {
                [...Array(5-props.rating)].map((e,i) => <AiOutlineStar className="text-[16px]"></AiOutlineStar>)
            }


        </div>
        <h1 className="text-2xl text-darkGray my-1 font-semibold">{"DH "+props.price}</h1>

    </div>
  </>

}

export default RecommendationCard