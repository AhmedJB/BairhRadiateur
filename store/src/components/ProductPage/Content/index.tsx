import React from 'react'
import Products from '../Products'
import { generalProuctInfotT } from '../../../types/general'

type Props = {
  products: generalProuctInfotT[],
  title ?: string
}

const Content = ({title,products}: Props) => {
  return (
	<Products products={products} title={title} />
  )
}

export default Content