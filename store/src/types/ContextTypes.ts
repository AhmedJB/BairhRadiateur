import { generalProuctInfotT } from "./general"
import {Dispatch , SetStateAction} from "react"



export interface OrderData  {
    product : generalProuctInfotT,
    quantity : number,
}

export interface CartContextT  {
    cartData : OrderData[] | null,
    open : boolean,  
    setCartData : Dispatch<SetStateAction<OrderData[] | null>>,
    setOpen : Dispatch<SetStateAction<boolean>>
}