import Image from 'next/image'
import React from 'react'

import TestImage from "../../../../assets/home/radiator.png"

type Props = {
    quantity : number,
}

function CartCard({quantity}: Props) {

    function trimText(inputText: string): string {
        const length = 25;
        if (inputText.length <= length) {
          return inputText;
        } else {
          return inputText.slice(0, length - 3) + '...';
        }
      }
  
    return <article className="w-full p-2 min-h-[100px] flex items-center gap-2 ">
        <div className="relative w-[70px] aspect-square">
            <Image src={TestImage} fill={true} alt="cart-image" className="bg-contain" />
            
        </div>
        <div className="h-full flex flex-col pt-2">
                <h1 className="text-md text-black font-semibold">
                    {trimText("this is a sample title hello there")}
                </h1>
                <div className="flex gap-2 items-center">
                    <div className=" text-gray font-semibold border-[1px] border-gray rounded-sm w-[35px] h-[35px] text-2xl cursor-pointer text-center  p-0 hover:text-red hover:border-red transition-colors  ">
                        -
                    </div>
                    <div className="text-gray font-semibold">{quantity} x 50DH</div>
                    <div className=" text-gray font-semibold border-[1px] border-gray rounded-sm w-[35px] h-[35px] text-2xl cursor-pointer text-center  p-0 hover:text-blue hover:border-blue transition-colors ">
                        +
                    </div>
                </div>
            </div>


    </article>

}

export default CartCard