import React from 'react'
import ProductPage from '../components/ProductPage';
import { NextSeo } from 'next-seo';


type Props = {}

const Home = (props: Props) => {
  return <>
  <NextSeo
      title="Bairhradiateur | Produits"
      openGraph={{
        type: 'website',
        locale: 'fr_MA',
        url: 'https://bairhradiateur.ma/products',
        siteName: 'Bairhradiateur',
      }}
    />
    <ProductPage />
  </>
}

export default Home;