import React from 'react'
import Header from '../General/Header';
import TopHeader from '../General/TopHeader';
import HeroComp from './HeroComp';
import SearchComp from './SearchComp';

type Props = {}

const HomePage = (props: Props) => {
  return <>
	<TopHeader />
	<Header />
	<SearchComp />
	<HeroComp />
  
  </>
}


export default HomePage;