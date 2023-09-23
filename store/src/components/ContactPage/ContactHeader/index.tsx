import React from 'react'
import ContactGroup from "../../../assets/logIcons/contactgroup.svg";
import Image, { StaticImageData } from "next/image";

type Props = {}

function ContactHeader({}: Props) {

	return <>
		<div className="flex flex-wrap-reverse items-center">
        <div className=" flex w-full flex-col  items-center justify-center p-3 md:w-7/12 lg:w-7/12 xl:w-7/12">
          <h1 className="m-5 text-center text-3xl font-medium text-[#F20716] md:text-4xl lg:text-5xl xl:text-6xl ">
            Ecrire à un agent
          </h1>
          <p className="text-center text-xl font-medium text-[#180002] md:text-2xl lg:text-3xl  xl:text-4xl">
            {"Demandez l'aide d'un agent de notre service client"}
          </p>
        </div>

        <div className=" flex w-full items-center  justify-center md:w-5/12 lg:w-5/12 xl:w-5/12">
          <div className="relative h-[400px] w-[100%]">
            <Image
              src={ContactGroup as StaticImageData}
              alt={"conctact image"}
              fill={true}
            />
          </div>
        </div>
      </div>
		</>


}

export default ContactHeader