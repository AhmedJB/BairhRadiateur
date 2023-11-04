import React from 'react'
import Header from '../../components/General/Header';
import TopHeader from '../../components/General/TopHeader';
import ProfileComp from '../../components/ProfileComp';
import Footer from '../../components/General/Footer';

type Props = {}

function Profile({}: Props) {
  return <>
  <TopHeader />
<Header />
<ProfileComp />
<Footer />
	

  </>
}

export default Profile;