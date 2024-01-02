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
    title ?: string
}

function Products({products,title}: Props) {

    const [value,setValue] = useState("");
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
            splitHandler(products);
        }
        
    },[products])

    
    const handleFilter = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  
    
 


  return <>
    <div className="w-full h-full my-11">
        <div className="w-full xl:container my-4 flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-darkGray uppercase">{title ? title : "Nos Produits"}</h1>
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
		
            {
               filtered && filtered[index]  && <>
               <div className='mx-auto w-full xl:container  flex items-center gap-[0.65rem] flex-wrap'>
                {(filtered[index] as generalProuctInfotT[]).map((e,i) => {
                if (e.info && e.serverInfo){
                    return <ProductCard key={`product-${e.info.id}`} image={e.serverInfo.images.length > 0 ? formatImage(e.serverInfo.images[0]?.image) : ""} title={e.info.name} subtitle={""} rating={4} price={e.info.price} id={e.info.id} pid={e.info.id} />
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
                    <div className='h-[87%] w-full flex flex-col justify-center'>
                        <div className="flex flex-col items-center gap-3 -translate-y-1/2">
                            <h1 className="text-5xl text-mainBlack font-bold uppercase">Pas de produits</h1>
                            <BsExclamationCircle className="text-[10rem]" />
                        </div>
                    </div>
                </>
            }

        
    </div>
  </>
}

export default Products