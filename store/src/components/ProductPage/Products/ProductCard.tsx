import React from 'react'
import Image from "next/image"
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import {BsFillCartPlusFill}  from  "react-icons/bs"
import Link from 'next/link'
import HeartCheckboxComponent from '../../General/HeartCheckboxComponent'

type Props = {
    image : any,
    title : string,
    subtitle : string,
    rating : number,
    price : number,
    id : string

}

const ProductCard = (props: Props) => {
  return  <>
    <div className="flex flex-col min-h-[350px] w-[300px]  shadow-xl rounded-2xl">
        <div className=" h-[220px] w-full relative mb-0 flex items-center ">
            <span className="bg-blue p-2 rounded-full absolute transition-transform hover:scale-110 cursor-pointer right-[45px] top-[10px] z-10">
            <BsFillCartPlusFill className=" text-white text-xl" />
            </span>
            <span className="bg-blue p-2 rounded-full absolute transition-transform hover:scale-110 cursor-pointer right-[5px] top-[10px] z-10 ">
            <HeartCheckboxComponent className='' size="text-[0.6rem]" color='text-white' />
            </span>
            
            
            <Image src={props.image} className="rounded-tl-md rounded-tr-md" alt="prod Image" fill={true} />
        </div>
        <Link href={"/details/"+props.id}><button className='w-full p-1 text-white bg-blue'>Aperçu</button></Link>
        <div className="p-2">
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
        

    </div>
  </>

}

export default ProductCard