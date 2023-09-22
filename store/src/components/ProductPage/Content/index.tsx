import React from 'react'
import Products from '../Products'
import { generalProuctInfotT } from '../../../types/general'

type Props = {
  products: generalProuctInfotT[]
}

const Content = ({products}: Props) => {
  return (
	<Products products={products} />
  )
}

export default Content