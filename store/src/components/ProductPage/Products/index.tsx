import React,{useState} from 'react'
import testImage from "../../../assets/home/radiator2.png"
import ProductCard from './ProductCard'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { generalProuctInfotT } from '../../../types/general';
import { formatImage } from '../../../Helpers/helpers';




type Props = {
    products : generalProuctInfotT[]
}

function Products({products}: Props) {

    const [value,setValue] = useState("");
    const handleFilter = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
  
    const testData = [
    {
        image : testImage,
        title : "test Title",
        subtitle : "this is a subtitle",
        rating : 3,
        price : 850
    },
    {
        image : testImage,
        title : "test Title",
        subtitle : "this is a subtitle",
        rating : 3,
        price : 850
    },
    {
        image : testImage,
        title : "test Title",
        subtitle : "this is a subtitle",
        rating : 3,
        price : 850
    },
    {
        image : testImage,
        title : "test Title",
        subtitle : "this is a subtitle",
        rating : 3,
        price : 850
    },
    {
        image : testImage,
        title : "test Title",
        subtitle : "this is a subtitle",
        rating : 3,
        price : 850
    },
    {
        image : testImage,
        title : "test Title",
        subtitle : "this is a subtitle",
        rating : 3,
        price : 850
    }
    ]
 


  return <>
    <div className="w-full my-11">
        <div className="w-full xl:container my-4 flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-darkGray uppercase">Nos Produits</h1>
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
		<div className='mx-auto w-full xl:container  flex items-center gap-[0.65rem] flex-wrap'>
            {
               products && products.map((e,i) => {
                if (e.info && e.serverInfo){
                    return <ProductCard image={e.serverInfo.images.length > 0 ? formatImage(e.serverInfo.images[0]?.image) : ""} title={e.info.name} subtitle={""} rating={4} price={e.info.price} id={e.info.id} />
                }
                    
                })
            }

        </div>
    </div>
  </>
}

export default Products