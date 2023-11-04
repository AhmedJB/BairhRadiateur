import React from 'react'
import { api } from '../../../server/utils/api';
import Content from '../../ProductPage/Content';
import { generalProuctInfotT } from '../../../types/general';

type Props = {}

function Favorites({}: Props) {

	const {data : productData,status} = api.authHandler.getFavorites.useQuery();


	return <>
	<Content title={"Mes Favoris"} products={productData as generalProuctInfotT[]} />
	</>
}

export default Favorites