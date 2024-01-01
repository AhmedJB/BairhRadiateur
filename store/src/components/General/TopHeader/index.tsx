import React from 'react'
import Image from "next/image"
import {AiOutlineSearch} from  'react-icons/ai'




type Props = {}

const TopHeader = (props: Props) => {
  return (
	<div className="w-full bg-lightWhite">
		<div className='mx-auto w-full xl:container flex items-center justify-between px-4 '>
			
			 <div className='lg:flex hidden items-center p-4'>
				 <div className="px-4 promoBG text-white font-semibold text-lg -rotate-3">5%</div>
				 <span className='text-md font-semibold tracking-widest text-mainBlack mx-2'>500dh*</span>
				 <span  className="text-md font-light">Coupon Code :</span>
				 <span className='text-md font-semibold tracking-widest text-mainBlack mx-2'>BAIRHRAD</span>

			 </div>

			<div className="mx-auto w-[400px] flex items-center rounded-[15px] border-2 border-gray bg-white">
			<input type="text" className='w-full py-1  px-2 text-[0.9em] text-mainBlack font-light rounded-xl outline-none' />
			<AiOutlineSearch className='mx-3 text-lg' />
			</div>
			 
			 
		</div>
	</div>
  )
}

export  default TopHeader;