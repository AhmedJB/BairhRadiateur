import Image from "next/image";
import { Fragment } from "react";

import styles from "../../../styles/modular/InputStyles/Input.module.css"


import Checkbox from '@mui/material/Checkbox';



export default function InputField(props : any){

	const  checkStyle = {
		color: "#F20716",
		'&.Mui-checked': {
		  color: "#F20716",
		},
	  }
	const html = <Fragment>
		{!props.checkbox  && <div className={styles.InputContainer + " " + (props.disabled ? styles.disabled : '')}>
			{ (props.image || props.placeholder) && <div className="flex items-center h-[20px]">
			
				{props.image && <span className={styles.IconContainer + (props.notCenter ? " self-start" : "")}> <Image alt="alt-quote" src={props.image} layout="fill" objectFit="fill"></Image>
				
				</span> }

				{
					props.placeholder && <h3 className="text-darkGray font-medium">{props.placeholder}</h3>
				}
					 
				</div>}
			
				{ !props.textarea  && <input disabled={props.disabled ? true : false} defaultValue={props.defaultValue ? props.defaultValue : ""} className={styles.InputField + " xl:text-xl lg:text-xl md:text-base text-sm sm:text-sm xl:placeholder:text-xl lg:placeholder:text-xl md:placeholder:text-base placeholder:text-sm sm:placeholder:text-sm  "}  type={props.type}  id={props.id} /> }

				{ props.textarea && <textarea className={styles.Area} disabled={props.disabled}  id={props.id}></textarea> }
				
				
			</div>}
		

			{ props.checkbox && <Checkbox
        
        checked={props.checked}
		onChange = { (e,v) => props.setChecked(v)}
        sx={props.checkstyle ? props.checkstyle : checkStyle}
      /> }
	</Fragment>


	return html;


}