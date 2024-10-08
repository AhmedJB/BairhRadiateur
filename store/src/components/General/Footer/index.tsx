import Image, { StaticImageData } from 'next/image'
import React from 'react'
import logo from "../../../assets/general/FooterLogo.svg"
import {HiLocationMarker} from "react-icons/hi"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import Link from 'next/link'
import liv from '../../../assets/general/liv.png'

type Props = {}

function Footer({}: Props) {
  return (
   <div className="w-full mt-6 bg-darkGray ">
       <div className='mx-auto w-full xl:container p-4 flex flex-col '>
       <div className="relative w-[450px] max-w-full h-[80px] my-2">
               <Image src={logo as StaticImageData}  alt={"logo"} fill={true} />
           </div>

       <div className="w-full flex flex-wrap justify-center ">
           <p className="text-gray text-justify  text-lg font-medium w-full md:w-6/12 md:border-r-2 border-transparent  p-6 min-w-full">
               {`Bairh Radiateur, basée à Fès, au Maroc, bénéficie de 10 ans d'expérience dans la vente et la réparation de radiateurs pour voitures et poids lourds. Importateur de plus de 500 modèles de Chine, elle assure une large couverture des besoins.`}

                           </p>
            <div className="md:w-3/12 w-full px-14 flex flex-col xl:border-r-2 border-gray min-h-[230px] min-w-[250px]">
             <h1 className=' text-white font-semibold'>Mon Compte</h1>
             <ul className='list-none text-gray'>
                <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Mon Profil</li>
                <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Liste des souhaits</li>
                <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">{"FAQ's"}</li>


            </ul>
           </div>
           
            <div className="md:w-3/12 w-full px-14 flex flex-col min-h-[230px] min-w-[300px]">
             <h1 className=' text-white font-semibold'>Liens Utiles</h1>
             <ul className='list-none text-gray'>
                <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">A propos</li>
               <Link href="/contact" legacyBehavior><li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Nous Contacter</li></Link> 
                <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Politique de confidentialité</li>
               <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">{"Conditions d'utilisation"} </li>
                <li className="font-medium my-3 transition-colors hover:text-red cursor-pointer">Sécurité</li>




            </ul>
           </div>



      </div>

     <div className="flex lg:flex-row flex-col-reverse lg:items-start w-full lg:justify-between gap-3 lg:gap-0">
     <div className="flex flex-col px-2 lg:px-10">
       <h1 className="font-bold lg:text-xl text-base text-white uppercase tracking-widest"> Questions?</h1>
       <Link href='tel:+212666364625'><h1 className="font-bold lg:text-3xl text-lg text-blue">+212 6 66 36 46 25</h1></Link>
       <Link href='mailto:bairhradiator@gmail.com'><h1 className="font-bold lg:text-3xl text-lg text-blue">bairhradiator@gmail.com</h1></Link>


      </div>
      <div className='flex items-center '>
                {/* <div className="relative w-[32px] h-[32px]">
                    <Image src={liv} fill={true} alt="liv icon" />			 </div> */}
                    <div className="flex flex-col justify-center lg:px-4 px-2">
                        <h2 className="lg:text-xl text-base font-semibold tracking-widest text-white my-0">LIVRAISON GRATUITE</h2>
                        <p  className='text-sm text-gray -my-1'>Les jours ouvrables - Achats de 900 dh ou plus</p>
                    </div>
            </div>
     </div>
      
      

      <div className="my-7 w-full h-[2px] bg-gray" />

      <div className="w-full flex items-center justify-between">
       <div className="flex items-center">
         <HiLocationMarker className="text-2xl mr-3 text-gray"></HiLocationMarker>
         <p className='lg:text-lg text-base font-semibold text-gray'>10 lot baraka wiam bensouda mag, Fes 30000</p>
       </div>
       

       <div className="flex items-center cursor-pointer">
        <a href={`https://www.facebook.com/bairhradiator/`}>
         <BsFacebook className="text-xl transition-colors hover:text-blue mr-4 font-semibold text-gray"></BsFacebook>
        </a>
        <a href={`https://www.instagram.com/bairhradiator/`}>
         <AiOutlineInstagram className="text-2xl transition-colors hover:text-blue font-semibold text-gray" />
        </a>
       </div>

      </div>


       </div>


   </div>
  );
}

export default Footer