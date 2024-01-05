import React from 'react'
import Products from '../Products'
import { generalProuctInfotT } from '../../../types/general'

type Props = {
  products: generalProuctInfotT[],
  title ?: string,
  setOpen? : (v:React.SetStateAction<boolean>) => void
}

const Content = ({title,products,setOpen}: Props) => {
  return (
	<Products products={products} title={title} setOpen={setOpen} />
  )
}

export default Content