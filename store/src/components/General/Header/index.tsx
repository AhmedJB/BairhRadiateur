import React , {useEffect, useState,useContext} from 'react'
import Image, { StaticImageData } from "next/image"
import logo from '../../../assets/general/LOGO.svg'

import {BiPhoneCall} from "react-icons/bi"
import {FaRegUser} from "react-icons/fa"
import {AiOutlineHeart,AiOutlinePoweroff,AiOutlineShopping} from "react-icons/ai";

import InfoComp from './InfoComp'
import Auth from '../../HomePage/Auth'


import styles from "../../../styles/modular/AuthStyles/Auth.module.css"
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { CartContext } from '../../../contexts/CartContext'
import HeaderSideBar from '../HeaderSideBar'
import { toast } from 'react-toastify'


type Props = {}

const Header = (props: Props) => {

	const [AuthOpen,setAuthOpen] = useState(false);

	const cartState = useContext(CartContext)

	const {status,data} = useSession();
	const [open,setOpen] = useState(false);
	const router = useRouter();

	const logout =  () => {
		
		signOut({
			redirect : false
		}).then(() => {
			toast.success("Deconnecte")
		}).catch(e => console.log(e));
	}


	useEffect(() => {
		if (status  === "authenticated") {
			if (data?.user?.isAdmin){
				router.push("/adminpan/dashboard").catch(e => console.log(e))
			}
	  
		  }


	},[status,data])


 
	const handleCartOpen = () => {
		if (cartState) {
			cartState.setOpen(true);
		}
	}



  return <>
	<Auth handler={[AuthOpen,setAuthOpen]} classes={`${styles.modalAuth as string} xl:p-5 xl:pb-1 md:p-2 md:pb-1 p-1 ` } />
	<div className="w-full">
		
			<div className="mx-auto w-full xl:container flex items-center justify-between px-4 h-[100px]  select-none">
			{!open && <>
			
			
			<Link href="/" legacyBehavior><div className="relative md:w-[400px] h-[100px] w-[180px]">
				<Image src={logo as StaticImageData}  alt={"logo"} fill={true} />
 			</div></Link>

			
			
			<div className="flex items-center">
				<InfoComp show={false} icon={BiPhoneCall} title={"Besoin d'aide?"} content={"+212666364625"} />
				{
					status === "authenticated" && <>
					<Link href="/profile/profile">

                        <InfoComp show={false} icon={FaRegUser} title={"Bonjour!"} content={data?.user?.username} />

                    </Link>
						
					</>
				}
				
				
				<div className='flex gap-3 items-center ml-4 cursor-pointer'>
					<Link href="/profile/favorite">

                        <AiOutlineHeart className='lg:flex hidden text-4xl text-mainBlack font-semibold'/>

                    </Link>
					<AiOutlineShopping className='lg:flex hidden text-4xl text-mainBlack font-semibold transition-transform hover:scale-105' onClick={handleCartOpen}/>
					<AiOutlinePoweroff onClick={status === "unauthenticated" ?  () => setAuthOpen(true) : logout} className='text-4xl text-mainBlack font-semibold'/>
				</div>
				<div className="flex flex-col lg:hidden items-end gap-2 cursor-pointer ml-4" onClick={() => {setOpen(true)}}>
				<hr className="w-[30px] text-black font-semibold" />
				<hr className="w-[25px] text-black font-semibold" />
				<hr className="w-[20px] text-black font-semibold" />
			</div>
			</div>
			</>

		
		}
		</div>
		

	</div>
	<HeaderSideBar open={open} setOpen={setOpen} />
  </>;
}


export default Header;