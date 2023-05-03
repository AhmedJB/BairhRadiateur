import React , {useState} from 'react'
import Header from '../General/Header';
import TopHeader from '../General/TopHeader';



import Footer from '../General/Footer';
import ProductLayout from './ProductLayout';

type Props = {}

const ProductPage = (props: Props) => {

  return  <>
	<TopHeader />
	<Header />
	<ProductLayout   />
	
	<Footer />
  
  </>

  
}


export default ProductPage;