import React , {useEffect, useState} from 'react'
import Image from "next/image"
import logo from '../../../assets/general/LOGO.svg'

import {BiPhoneCall} from "react-icons/bi"
import {FaRegUser} from "react-icons/fa"
import {AiOutlineHeart,AiOutlinePoweroff} from "react-icons/ai";

import InfoComp from './InfoComp'
import Auth from '../../HomePage/Auth'

import styles from "../../../styles/modular/AuthStyles/Auth.module.css"
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'


type Props = {}

const Header = (props: Props) => {

	const [AuthOpen,setAuthOpen] = useState(false);

	const {status,data} = useSession();
	const router = useRouter();

	const logout = async () => {
		console.log("signin out")
		signOut({
			redirect : false
		});
	}


	useEffect(() => {
		if (status  === "authenticated") {
			if (data?.user?.isAdmin){
				router.push("/adminpan/dashboard")
			}
	  
		  }


	},[status,data])



  return <>
	<Auth handler={[AuthOpen,setAuthOpen]} classes={styles.modalAuth + " xl:p-5 xl:pb-1 md:p-2 md:pb-1 p-1 " } />
	<div className="w-full">
		<div className="mx-auto w-full xl:container flex items-center justify-between px-4">
			<Link href="/"><div className="relative w-[400px] h-[100px]">
				<Image src={logo}  alt={"logo"} fill={true} />
 			</div></Link>

			<div className="flex items-center">
				<InfoComp icon={BiPhoneCall} title={"Besoin d'aide?"} content={"+212 6 61 247 589"} />
				{
					status === "authenticated" && <>
						<InfoComp icon={FaRegUser} title={"Bonjo ur!"} content={data?.user?.username} />
					</>
				}
				
				
				<div className='flex gap-3 items-center ml-4'>
					<AiOutlineHeart className='text-4xl text-mainBlack font-semibold'/>
					<AiOutlinePoweroff onClick={status === "unauthenticated" ?  () => setAuthOpen(true) : logout} className='text-4xl text-mainBlack font-semibold'/>
				</div>
			</div>

		</div>

	</div>
  
  </>
}


export default Header;