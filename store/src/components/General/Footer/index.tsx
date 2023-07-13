import Image from 'next/image'
import React from 'react'
import logo from "../../../assets/general/whiteLogo.svg"
import {HiLocationMarker} from "react-icons/hi"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import Link from 'next/link'

type Props = {}

function Footer({}: Props) {
  return (
    <div className="w-full mt-6 bg-darkGray ">
		<div className='mx-auto w-full xl:container p-4 flex flex-col '>
        <div className="relative w-[450px] h-[80px] my-2">
				<Image src={logo}  alt={"logo"} fill={true} />
 			</div>

        <div className="w-full flex flex-wrap ">
            <p className="text-gray text-justify  text-lg font-medium w-full md:w-6/12 md:border-r-2 border-gray  p-6 min-h-[230px] min-w-[500px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

                            </p>
             <div className="md:w-3/12 w-full px-14 flex flex-col xl:border-r-2 border-gray min-h-[230px] min-w-[250px]">
              <h1 className=' text-white font-semibold'>Mon Compte</h1>
              <ul className='list-none text-gray'>
                 <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Mon Profil</li>
                 <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Liste des souhaits</li>
                 <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">FAQ's</li>


             </ul>
            </div>
            
             <div className="md:w-3/12 w-full px-14 flex flex-col min-h-[230px] min-w-[300px]">
              <h1 className=' text-white font-semibold'>Liens Utiles</h1>
              <ul className='list-none text-gray'>
                 <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">A propos</li>
                <Link href="/contact"><li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Nous Contacter</li></Link> 
                 <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Politique de confidentialité</li>
                <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Conditions d'utilisation </li>
                 <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Sécurité</li>




             </ul>
            </div>



       </div>

       <div className="flex flex-col px-10">
        <h1 className="font-bold text-xl text-white uppercase"> Questions?</h1>
        <h1 className="font-bold text-3xl text-blue">+212 6 61 103 924</h1>
        <h1 className="font-bold text-3xl text-blue">bairhradiator@gmail.com</h1>


       </div>

       <div className="my-7 w-full h-[2px] bg-gray" />

       <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <HiLocationMarker className="text-2xl mr-3 text-gray"></HiLocationMarker>
          <p className='text-lg font-semibold text-gray'>diam nonumy eirmod tempor invidunt ut labore</p>
        </div>

        <div className="flex items-center cursor-pointer">
          <BsFacebook className="text-xl transition-colors hover:text-blue mr-4 font-semibold text-gray"></BsFacebook>
          <AiOutlineInstagram className="text-2xl transition-colors hover:text-blue font-semibold text-gray" />
        </div>

       </div>


        </div>


    </div>
  )
}

export default Footer