import React , {useState,useEffect} from 'react'
import Loader from '../Loader';
import { useSession } from 'next-auth/react';
import Auth from '../../HomePage/Auth';
import styles from "../../../styles/modular/AuthStyles/Auth.module.css"


type Props = {
    children : any
}

function PreLoad({children}: Props) {
    const {data , status } = useSession();
    const [AuthOpen,setAuthOpen] = useState(false);

    const [loading,setLoading] = useState(true);

    useEffect(() => {
        console.log("checking auth")
        console.log(data)
        console.log(status)
        if (status !== "loading"){
            setLoading(false);
        }
    },[status])

  return (
    loading ? <div className="w-screen h-screen grid place-items-center"><Loader /></div> :<>
       {/*  <Auth handler={[AuthOpen,setAuthOpen]} classes={styles.modalAuth + " xl:p-5 xl:pb-1 md:p-2 md:pb-1 p-1 " } /> */}
        {children}
     </> 
  )
}

export default PreLoad