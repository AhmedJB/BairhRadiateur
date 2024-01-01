import React,{useEffect, useState} from 'react'
import arrow from '../../assets/home/WhiteArrow.svg'
import Image, { StaticImageData } from "next/image";
import {BsArrowRightCircle} from 'react-icons/bs'
import SelectorComp from './SelectorComp';

import {categories} from "../../demo/selectDummy";
import { api } from '../../server/utils/api';
import { useRouter } from 'next/router';

type Props = {

}

interface OptionT {
	name : string;
	value : string;
}

const SearchComp = (props: Props) => {
	/* const [category,setCategory] = useState("");
	const [metal,setMetal] = useState(""); */
	const [type,setType] = useState("");
	const [marque,setMarque] = useState("");

	const [typeOptions,setTypeOptions] = useState<OptionT[]>([]);
	const [markOptions,setMarkOptions] = useState<OptionT[]>([]);

	const {data : marksd,status : markStatus,refetch : markRefetch}  = api.authHandler.getMarks.useQuery();
	const {data : tubesd,status : tubeStatus,refetch  : tubeRefetch} = api.authHandler.getTubes.useQuery();

	const router = useRouter();


	useEffect(() => {
		if (markStatus === "success"){
			const res = marksd.map(e => { return {name : e.name,value : e.name} })
			setMarkOptions(res);
		}
	},[markStatus])

	useEffect(() => {
		if (tubeStatus === "success"){
			const res = tubesd.map(e => { return {name : e.name,value : e.name} })
			setTypeOptions(res);
		}
	},[tubeStatus])


	const search = () => {
		let base_url = "/products"
		if (type !== ""){
			base_url += "?tube="+type
		}
		if (marque !== "" ){
			
			base_url += `${type !== "" ? "&&" : "?"}mark=${marque}`
		}
		router.push(base_url)
	}

  return <>
	<div className="w-full">
		<div className='mx-auto w-full xl:container px-4 flex md:flex-row flex-col gap-4 md:gap-0 items-center'>
		<div className="flex md:justify-around md:flex-row flex-col w-full items-center md:bg-blue bg-transparent h-[80px] p-0">
			{/* <select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Catégorie</option>
			</select> */}
			{/* <SelectorComp value={category} setValue={setCategory} label="Par Catégorie" options={categories}    />
			<Image src={arrow as StaticImageData} alt="arrow" width={150} height={50} /> */}
			{/* <select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Métal</option>
				
			</select> */}
			{/* <SelectorComp value={metal} setValue={setMetal} label="Par Métal" options={categories}    />

			<Image src={arrow as StaticImageData} alt="arrow" width={150} height={50} /> */}
			{/* <select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Type</option>
			</select> */}
			<h1 className="text-white font-semibold hidden lg:block xl:text-2xl lg:text-lg">Personnalisez Votre recherche !</h1>
			<div className="md:bg-transparent bg-blue w-full md:w-fit">
			<SelectorComp value={type} setValue={setType} label="Par Tube" options={typeOptions}    />
			</div>
			

			<Image src={arrow as StaticImageData} alt="arrow" width={150} height={50} className="md:block hidden"  />
			{/* <select className=' bg-transparent cursor-pointer outline-none  text-white font-semibold' >
				<option disabled={true} selected={true} value={""}>Par Marque</option>
			</select> */}
			<div className="md:bg-transparent bg-blue w-full md:w-fit ">
			<SelectorComp value={marque} setValue={setMarque} label="Par Marque" options={markOptions}    />
			</div>
			
			

		</div>
		<div className='md:h-[80px] py-3 my-4 w-[100%] flex justify-center md:block md:py-0 md:w-auto md:my-0 items-center bg-red text-white cursor-pointer md:rounded-r-[50px]'>
		<div className='flex h-full  items-center px-6 font-semibold ' onClick={search}>
		<BsArrowRightCircle className="text-[2em] mx-3" />
		Rechercher
	</div>
		</div>
	
	
		</div>
	</div>

	
  </>
}


export default SearchComp;