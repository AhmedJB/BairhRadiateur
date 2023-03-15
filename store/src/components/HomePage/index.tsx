import React from 'react'
import Header from '../General/Header';
import TopHeader from '../General/TopHeader';
import HeroComp from './HeroComp';
import SearchComp from './SearchComp';
import EmailSub from './EmailSub';
import Qualities from './Qualities';
import Recommendation from './Recommendation';
import About from './About';

type Props = {}

const HomePage = (props: Props) => {
  return <>
	<TopHeader />
	<Header />
	<SearchComp />
	<HeroComp />
	<EmailSub />
	<Qualities />
	<div className="w-full">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
			<h1 className="text-xl font-semibold text-darkGray w-2/12">Découvrez Nos Produits</h1> <hr className="w-10/12 border-lighterGray" />
		</div>
	</div>
	<div className="w-full bg-mainBlack h-[200px] my-3"></div>

	<div className="w-full ">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
			<h1 className="text-xl font-semibold text-darkGray w-2/12">MEILLEURES VENTES</h1> <hr className="w-10/12 border-lighterGray" />
		</div>
	</div>
	<Recommendation />
	<div className="w-full ">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
			<h1 className="text-xl font-semibold text-darkGray w-2/12">QUI SOMMES NOUS?</h1> <hr className="w-10/12 border-lighterGray" />
		</div>
	</div>
	<About />
  
  </>
}


export default HomePage;