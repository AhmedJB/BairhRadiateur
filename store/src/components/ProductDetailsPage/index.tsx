import React from 'react'
import TopHeader from '../General/TopHeader'
import Header from '../General/Header'
import Footer from '../General/Footer'
import ProductDetails from './ProductDetails'
import ProductRecommendation from './ProductDetails/ProductRecommendation'

type Props = {}

function ProductDetailsPage({}: Props) {
  return <>
		<TopHeader />
		<Header />
		<ProductDetails />
		<div className="w-full ">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
			<h1 className="text-xl font-semibold text-darkGray w-2/12">Recommendation</h1> <hr className="w-10/12 border-lighterGray" />
		</div>
	</div>
	<ProductRecommendation />
		<Footer />
  </>
}

export default ProductDetailsPage