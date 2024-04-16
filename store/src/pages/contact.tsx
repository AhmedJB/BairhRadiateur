import React from 'react'
import ContactPage from '../components/ContactPage'
import { NextSeo } from 'next-seo'

type Props = {}

function contact({}: Props) {
  return <>
  <NextSeo
      title="Bairhradiateur | Contact Page"
      openGraph={{
        type: 'website',
        locale: 'fr_MA',
        url: 'https://bairhradiateur.ma/contact',
        siteName: 'Bairhradiateur',
      }}
    />
	<ContactPage />
  </>
}

export default contact