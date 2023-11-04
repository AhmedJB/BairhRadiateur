import React, { useState } from 'react';
import styles from '../../../styles/modular/HeartCheckBox/HeartCheckBox.module.css';
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import {FaHeart , FaRegHeart} from "react-icons/fa"
import { api } from '../../../server/utils/api';

type Props = {
  size ?: string,
  color ?: string,
  className ?: string,
  pid  : string,
}

const HeartCheckboxComponent = ({size,color,className,pid} : Props) => {

  const {data : checkedResp , status,refetch} = api.authHandler.checkFavorite.useQuery({
    pid
  })

  const [checked, setChecked] = useState(false);

  const utils = api.useContext();
  
  const FavoriteMutation = api.authHandler.handleFavorite.useMutation( {
    onSuccess : (resp ) => {
      console.log("updated")
      refetch();
      utils.authHandler.getFavorites.invalidate().catch(e => console.log("error is in getFavorites : " + e))
    },
    onError : (data) => {

    }
  })


  const handleCheckboxChange = () => {
    //setChecked(!checked);
    console.log("updating now")
    FavoriteMutation.mutate({
      pid
    })
  };

  return (
    <>
    {
      status === "success" && <label className={`${styles.container as string} ${className as string}`}>
      <input
        checked={checkedResp.status}
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      {
        checkedResp.status ? <FaHeart className={`${styles.checkmark as string} ${size as string} text-red` } /> : <FaRegHeart className={`${styles.checkmark as string} ${size as string} ${color ? color  : " text-black"}`} />

      }
    </label>
    }
    </>
       
    
  );
};

export default HeartCheckboxComponent;

