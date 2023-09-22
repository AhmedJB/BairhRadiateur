import Image, { StaticImageData } from "next/image";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

import styles from "../../../styles/modular/InputStyles/Input.module.css"


import Checkbox from '@mui/material/Checkbox';
import  {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { InputTypeEnum } from "../../../enums";
import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

interface SelectOptionsT {
    name: string;
    value: string;
}

type onChangeType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

type Props = {
	image ?: any,
	id ?: string,
	checkbox ?: boolean,
	textarea ?: boolean,
	hidden ?: boolean,
	disabled ?: boolean,
	notCenter ?: boolean,
	checkstyle ?: any,
    label?: string;
    required?: boolean;
    sublabel?: string;
    name?: string;
    type?: string;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    checked?: boolean;
    setChecked?: Dispatch<SetStateAction<boolean>>;
    switchLabel?: string;
    options?: SelectOptionsT[];
    changeFunc?: (event: React.ChangeEvent<onChangeType>) => any


}

export default function InputField(props : Props){
	

	const [hide,SetHide] = useState(true);

	const  checkStyle = {
		color: "#F20716",
		'&.Mui-checked': {
		  color: "#F20716",
		},
	  }
	const html = <Fragment>
		{!props.checkbox  && <div className={(styles.InputContainer as string )+ " " + (props.disabled ? ( styles.disabled as string ) : '')}>
			{ (props.image || props.placeholder) && <div className="flex items-center h-[20px]">
			
				{props.image && <span className={(styles.IconContainer as string ) + (props.notCenter ? " self-start" : "")}> <Image alt="alt-quote" src={props.image as StaticImageData} layout="fill" objectFit="fill"></Image>
				
				</span> }

				{
					props.placeholder && <h3 className="text-darkGray font-medium">{props.placeholder}</h3>
				}
					 
				</div>}
			
				{ !props.textarea  && <>
				{
					!props.hidden &&  <input disabled={props.disabled ? true : false} defaultValue={props.defaultValue ? props.defaultValue : ""} className={(styles.InputField as string ) + " xl:text-xl lg:text-xl md:text-base text-sm sm:text-sm xl:placeholder:text-xl lg:placeholder:text-xl md:placeholder:text-base placeholder:text-sm sm:placeholder:text-sm  "}  type={!props.hidden && props.type != "password" ? props.type : (hide ? "password" : "text")}  id={props.id} />
				}


				{
					props.hidden && <div  className={`${styles.InputField as string} flex items-center`}>
						<input disabled={props.disabled ? true : false} defaultValue={props.defaultValue ? props.defaultValue : ""} className={" xl:text-xl lg:text-xl md:text-base text-sm sm:text-sm xl:placeholder:text-xl outline-none lg:placeholder:text-xl md:placeholder:text-base placeholder:text-sm sm:placeholder:text-sm grow-[1] "}  type={!props.hidden && props.type != "password" ? props.type : (hide ? "password" : "text")}  id={props.id} />
						<span className="text-2xl font-semibold transition-transform hover:scale-110 cursor-pointer">
							{
								hide && <AiFillEyeInvisible onClick={() => SetHide(!hide)} />
							}

							{
								!hide && <AiFillEye onClick={() => SetHide(!hide)} />
							}

						</span>
					</div>
				}
					
				
				</>
				
				 }

				{ props.textarea && <textarea className={styles.Area} disabled={props.disabled}  id={props.id}></textarea> }
				
				
			</div>}
		

			{ props.checkbox && <Checkbox
        
        checked={props.checked}
		onChange = { (e,v) => (props.setChecked ? props.setChecked(v) as unknown : "")}
        sx={props.checkstyle ? props.checkstyle as SxProps<Theme> : checkStyle}
      /> }
	</Fragment>


	return html;
}