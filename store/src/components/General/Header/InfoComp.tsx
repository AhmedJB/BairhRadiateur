import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'



type Props = {
	icon : IconType,
	title : string,
	content : string | undefined,
	show : boolean,
	link? : string,
	clickable? : boolean
}

const InfoComp = (props: Props) => {
  return (
      <div className={`${!props.show ? "lg:flex" : "flex"} ${!props.show ? "hidden" : ""} items-center mx-6 ${props.show ? "my-3" : ""} ${props.clickable ? "border-2 rounded-lg p-3" : ""} `}>
          {props.link && <Link href={props.link} legacyBehavior>
          <props.icon className='text-4xl mx-2' /></Link> }
          {
              !props.link && <props.icon className={`text-4xl mx-2 ${props.clickable ? " hover:text-blue" : ""}`} />
          }
          
          <div className='flex flex-col justify-center'>
              <span className='text-sm text-gray font-normal'>{props.title}</span>
              <h3 className='text-mainBlack font-semibold'>{props.content}</h3>
          </div>
      </div>
  );
}

export default InfoComp;