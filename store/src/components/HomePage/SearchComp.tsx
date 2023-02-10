import React from 'react'
import arrow from '../../assets/home/WhiteArrow.svg'
import Image from "next/image";
import {BsArrowRightCircle} from 'react-icons/bs'

type Props = {

}

const SearchComp = (props: Props) => {
  return <>
	<div className="w-full">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
		<div className="flex justify-around w-full items-center bg-blue h-[50px] p-0">
			<select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Catégorie</option>
			</select>
			<Image src={arrow} alt="arrow" width={150} height={50} />
			<select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Métal</option>
			</select>
			<Image src={arrow} alt="arrow" width={150} height={50} />
			<select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Type</option>
			</select>
			<Image src={arrow} alt="arrow" width={150} height={50} />
			<select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Marque</option>
			</select>
			

		</div>
		<div className='h-[50px] bg-red text-white cursor-pointer rounded-r-[50px]'>
		<div className='flex h-full  items-center px-6 font-semibold '>
		<BsArrowRightCircle className="text-[2em] mx-3" />
		Rechercher
	</div>
		</div>
	
	
		</div>
	</div>

	
  </>
}


export default SearchComp;