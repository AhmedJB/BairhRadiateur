import React, { useState } from 'react'
import logo from "../../../assets/general/LOGO.svg"
import Image from 'next/image'
import {RxHamburgerMenu} from "react-icons/rx"
import { signOut } from 'next-auth/react'
import Link from 'next/link'


type Props = {}

type linksType = {
	name : string;
	link :  string;
}

function AdminNav({}: Props) {

	const [open,setOpen] = useState(false)

	const logout = async () => {
		console.log("signin out")
		signOut({
			redirect : false
		});
	}

  const links : linksType[] = [
	{
		name : "Dashboard",
		link : "/adminpan/dashboard"
	},{
		name : "Clients",
		link : "/adminpan/clients"
	},
	{
		name : "Stock",
		link : "/adminpan/stock"
	},
	{
		name : "Importer",
		link : "/adminpan/importstock"
	}
  ]
   

  

  return <div className={`w-full h-[100px] bg-mainBlack flex items-center justify-between p-3 `}>
	<div className="relative w-[300px] h-[80px]">
				<Image src={logo}  alt={"logo"} fill={true} />
 	</div>

	<div className='relative h-full grid place-items-center'>
	<RxHamburgerMenu onClick={() => setOpen(!open)} className={`text-white text-3xl cursor-pointer mr-4`} />
	
	{
		open && <div className="absolute -bottom-[0px] bg-white z-20 rounded-[3px] px-1 py-3  text-white translate-y-full min-w-[300px] right-1 before:absolute before:z-10 before:top-0 before:right-5 before:-translate-y-1/2  before:rotate-45 before:bg-white before:w-[10px] before:h-[10px] smooth-shadow-1 ">
		<ul className="list-none">
  			{
				links.map((e,i) => {
					return <Link href={e.link}><li key={`admin-link-${i}`} className='p-3 text-mainBlack font-medium md:text-xl text-lg w-full transition-all hover:bg-blue hover:text-white cursor-pointer'>{e.name}</li></Link> 
				})
			}

<li onClick={logout} className='p-3 text-mainBlack font-medium md:text-xl text-lg w-full transition-all hover:bg-blue hover:text-white cursor-pointer'>Se déconnecter</li>
		</ul>
	</div>
	}
	
	</div>


  </div>
}

export default AdminNav