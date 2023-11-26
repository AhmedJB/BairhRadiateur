import React , {useContext} from 'react'
import { CartContext } from '../../../contexts/CartContext'
import Image from 'next/image'
import { formatImage } from '../../../Helpers/helpers'
import DemoImage from "../../../assets/home/radiator.png"

type Props = {}

function ConfirmCart({}: Props) {

    const cartState = useContext(CartContext)

  return <>
  {
    cartState?.cartData && <>
    


    <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-black font-medium ">
    <thead className="text-xs text-gray-700 uppercase bg-mainBlack text-white ">
      <tr>
        <th scope="col" className="px-6 py-3">
        </th>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Quantity
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Total
        </th>
      </tr>
    </thead>
    <tbody>
    {
            cartState.cartData.map((e,i) => {
                return <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                <div className="relative w-[150px] aspect-square">
                            <Image src={DemoImage} fill={true} alt="cart-image" className="bg-contain" />
                            {/* formatImage(e.product.serverInfo.images[0]?.image) */}
                        
                        </div>
                </th>
                <td className="px-6 py-4">
                <h1 className="text-black font-semibold">{e.product.info?.name}</h1>
                </td>
                <td className="px-6 py-4">
                 {e.quantity}
                </td>
                <td className="px-6 py-4">
                  {e.product.info?.price}DH
                </td>
                <td className="px-6 py-4">
                  {e.product.info && e.product.info.price  ? e.product.info.price * e.quantity : "--"}DH
                </td>

              </tr>
            })
        }
      
    </tbody>
  </table>
</div>

        
        
    
    </>
  }
    
  </>
}

export default ConfirmCart