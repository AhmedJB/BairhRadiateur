import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Favorites from './Favorites';
import Profile from './Profile';

type Props = {}

function ProfileComp({}: Props) {
  const router = useRouter();

  const [section,setSection] = useState("profile");
  

  useEffect(() => {
    if (router.isReady){
      setSection(router.query.section as string)
    }
  },[router.isReady])


  const getPage = () => {
    switch(section) {
      case "favorite":
        return <Favorites />
      default:
        return <Profile />
    }
  }

  return <>
  {
    router.isReady && <>
    <div className="w-full ">
		<div className={`mx-auto w-full xl:container flex flex-col p-4`} >
    {getPage()}
      </div></div>
    
    </>
  }

  </>
}

export default ProfileComp