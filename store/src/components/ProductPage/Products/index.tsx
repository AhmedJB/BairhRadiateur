import React,{useEffect, useState} from 'react'
import testImage from "../../../assets/home/radiator2.png"
import ProductCard from './ProductCard'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { generalProuctInfotT } from '../../../types/general';
import { formatImage } from '../../../Helpers/helpers';
import { BsExclamationCircle } from "react-icons/bs";




type Props = {
    products : generalProuctInfotT[],
    title ?: string,
    setOpen? : (v:React.SetStateAction<boolean>) => void
}

function Products({products,title,setOpen}: Props) {

	
    const [value,setValue] = useState("default");
    const [filtered,setFiltered] = useState<generalProuctInfotT[][]>([]);
    const [index,setIndex] = useState(0);

    const productLimit = 15;


    const splitHandler = (prods : generalProuctInfotT[]) => {
        let final : generalProuctInfotT[][] = []
        let temp : generalProuctInfotT[] = [];
        for (let i = 0 ; i < prods.length ; i++) {

                if (temp.length >= productLimit) {
                    final.push(temp);
                    temp = [prods[i] as generalProuctInfotT] 
                }else {
                    temp.push(prods[i] as generalProuctInfotT)
                }
                
        }

        if (temp.length > 0) {
            final.push(temp);
        }
        setFiltered(final)
    }


    useEffect(() => {
        if (products){
            console.log(products)
            splitHandler(products);
        }
        
    },[products])

    useEffect(() => {
        if (products){
            if (value !== "default"){
                const temp = [...products].sort((a,b) => {
                if (a.info?.price && b.info?.price){
                    if (value === "croissant"){
                        return a.info.price > b.info.price ? 1 : -1;
                    }else{
                        return a.info.price < b.info.price ? 1 : -1;
                    }
                }
                return 1;
                
            })
                splitHandler(temp);
            }else{
                splitHandler(products)
            }
        }
        
        

    },[value])

    
    const handleFilter = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  
    
 


  return <>
    <div className="w-full h-full my-11">
        <div className="w-full xl:container my-4 sm:flex sm:flex-row flex flex-col items-center justify-between">
            <h1 className="text-3xl font-semibold text-darkGray uppercase mb-3">{title ? title : "Nos Produits"}</h1>
            <div className="sm:flex-row flex items-center flex-col-reverse  gap-3">
                {
                    setOpen &&<button className="p-4 sm:w-[150px] w-[250px] xl:hidden bg-blue text-white font-semibold "
                    onClick={() => {
                        setOpen(true);
                    }}
                    >Filtrer</button>
                }
                
            <Box sx={{ minWidth: 250 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tri...</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="default filter"
                    onChange={handleFilter}
                    >
                    <MenuItem value={"default"}>Tri par défaut</MenuItem>
                    <MenuItem value={"croissant"}>Tri par Prix Croissant</MenuItem>
                    <MenuItem value={"desc"}>Tri par Prix Decroissant</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </div>
             
        </div>
		
            {
               filtered && filtered[index]  && <>
               <div className='mx-auto w-full xl:container  sm:flex sm:flex-row flex flex-col items-center gap-[0.65rem] flex-wrap'>
                {(filtered[index] as generalProuctInfotT[]).map((e,i) => {
                if (e.info && e.serverInfo){
                    return <ProductCard products={products} key={`product-${e.info.id}`} image={e.serverInfo.images.length > 0 ? formatImage(e.serverInfo.images[0]?.image) : ""} title={e.info.name} subtitle={""} rating={4} price={e.info.price} id={e.info.id} pid={e.info.id} />
                }
                    
                })}
                <div className="flex items-center mt-10 w-full gap-3">
                {
                    (new Array(filtered.length)).fill(0).map((e,i) => <span className={`w-[40px] aspect-square ${index === i ? "bg-blue text-white" : "bg-white text-black"} font-semibold smooth-shadow-1  grid place-items-center rounded-xl cursor-pointer transition-transform hover:scale-110 `} onClick={() => {
                        setIndex(i);
                    }}>{i+1}</span>)
                }
                </div>
                </div>
               </> 
            }

            {
                (!filtered || !filtered[index] || (filtered[index] as generalProuctInfotT[]).length === 0 ) && <>
                    <div className='sm:h-[87%] w-full flex flex-col justify-center'>
                        <div className="flex flex-col items-center gap-3">
                            <h1 className="md:text-5xl text-xl text-mainBlack font-bold uppercase">Pas de produits</h1>
                            <BsExclamationCircle className="md:text-[10rem] text-[7rem]" />
                        </div>
                    </div>
                </>
            }

        
    </div>
  </>
}

export default Products