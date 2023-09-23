import React, { useState } from 'react';
import styles from '../../../styles/modular/HeartCheckBox/HeartCheckBox.module.css';
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import {FaHeart , FaRegHeart} from "react-icons/fa"

type Props = {
  size ?: string,
  color ?: string,
  className ?: string
}

const HeartCheckboxComponent = ({size,color,className} : Props) => {

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
       <label className={`${styles.container as string} ${className as string}`}>
        <input
          checked={checked}
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        {
          checked ? <FaHeart className={`${styles.checkmark as string} ${size as string} text-red` } /> : <FaRegHeart className={`${styles.checkmark as string} ${size as string} ${color ? color  : " text-black"}`} />

        }
      </label>
    
  );
};

export default HeartCheckboxComponent;

