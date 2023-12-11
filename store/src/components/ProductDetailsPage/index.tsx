import React, { useState } from 'react'
import TopHeader from '../General/TopHeader'
import Header from '../General/Header'
import Footer from '../General/Footer'
import ProductDetails from './ProductDetails'
import ProductRecommendation from './ProductDetails/ProductRecommendation'

type Props = {}

function ProductDetailsPage({}: Props) {
	const [mark,setMark] = useState<string | undefined>();
	const [productId,setProductId] = useState<string | undefined>();
  return <>
		<TopHeader />
		<Header />
		<ProductDetails  setMark={setMark} setProductId_={setProductId} />
		<div className="w-full ">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
			<h1 className="text-xl font-semibold text-darkGray w-2/12">Recommendation</h1> <hr className="w-10/12 border-lighterGray" />
		</div>
	</div>
	{mark &&
	<ProductRecommendation mark={mark} productId={productId as string} />
	}
		<Footer />
  </>
}

export default ProductDetailsPage