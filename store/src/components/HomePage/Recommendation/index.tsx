import React, { useEffect, useState } from 'react'
import testImage from "../../../assets/home/radiator2.png"
import RecommendationCard from './RecommendationCard'
import { api } from '../../../server/utils/api'
import { generalProuctInfotT } from '../../../types/general'
import { formatImage } from '../../../Helpers/helpers'

type Props = {}

function Recommendation({}: Props) {

    const [recoms,setRecoms] = useState<generalProuctInfotT[]>();
  
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

    const {data : productData,status} = api.authHandler.fetchProducts.useQuery();

    useEffect(() => {
        if  ( status === "success"){
            const temp = productData.slice(0,6) as generalProuctInfotT[];
            setRecoms(temp);
        }
    },[productData])
 

  return <>
    <div className="w-full my-11">
		<div className='mx-auto w-full xl:container px-4 flex items-center gap-6 flex-wrap'>
            {
               recoms && recoms.map((e,i) => {
                if (e.info && e.serverInfo){
                    return <RecommendationCard key={`recommendation-${i}`} image={e.serverInfo.images.length > 0 ? formatImage(e.serverInfo.images[0]?.image) : ""} title={e.info.name} subtitle={""} rating={4} price={e.info.price} />
                }
                    
                })
            }

        </div>
    </div>
  </>
}

export default Recommendation