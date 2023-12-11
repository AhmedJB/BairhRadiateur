import React, { useEffect, useState } from 'react'
import testImage from "../../../../assets/home/radiator2.png"

import { generalProuctInfotT } from '../../../../types/general';
import { formatImage } from '../../../../Helpers/helpers';
import RecommendationCard from '../../../HomePage/Recommendation/RecommendationCard';
import { api } from '../../../../server/utils/api';
import { ImportedProduct } from '@prisma/client';

type Props = {
    mark : string,
    productId : string,
}

function ProductRecommendation({mark, productId}: Props) {
    
    const [recommendations,setRecommendations ] = useState<generalProuctInfotT[]>([]);
    const {data : productData,status} = api.authHandler.getRecommendation.useQuery({mark : mark}); 


    function selectRandomElements(array_param: generalProuctInfotT[], numElements: number = 6): generalProuctInfotT[] {
        const array = [...array_param]
        const selectedElements: generalProuctInfotT[] = [];
        for (let i = 0; i < Math.min(numElements, (productData as generalProuctInfotT[]).length); i++) {
            const randomIndex = Math.floor(Math.random() * array.length);
            const elem = array[randomIndex];
            if (elem && elem.info){
                if ( elem.info.id !== productId ){
                selectedElements.push(elem);
                }
            }
            array.splice(randomIndex, 1);
        }
        return selectedElements;
    }

    useEffect(() => {
        if (status === "success"){
            const randoms = selectRandomElements(productData as generalProuctInfotT[] );
            setRecommendations(randoms);
        }
    },[productData])
 

  return <>
    <div className="w-full my-11">
		<div className='mx-auto w-full xl:container px-4 flex items-center gap-6 flex-wrap'>
            {
                recommendations && recommendations.map((e,i) => {
                    if (e.info && e.serverInfo){
                        return <RecommendationCard key={`recommendation-${i}`} image={e.serverInfo.images.length > 0 ? formatImage(e.serverInfo.images[0]?.image) : ""} title={e.info.name} subtitle={""} rating={4} price={e.info.price} pid={e.info.id} />
                    }
                    
                })
            }

        </div>
    </div>
  </>
}

export default ProductRecommendation