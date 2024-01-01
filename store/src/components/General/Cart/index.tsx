import React , {useContext} from 'react'
import CartCard from './CartCard'
import { CartContext } from '../../../contexts/CartContext'
import Link from 'next/link'


type Props = {}

function Cart({}: Props) {
    const cartState = useContext(CartContext)


    const handleCartClose = () => {
        if (cartState) {
            cartState.setOpen(false);
        }
    }

    

    return <>
    {
        cartState && <> 
        {
            cartState.open && <><div className="fixed h-screen w-screen bg-black opacity-30 z-[9998]" onClick={handleCartClose}></div>
                <div className={`fixed w-[300px] max-w-[90%] bg-white  h-screen right-0 top-0 z-[9999] md:py-4 py-1 flex flex-col ${cartState.open ? "translate-x-0 smooth-shadow-cart" : "translate-x-full"} transition-transform`}>
            <h1 className='text-2xl font-semibold text-black text-center'>Cart</h1>
            <div className="flex  flex-col overflow-y-auto flex-1 gap-2 custom-scroll py-4">
                {
                    
                        cartState.cartData?.map((e,i) => {
                            return <CartCard quantity={e.quantity} product={e.product} key={e.product.info?.id} />
                        })
                    
                    
                    /* (new Array(20).fill(0).map((e,i) => {
                        return <CartCard quantity={5} key={`cart-elem-${i}`} />
                    })) */
                }
            </div>
            <Link href="/confirm" className='w-full flex items-center justify-center'>
            <button className="p-2 font-semibold text-lg text-white bg-blue rounded-xl w-[150px] mx-auto mt-5">Continue</button>
            </Link>
        </div>
        </>
        }
        
        
        </>

    }
        
    </>

}

export default Cart