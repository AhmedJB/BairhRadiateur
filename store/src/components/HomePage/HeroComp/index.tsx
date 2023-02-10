import React from 'react'
import styles from '../../../styles/modular/HomeStyles/HeroComp.module.css'
import MainOffre from './MainOffre'

type Props = {}

const HeroComp = (props: Props) => {
  return <>
  <div className="w-full">
		<div className='mx-auto w-full xl:container px-4 my-8 '>
		<div className={`${styles.container}`}>
		<div className={`${styles.left}`}>
			<MainOffre />
		</div>
		<div className={`${styles.right}`}>

		</div>
	</div>
		</div>

	</div>
	

  
  </>
}

export default HeroComp;