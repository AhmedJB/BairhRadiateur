import React from 'react'
import testImage from "../../../assets/home/demoImage.jpg"
import ProductCard from './ProductCard'



type Props = {}

function Products({}: Props) {
  
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
		<div className='mx-auto w-full xl:container  flex items-center gap-4 flex-wrap'>
            {
                testData.map((e,i) => {
                    return <ProductCard image={e.image} title={e.title} subtitle={e.subtitle} rating={e.rating} price={e.price} />
                })
            }

        </div>
    </div>
  </>
}

export default Products