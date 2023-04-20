import { NextComponentType } from 'next';
import React from 'react'
import styles from "../../styles/modular/ProductStyles/index.module.css"
import Content from './Content';
import Sidebar from './Sidebar';

type Props = {
}

const ProductLayout = (props: Props) => {
  return (
	<div className="w-full ">
		<div className={`mx-auto w-full xl:container flex items-center justify-between`} >
			<div className={`${styles.gridContainer} `}>
				<div className={`${styles.sidebar} h-screen `}>
					<Sidebar />
				</div>
				<div className={`${styles.content} h-screen `}>
					<Content />

				</div>

			</div>

		</div>
	</div>
  )
}

export default ProductLayout;