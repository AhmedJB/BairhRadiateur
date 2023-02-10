import React from 'react'
import Image from "next/image"
import {AiOutlineSearch} from  'react-icons/ai'


import liv from '../../../assets/general/liv.png'

type Props = {}

const TopHeader = (props: Props) => {
  return (
	<div className="w-full bg-lightWhite">
		<div className='mx-auto w-full xl:container flex items-center justify-between px-4 '>
			
			 <div className='flex items-center p-4'>
				 <div className="px-4 promoBG text-white font-semibold text-lg -rotate-3">5%</div>
				 <span className='text-md font-semibold tracking-widest text-mainBlack mx-2'>500dh*</span>
				 <span  className="text-md font-light">Coupon Code :</span>
				 <span className='text-md font-semibold tracking-widest text-mainBlack mx-2'>BAIRHRAD</span>

			 </div>

			<div className="w-[400px] flex items-center rounded-[15px] border-2 border-gray bg-white">
			<input type="text" className='w-full py-1  px-2 text-[0.9em] text-mainBlack font-light rounded-xl outline-none' />
			<AiOutlineSearch className='mx-3 text-lg' />
			</div>
			 
			 <div className='flex items-center'>
				 <div className="relative w-[32px] h-[32px]">
					 <Image src={liv} fill={true} alt="liv icon" />			 </div>
					 <div className="flex flex-col justify-center px-4">
						 <h2 className="text-xl font-semibold tracking-widest text-mainBlack my-0">LIVRAISON GRATUITE</h2>
						 <p  className='text-sm text-gray -my-1'>Les jours ouvrables - Achats de 900 dh ou plus</p>
					 </div>
			 </div>
		</div>
	</div>
  )
}

export  default TopHeader;