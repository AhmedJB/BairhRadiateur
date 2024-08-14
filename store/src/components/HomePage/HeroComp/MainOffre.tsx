import React from 'react'
import radiator from "../../../assets/home/radiator.png"
import Image from "next/image"
import Link from 'next/link'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
  } from "../../ui/carousel"
import Banner from '../../../assets/general/banner.png'
import Autoplay from "embla-carousel-autoplay"
import AutoHeight from 'embla-carousel-auto-height'

type Props = {}

const MainOffre = (props: Props) => {
  const oldOffre = <div className='w-full bg-lightWhite flex items-center'>
		<div className='flex flex-col items-center w-full p-4'>
			<h2  className='text-blue  md:text-3xl text-xl uppercase font-semibold tracking-wider '>Radiateur</h2>
			<h2  className='text-lightgray  md:text-xl text-lg uppercase font-semibold tracking-wider '>207 aluminium tube plat</h2>
			<div className="relative w-[450px] aspect-square max-w-full lg:hidden block">
			<Image src={radiator} alt={"radiator"} fill={true} />
			</div>
			<h2  className='text-mainBlack  md:text-3xl text-2xl uppercase font-semibold tracking-wider mt-4 opacity-70'>A PARTIR DE</h2>
			<h2  className='text-mainBlack  md:text-3xl text-2xl uppercase font-semibold tracking-wider  opacity-70 '>799DH</h2>
			<p className="text-mainBlack md:text-md text-sm text-center md:text-left font-light my-2 tracking-wider">Commencez vos achats dès maintenant</p>
			
			
			
		</div>

		<div className='w-full  lg:flex hidden  flex-col justify-center items-center'>
			<div className="relative w-[450px] h-[300px]">
			<Image src={radiator} alt={"radiator"} fill={true} />
			</div>
			<h2 className='font-semibold  text-2xl italic uppercase'>
				<span className="text-red mr-2">BAIRH</span>
				<span className="text-blue">Radiator</span>
			</h2>
			
		</div>
	</div>
  return <>
	
	<Carousel opts={{
    loop: true,
  }}
  plugins={[
	Autoplay({
	  delay: 5000,
	}),
	AutoHeight()
  ]}
  >
  <CarouselContent>
    <CarouselItem>{oldOffre}</CarouselItem>
    <CarouselItem className='flex flex-col justify-center h-[300px] w-[400px] max-w-full'>
	<div className='w-full  h-[300px] bg-lightWhite flex items-center relative'>
		<Image src={Banner} alt={`banner`} fill={true} />		</div> 
	</CarouselItem>
  </CarouselContent>
</Carousel>

	
  </>
}


export default MainOffre;