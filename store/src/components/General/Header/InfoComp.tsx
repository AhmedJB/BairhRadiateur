import React from 'react'
import { IconType } from 'react-icons/lib'



type Props = {
	icon : IconType,
	title : string,
	content : string
}

const InfoComp = (props: Props) => {
  return (
		<div className="flex items-center mx-6">
			<props.icon className='text-4xl mx-2' />
			<div className='flex flex-col justify-center'>
				<span className='text-sm text-gray capitalize font-normal'>{props.title}</span>
				<h3 className='text-mainBlack font-semibold'>{props.content}</h3>
			</div>
		</div>
  )
}

export default InfoComp;