import React, { useContext } from 'react'
import InfoComp from '../Header/InfoComp';
import { BiPhoneCall } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { AiOutlineHeart, AiOutlinePoweroff, AiOutlineShopping } from 'react-icons/ai';
import { CartContext } from '../../../contexts/CartContext';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import logo from '../../../assets/general/LOGO.svg'


type Props = {
    open : boolean;
    setOpen : any
}

function HeaderSideBar({open,setOpen}: Props) {

    const {status,data} = useSession();
    const close = () => {
        setOpen(false);
    }

	const cartState = useContext(CartContext)


    const handleCartOpen = () => {
		if (cartState) {
			cartState.setOpen(true);
		}
	}


  return <>
    {open && <><div className="fixed h-screen w-screen bg-black opacity-30 z-[9996] top-0" onClick={close}></div>
                <div className={`fixed w-[300px] max-w-[90%] bg-white  h-screen right-0 top-0 z-[9997] md:py-4 py-1 flex flex-col ${open ? "translate-x-0 smooth-shadow-cart" : "translate-x-full"} transition-transform`}>
                
            
                <div className="flex flex-col gap-3 h-full">
                    <div className="flex flex-col flex-1 ">
                    <Link href="/"><div className="relative lg:w-[400px] h-[100px] w-[250px] mx-auto">
				<Image src={logo as StaticImageData}  alt={"logo"} fill={true} />
 			</div></Link>
				
				{
					status === "authenticated" && <>
                    {/* <span className="self-center"> */}
                    <a href="/profile/profile">
                    <InfoComp clickable={true} show={true} icon={FaRegUser} title={"Bonjour!"} content={data?.user?.username} />
                    </a>
                    {/* </span> */}
						
					</>
				}
				
				
                <a href={`/profile/favorite`}>
                <InfoComp clickable={true} show={true} icon={AiOutlineHeart} title={"Liste de"} content={"Favoris"} />
                </a>
                <span onClick={handleCartOpen}>
                <InfoComp clickable={true} show={true} icon={AiOutlineShopping} title={"Liste "} content={"Achat"} />
                </span>
                    </div>
                
                
					{/* <AiOutlineHeart className='text-4xl text-mainBlack font-semibold'/>
					<AiOutlineShopping className='text-4xl text-mainBlack font-semibold transition-transform hover:scale-105' onClick={handleCartOpen}/> */}
					
				

                <InfoComp show={true} icon={BiPhoneCall} title={"Besoin d'aide?"} content={"+212 6 61 247 589"} />
			</div>
        </div>
        </>
        }
  
    </>
}

export default HeaderSideBar