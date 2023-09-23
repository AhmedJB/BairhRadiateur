import React,{useState} from 'react'
import arrow from '../../assets/home/WhiteArrow.svg'
import Image, { StaticImageData } from "next/image";
import {BsArrowRightCircle} from 'react-icons/bs'
import SelectorComp from './SelectorComp';

import {categories} from "../../demo/selectDummy";

type Props = {

}

const SearchComp = (props: Props) => {
	const [category,setCategory] = useState("");
	const [metal,setMetal] = useState("");
	const [type,setType] = useState("");
	const [marque,setMarque] = useState("");


  return <>
	<div className="w-full">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
		<div className="flex justify-around w-full items-center bg-blue h-[80px] p-0">
			{/* <select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Catégorie</option>
			</select> */}
			<SelectorComp value={category} setValue={setCategory} label="Par Catégorie" options={categories}    />
			<Image src={arrow as StaticImageData} alt="arrow" width={150} height={50} />
			{/* <select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Métal</option>
				
			</select> */}
			<SelectorComp value={metal} setValue={setMetal} label="Par Métal" options={categories}    />

			<Image src={arrow as StaticImageData} alt="arrow" width={150} height={50} />
			{/* <select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Type</option>
			</select> */}
			<SelectorComp value={type} setValue={setType} label="Par Type" options={categories}    />

			<Image src={arrow as StaticImageData} alt="arrow" width={150} height={50} />
			{/* <select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Marque</option>
			</select> */}
			<SelectorComp value={marque} setValue={setMarque} label="Par Marque" options={categories}    />

			

		</div>
		<div className='h-[80px] bg-red text-white cursor-pointer rounded-r-[50px]'>
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