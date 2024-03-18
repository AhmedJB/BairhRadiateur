import React, { useContext } from 'react'
import Image from "next/image"
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import {BsFillCartPlusFill}  from  "react-icons/bs"
import Link from 'next/link'
import HeartCheckboxComponent from '../../General/HeartCheckboxComponent'
import { CartContext } from '../../../contexts/CartContext'
import { generalProuctInfotT } from '../../../types/general'
import { toast } from 'react-toastify'

type Props = {
    image : string,
    title : string,
    subtitle : string,
    rating : number,
    price : number,
    id : string,
    key:string,
    pid : string,
    products : generalProuctInfotT[]

}

const ProductCard = (props: Props) => {
  const cartState = useContext(CartContext);

  const handleAddToCart = () => {

    const filtered = props.products.filter(e => {
        return e.info?.id === props.pid})[0];
    const data = cartState?.cartData ? cartState.cartData : [];
    if (cartState  && filtered){
      const temp = [...data];
      let index = -1;
      const old = temp.filter((e,i) => {
        if (e?.product?.info?.id === filtered.info?.id){
          index = i;
          return true;
        }
      } );
      if (old.length === 0){
        const data = {
          product : filtered,
          quantity : 1
        }
        temp.push(data);
      }else if ( old[0] ){
        temp.splice(index,1);
        old[0].quantity += 1 
        temp.push(old[0])
      }
      cartState.setCartData(temp);
      toast.success("Produit est ajoute")
    }
  }

  return <>
    <div key={`product-${props.id}`} className="flex flex-col min-h-[350px] w-[300px]  shadow-xl rounded-2xl">
        <div className=" h-[220px] w-full relative mb-0 flex items-center ">
            <span className="bg-blue p-2 rounded-full absolute transition-transform hover:scale-110 cursor-pointer right-[45px] top-[10px] z-10" onClick={handleAddToCart}>
            <BsFillCartPlusFill className=" text-white text-xl" />
            </span>
            <span className="bg-blue p-2 rounded-full absolute transition-transform hover:scale-110 cursor-pointer right-[5px] top-[10px] z-10 ">
            <HeartCheckboxComponent className='' pid={props.pid} size="text-[0.6rem]" color='text-white' />
            </span>
            
            
            <Image src={props.image} className="rounded-tl-md rounded-tr-md" alt="prod Image" fill={true} />
        </div>
        <Link href={"/details/"+props.id} legacyBehavior><button className='w-full p-1 text-white bg-blue'>Aperçu</button></Link>
        <div className="p-2">
        <h3 className="text-mainBlack text-[16px] my-0 font-semibold">{props.title}</h3>
        <h3 className="text-lighterGray  text-[16px] font-medium">{props.subtitle}</h3>
        <div className="flex items-center my-1">
            {
                [...(Array(props.rating) as number[])].map((e,i) => <AiFillStar key={`pstar-${i}`} className="text-yellow text-[16px]"></AiFillStar>)
            }
            {
                [...(Array(5 - props.rating) as number[])].map((e,i) => <AiOutlineStar key={`nstar-${i}`} className="text-[16px]"></AiOutlineStar>)
            }


        </div>
        <h1 className="text-2xl text-darkGray my-1 font-semibold">{`DH ${props.price}`}</h1>

        </div>
        

    </div>
  </>;

}

export default ProductCard