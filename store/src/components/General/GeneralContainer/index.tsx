import React , {ReactNode,useContext, useEffect} from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { CartContextT } from '../../../types/ContextTypes';

type Props = {
    children : ReactNode
}

function GeneralContainer({children}: Props) {

    const cartState = useContext(CartContext);

    useEffect(() => {
      if (cartState){
        if (cartState.open){
          document.body.style.cssText = "overflow: hidden;";
        }else{
          document.body.style.cssText = "";
        }
      }
    },[cartState])

  return <div className="w-full h-full">
    {children}
  </div>
}

export default GeneralContainer