import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Checkbox } from '@mui/material';
import Slider from '@mui/material/Slider';

type Props = {
  catList : string[],
  markList: string[],
  tubList : string[],
  categories: string[],
  marks: string[],
  tubs : string[],
  priceRange : number[],
  setCategories : any,
  setMarks: any,
  setTubs : any,
  setPriceRange: any,

}

const Sidebar = ({catList,markList,tubList,categories,marks,tubs,priceRange,setCategories,setMarks,setTubs,setPriceRange}: Props) => {

  // categories 
  //const [categories,setCategories]  = useState([] as string[]);
  //const [catList,setCatList] = useState(["testCat1" , "testCat2" , "testCat3"])
  // Marque
  //const [marks,setMarks] = useState([] as string[]);
  //const [markList,setMarkList] = useState(["Mark1", "Mark2", "Mark3"])
  // Tube
  //const [tubs,setTubs] = useState([] as string[]);
  //const [tubList,setTubeList] = useState(["Tube1","Tube2","Tube3"])
  // Price Range
  //const [priceRange,setPriceRange] = useState([0,20])
  
  // handle Price changes
  
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  function valuetext(value: number) {
  return `${value}DH`;
}

  const maxPrice = 100000;


  // handle Checkbox changes
  
  const removeElemFromState = (arr: string[],setState : React.Dispatch<React.SetStateAction<string[]>>,id : string)  => {
     let index = arr.indexOf(id);
     let new_array = [...arr]
     new_array.splice(index,1)
     setState(new_array)
  }


  const appendToState = (arr: string[],setState : React.Dispatch<React.SetStateAction<string[]>>,id : string) => {
    let newArray = [...arr,id]
    setState(newArray)
  }


  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let check_id = event.target.id;
      let prefix = check_id.split("-")[0];
      let checked = event.target.checked;
      switch(prefix){
         case  "cat" : 
          if (checked) { 
            appendToState(categories,setCategories,event.target.id)
            break;
          }else {
            removeElemFromState(categories,setCategories,event.target.id)
            break;
          }
        case  "mark" : 
          if (checked) { 
            appendToState(marks,setMarks,event.target.id)
            break;
          }else {
            removeElemFromState(marks,setMarks,event.target.id)
            break;
          }
        case  "tub" : 
          if (checked) { 
            appendToState(tubs,setTubs,event.target.id)
            break;
          }else {
            removeElemFromState(tubs,setTubs,event.target.id)
            break;
          }
        


       
        default:
          console.log("not a recognized checkbox")
          break;
           
            

      }   
  
  
  
  };





  return (
    <div className="flex flex-col p-8">
      
      <h1 className="text-xl font-semibold text-mainBlack uppercase mt-3">Categories</h1>
      <hr className='w-full h-[4px] text-mainBlack my-3' />


      {
        catList.map((e,i) => {
          return <div key={`cat-${e}`} className="flex items-center justify-between pl-3">
        <h4 className="text-lg font-medium text-darkGray ">{e}</h4>
        <Checkbox
          checked={categories.includes(`cat-${e}`)}
          onChange={handleCheckBoxChange}
          id={`cat-${e}`}
          />
      </div> 
        })
      }
       
      <h1 className="text-xl font-semibold text-mainBlack uppercase mt-3">Marque</h1>
      <hr className='w-full h-[4px] text-mainBlack my-3' />


      {
        markList.map((e,i) => {
          return <div key={`mark-${e}`} className="flex items-center justify-between pl-3">
        <h4 className="text-lg font-medium text-darkGray ">{e}</h4>
        <Checkbox
          checked={marks.includes(`mark-${e}`)}
          onChange={handleCheckBoxChange}
          id={`mark-${e}`}
          />
      </div> 
        })
      }
      

      <h1 className="text-xl font-semibold text-mainBlack uppercase mt-3">Tube</h1>
      <hr className='w-full h-[4px] text-mainBlack my-3' />


      {
        tubList.map((e,i) => {
          return <div key={`tub-${e}`} className="flex items-center justify-between pl-3">
        <h4 className="text-lg font-medium text-darkGray ">{e}</h4>
        <Checkbox
          checked={tubs.includes(`tub-${e}`)}
          onChange={handleCheckBoxChange}
          id={`tub-${e}`}
          />
      </div> 
        })
      }

      <h1 className="text-xl font-semibold text-mainBlack uppercase mt-3">Prix</h1>
      <hr className='w-full h-[4px] text-mainBlack my-3' />


      <Slider
        getAriaLabel={() => 'Price Range'}
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="off"
        getAriaValueText={valuetext}
        
      />
      
      {
        priceRange && <>
<h3 className="text-lg font-medium text-darkGray">
        Prix : {Math.floor(maxPrice * ( (priceRange[0] ?? 0) / 100))}DH - {Math.ceil(maxPrice * ( (priceRange[1] ?? 0) / 100 ))}DH
      </h3>


        </>
      }

      
      

    </div>



    )
}

export default Sidebar