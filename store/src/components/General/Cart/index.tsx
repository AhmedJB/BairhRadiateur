import React from 'react'
import CartCard from './CartCard'

type Props = {}

function Cart({}: Props) {


    return <>
        <div className="fixed h-screen w-screen bg-black opacity-30 z-[9998]"></div>
        <div className="fixed w-[300px] max-w-[90%] bg-white smooth-shadow-cart h-screen right-0 top-0 z-[9999] md:py-4 py-1 flex flex-col">
            <h1 className='text-2xl font-semibold text-black text-center'>Cart</h1>
            <div className="flex  flex-col overflow-y-visible h-[90vh] gap-2">
                {
                    (new Array(20).fill(0).map((e,i) => {
                        return <CartCard />
                    }))
                }
            </div>
            <button className="">Submit</button>
        </div>
    </>

}

export default Cart