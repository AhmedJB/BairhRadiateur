import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React , {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../contexts/CartContext';
import TopHeader from '../General/TopHeader';
import Header from '../General/Header';
import Footer from '../General/Footer';
import ConfirmCart from './ConfirmCart';
import ShippingInfo from './ShippingInfo';

type Props = {}

function ConfirmationPage({}: Props) {
    const session = useSession();
    const router = useRouter();
    const cartData = useContext(CartContext);
    const [show,setShow] = useState(false);

    useEffect(() => {
        if ( (!cartData?.cartData || cartData.cartData.length === 0)){
            router.push("/").catch(() => "")
        }
        setShow(true)
    },[session.status,cartData?.cartData])


  return <>
        {
            show && <>
            <TopHeader/>
            <Header/>
            <div className="w-full ">
		<div className='mx-auto w-full xl:container px-4 flex flex-col'>
			<ConfirmCart />
            <ShippingInfo />
		</div>
	</div>
          
          
            <Footer />
            </>
        }
  </>
}

export default ConfirmationPage