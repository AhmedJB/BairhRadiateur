import Image from 'next/image'
import React, {useContext} from 'react'

import TestImage from "../../../../assets/home/radiator.png"
import { generalProuctInfotT } from '../../../../types/general'
import { formatImage } from '../../../../Helpers/helpers'
import { CartContext } from '../../../../contexts/CartContext'

type Props = {
    quantity : number,
    product : generalProuctInfotT
}

function CartCard({quantity,product}: Props) {

    const cartState = useContext(CartContext)

    function trimText(inputText: string): string {
        const length = 25;
        if (inputText.length <= length) {
          return inputText;
        } else {
          return inputText.slice(0, length - 3) + '...';
        }
      }

      const adjustQuantity = (step : number) => {
        if (cartState?.cartData){
            const data = cartState?.cartData ? cartState.cartData : [];
            const temp = [...data];
            let index = -1;
            const old = temp.filter((e,i) => {
                if (e?.product?.info?.id === product.info?.id){
                index = i;
                return true;
                }
            } );
            if (old[0]){
                const p = old[0];
                if (p.quantity + step <= 0){
                    temp.splice(index,1);

                } else {
                    p.quantity += step;
                    temp.splice(index,1);
                    p.quantity = quantity + step
                    temp.push(p)
                }
                cartState.setCartData(temp)
            }
            
        }
      }
  
    return <article className="w-full p-2 min-h-[100px] flex items-center gap-2 ">
        <div className="relative w-[70px] aspect-square">
            <Image src={formatImage(product.serverInfo.images[0]?.image)} fill={true} alt="cart-image" className="bg-contain" />
            
        </div>
        <div className="h-full flex flex-col pt-2">
                <h1 className="text-md text-black font-semibold">
                    {trimText(`${product.info?.name as string}`)}
                </h1>
                <div className="flex gap-2 items-center">
                    <div className=" text-gray font-semibold border-[1px] border-gray rounded-sm w-[35px] h-[35px] text-2xl cursor-pointer text-center  p-0 hover:text-red hover:border-red transition-colors  "
                    onClick={() => adjustQuantity(-1)}
                    >
                        -
                    </div>
                    <div className="text-gray font-semibold">{quantity} x {product.info?.price}DH</div>
                    <div className=" text-gray font-semibold border-[1px] border-gray rounded-sm w-[35px] h-[35px] text-2xl cursor-pointer text-center  p-0 hover:text-blue hover:border-blue transition-colors "
                    onClick={() => adjustQuantity(1)}
                    >
                        +
                    </div>
                </div>
            </div>


    </article>

}

export default CartCard