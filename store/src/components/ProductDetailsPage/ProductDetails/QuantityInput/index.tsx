import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type Props =  {
    quantity : number;
    updateQuantity : (step : number) => void
}

const QuantityInput = ({quantity,updateQuantity} :Props) => {

  

  return (
    <div className="flex items-center w-full sm:w-fit justify-center sm:justify-start">
      <div className='border border-mainBlack flex items-center justify-between p-3 lg:w-[250px] w-[298px] mx-3 sm:mx-0 '>
      <button
        className="px-2 py-1 rounded-md bg-blue-500 text-mainBlack"
        onClick={() => updateQuantity(-1)}
      >
        <FaMinus />
      </button>
      <p className="w-16 mx-2 text-center bg-mainDark  text-mainBlack ">
        {quantity}
      </p>

      <button
        className="px-2 py-1 rounded-md bg-blue-500 text-mainBlack"
        onClick={() => updateQuantity(1)}
      >
        <FaPlus />
      </button>

      </div>
      
    </div>
  );
};

export default QuantityInput;