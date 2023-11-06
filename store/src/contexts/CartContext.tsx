import {ReactNode, createContext,useState} from "react"
import { CartContextT, OrderData } from "../types/ContextTypes";


type Props = {
    children : ReactNode
}


export const CartContext = createContext<CartContextT | null>(null);

export const CartProvider = ({children} : Props) => {
    const [cartData,setCartData] = useState<OrderData[] | null>(null);
    const [open,setOpen] = useState(false);
    return <CartContext.Provider value={{ cartData, open,setCartData,setOpen  }}>
        {children}
    </CartContext.Provider>
} 