import React from 'react'
import Image from "next/image"
import logo from '../../../assets/general/LOGO.svg'

import {BiPhoneCall} from "react-icons/bi"
import {FaRegUser} from "react-icons/fa"
import {AiOutlineHeart,AiOutlinePoweroff} from "react-icons/ai";

import InfoComp from './InfoComp'


type Props = {}

const Header = (props: Props) => {
  return <>
	<div className="w-full">
		<div className="mx-auto w-full xl:container flex items-center justify-between px-4">
			<div className="relative w-[400px] h-[100px]">
				<Image src={logo}  alt={"logo"} fill={true} />
 			</div>

			<div className="flex items-center">
				<InfoComp icon={BiPhoneCall} title={"Besoin d'aide?"} content={"+212 6 61 247 589"} />
				<InfoComp icon={FaRegUser} title={"Bonjour!"} content={"Mon compte"} />
				<div className='flex gap-3 items-center ml-4'>
					<AiOutlineHeart className='text-4xl text-mainBlack font-semibold'/>
					<AiOutlinePoweroff className='text-4xl text-mainBlack font-semibold'/>
				</div>
			</div>

		</div>

	</div>
  
  </>
}


export default Header;