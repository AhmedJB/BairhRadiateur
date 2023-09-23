import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


type Props = {
    rating : number
}

const StarReview = ({rating} : Props) => {


  return (

    <div className="flex items-center">
          <div className="flex items-center gap-1">
            {[...(Array(5) as number[])].map((_, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer text-xl my-2 ${
                  index < Math.floor(rating) ? 'text-yellow' : 'text-mainBlack'
                }`} 
              />
            ))}
          </div>
          <span className={`ml-2 text-mainBlack text-lg font-semibold`}>
            {rating || '0'}
          </span>
        </div>

    
  );
};

export default StarReview;