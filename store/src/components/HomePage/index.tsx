import React , {useState} from 'react'
import Header from '../General/Header';
import TopHeader from '../General/TopHeader';
import HeroComp from './HeroComp';
import SearchComp from './SearchComp';
import EmailSub from './EmailSub';
import Qualities from './Qualities';
import Recommendation from './Recommendation';
import About from './About';
import Auth from './Auth';

import styles from "../../styles/modular/AuthStyles/Auth.module.css"
import PreLoad from '../Layout/PreLoad';
import Decouvert from './Decouvert';
import Footer from '../General/Footer';


type Props = {}

const HomePage = (props: Props) => {
	const [AuthOpen,setAuthOpen]  = useState(true);
  return  <>
	{/* <Auth handler={[AuthOpen,setAuthOpen]} classes={styles.modalAuth + " xl:p-5 xl:pb-1 md:p-2 md:pb-1 p-1 " } /> */}
	<TopHeader />
	<Header />
	<SearchComp />
	<HeroComp />
	<EmailSub />
	<Qualities />
	<div className="w-full">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
			<h1 className="text-sm lg:text-xl font-semibold text-darkGray w-[350px]">Découvrez Nos Produits</h1> <hr className="w-full border-lighterGray" />
		</div>
	</div>
	<Decouvert />

	<div className="w-full ">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
			<h1 className="text-sm lg:text-xl font-semibold text-darkGray w-[250px]">MEILLEURES VENTES</h1> <hr className="w-10/12 border-lighterGray" />
		</div>
	</div>
	<Recommendation />
	<div className="w-full ">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
			<h1 className="text-sm lg:text-xl font-semibold text-darkGray w-[250px]">QUI SOMMES NOUS?</h1> <hr className="w-10/12 border-lighterGray" />
		</div>
	</div>
	<About />
	<Footer />
  </>

  
}


export default HomePage;