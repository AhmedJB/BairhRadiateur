import { NextComponentType } from 'next';
import React from 'react'
import styles from "../../styles/modular/ProductStyles/index.module.css"
import Content from './Content';
import Sidebar from './Sidebar';
import BreadCrumbs from '../General/BreadCrumbs';

type Props = {
}

const ProductLayout = (props: Props) => {
  return (
	<div className="w-full ">
		<div className={`mx-auto w-full xl:container flex flex-col`} >
			<BreadCrumbs  
				path = {[
					{
						name : "Products",
						url : "#"
					}
				]}
			/>
			<div className={`${styles.gridContainer} `}>
				<div className={`${styles.sidebar} `}>
					<Sidebar />
				</div>
				<div className={`${styles.content}  `}>
					<Content />

				</div>

			</div>

		</div>
	</div>
  )
}

export default ProductLayout;