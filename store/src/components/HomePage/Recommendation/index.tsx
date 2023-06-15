import React from 'react'
import testImage from "../../../assets/home/radiator2.png"
import RecommendationCard from './RecommendationCard'

type Props = {}

function Recommendation({}: Props) {
  
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
		<div className='mx-auto w-full xl:container px-4 flex items-center gap-10 flex-wrap'>
            {
                testData.map((e,i) => {
                    return <RecommendationCard key={`recommendation-${i}`} image={e.image} title={e.title} subtitle={e.subtitle} rating={e.rating} price={e.price} />
                })
            }

        </div>
    </div>
  </>
}

export default Recommendation