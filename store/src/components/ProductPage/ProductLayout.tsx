import { NextComponentType } from 'next';
import React, { useEffect, useState } from 'react'
import styles from "../../styles/modular/ProductStyles/index.module.css"
import Content from './Content';
import Sidebar from './Sidebar';
import BreadCrumbs from '../General/BreadCrumbs';
import { api } from '../../server/utils/api';
import { AirlineSeatReclineNormalSharp } from '@mui/icons-material';
import { generalProuctInfotT } from '../../types/general';
import { Mark, Tube } from '@prisma/client';
import { useRouter } from 'next/router';

type Props = {
}

const ProductLayout = (props: Props) => {

	const {data : productData,status} = api.authHandler.fetchProducts.useQuery();
	const [filtered ,setFiltered] = useState<generalProuctInfotT[]>();
	// categories 
	const [categories,setCategories]  = useState([] as string[]);
	const [catList,setCatList] = useState<string[]>([])
	// Marque
	const [marks,setMarks] = useState([] as string[]);
	const [markList,setMarkList] = useState(["Mark1", "Mark2", "Mark3"])
	// Tube
	const [tubs,setTubs] = useState([] as string[]);
	const [tubList,setTubeList] = useState(["Tube1","Tube2","Tube3"])
	// Price Range
	const [priceRange,setPriceRange] = useState([0,20]) 

	// loader
	const [loading,setLoading] = useState(true);

	const router = useRouter();

	useEffect(() => {
		if (router.isReady  ){
			let temp = [...tubs];
			temp.push("tub-"+router.query.tube as string)
			setTubs(temp);
			setLoading(false);
		}
	},[router.isReady])

	const {data : marksd,status : markStatus,refetch : markRefetch}  = api.authHandler.getMarks.useQuery();
	const {data : tubesd,status : tubeStatus,refetch  : tubeRefetch} = api.authHandler.getTubes.useQuery();




	

	useEffect(() => {
		if (markStatus === "success") {
			setMarkList(marksd.map(e => e.name));
		}
	},[markStatus,marksd])

	useEffect(() => {
		if (tubeStatus === "success") {
			setTubeList(tubesd.map(e => e.name))
		}
	},[tubeStatus,tubesd])

	const getIdByName = (data : Mark[] | Tube[],name : string,prefix : string) => {
		const r = data.filter(e =>prefix + e.name === name)
		if (r.length > 0){
			return r[0]?.id
		}else{
			return undefined
		}
	}


	const handleFilter = () => {
		if (productData ){
			const temp = (productData as generalProuctInfotT[]).filter(e => {
				const catCondition = categories.includes("cat-"+e.serverInfo.ptype) || categories.length === 0;
				const minRange = Math.floor(100000 * ( (priceRange[0] ?? 0) / 100))
				const maxRange = Math.ceil(100000 * ( (priceRange[1] ?? 0) / 100 ))
				const priceCondition = e.info   && e.info.price >= minRange && e.info.price <= maxRange
				const convertedMarks = marks.map(e => getIdByName(marksd as Mark[],e,"mark-"))
				const convertedTubs = tubs.map(e => getIdByName(tubesd as Tube[],e,"tub-"))
				const marksCondtion = convertedMarks.includes(e.info?.markId as string) || marks.length === 0;
				const tubsCondition = convertedTubs.includes(e.info?.tubeId as string) || tubs.length === 0;
				return catCondition && priceCondition && marksCondtion && tubsCondition
			}   )

			setFiltered(temp);

		}
		
	}

	useEffect(() => {
		handleFilter();
	},[categories,priceRange,tubs,marks])

    useEffect(() => {
        if  ( status === "success"){
            const temp = productData as generalProuctInfotT[];
			if (temp){
				const cats : string[] = [];
				temp.forEach((e,i)=> {
					if (!cats.includes(e.serverInfo.ptype)){
						cats.push(e.serverInfo.ptype);
					}
				})
				setCatList(cats)
				handleFilter();

			}
            
        }
    },[productData])


  return (<>
	{
		!loading && <>
		<div className="w-full ">
		<div className={`mx-auto w-full xl:container flex flex-col`} >
			<BreadCrumbs  
				path = {[
					{
						name : "Products",
						url : "#"
					}
				]}
			/>
			<div className={`${styles.gridContainer as string} `}>
				<div className={`${styles.sidebar as string} `}>
					<Sidebar 
						catList={catList}
						markList={markList}
						tubList={tubList}
						categories={categories}
						marks={marks}
						tubs={tubs}
						priceRange={priceRange}
						setCategories={setCategories}
						setMarks={setMarks}
						setTubs={setTubs}
						setPriceRange={setPriceRange}
					
					/>
				</div>
				<div className={`${styles.content as string}  `}>
					<Content products={filtered as generalProuctInfotT[]} />

				</div>

			</div>

		</div>
	</div>
		</>
	}
	
  </>
	
  )
}

export default ProductLayout;