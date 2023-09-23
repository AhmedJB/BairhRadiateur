import React,{useState} from 'react'
import InputField from '../../Utils/InputField'


import User from "../../../assets/modalIcons/user.svg";
import Email from "../../../assets/modalIcons/email.svg";
import Phone from "../../../assets/modalIcons/tel.svg";
import QA from "../../../assets/modalIcons/card.svg";
import { StaticImageData } from 'next/image';


type Props = {}

function ContactForm({}: Props) {

	const [checked,setChecked] = useState(false);

	const handleContact =  () => {console.log("contact")};



  return <>
		<div className="mx-auto flex w-full flex-col items-center md:w-8/12 lg:w-8/12 xl:w-8/12">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="w-full md:w-full lg:w-6/12 xl:w-6/12">
            <InputField
              image={User as StaticImageData}
              id="name"
              placeholder={"Prenom"}
              type={"text"}
            />
          </div>

          <div className="w-full md:w-full lg:w-6/12 xl:w-6/12">
            <InputField
              image={false}
              id={"surname"}
              placeholder={"Nom"}
              type={"text"}
            />
          </div>
        </div>

        <InputField
          image={Email as StaticImageData}
          id="email"
          placeholder={"E-mail"}
          type={"email"}
        />

        <InputField
          image={Phone as StaticImageData}
          id="phone"
          placeholder={"Télé"}
          type={"phone"}
        />

        <InputField
          image={QA as StaticImageData}
          id="sujet"
          placeholder={"Sujet"}
          textarea={true}
        />
        

        <button
          onClick={(() => handleContact()) as React.MouseEventHandler<HTMLButtonElement>}
          className=" subBtn m-6 rounded-xl bg-red p-3 text-[#ffffff]"
        >
          Envoyer
        </button>
      </div>
  
  </>
}

export default ContactForm