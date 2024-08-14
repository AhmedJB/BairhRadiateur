import React from 'react'
import styles from '../../../styles/modular/HomeStyles/HeroComp.module.css'
import MainOffre from './MainOffre'
import SecondaryOffre from './SecondaryOffre'
import Link from 'next/link'

type Props = {}

const HeroComp = (props: Props) => {
  return <>
  <div className="w-full">
		<div className='mx-auto w-full xl:container px-4 my-8 flex flex-col items-center lg:flex-row '>
		<div className={`${styles.container as string}`}>
		<div className={`${styles.left as string}`}>
			<MainOffre />
		</div>
		<div className={`${styles.right as string} lg:block hidden`}>
			<SecondaryOffre />

		</div>
	</div>
	<Link href={"/products"} className='lg:hidden  block'><button className='p-3 bg-blue mt-2 uppercase text-white font-semibold hover:bg-red  transition-transform hover:scale-105 text-md cursor-pointer'>
				{`Voir les produits`}
			</button></Link>
		</div>

	</div>
	

  
  </>
}

export default HeroComp;