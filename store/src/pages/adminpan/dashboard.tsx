import { useSession } from 'next-auth/react'
import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router';
import FullPageLoader from '../../components/General/FullPageLoader';
import Dashboard from '../../components/AdmComponents/Dashboard';


type Props = {}

function DashboardComp({} : Props) {
  const [loading,setLoading] = useState(true);

  const {status , data} = useSession();
  const router = useRouter();
  

  useEffect(() => {
    setLoading(true);
    if (status  === "authenticated") {
      if (data?.user?.isAdmin){
        setLoading(false);
        console.log("admin here")
      }else{
        router.push("/").catch((e) => {console.log(e)})
      }

    }else if ( status === "unauthenticated"){
      router.push("/").catch((e) => {console.log(e)})
    }
  },[status])

  return <>
    {
      !loading && <Dashboard />
    }
    {
      loading && <FullPageLoader />
    }
  </>
}

function dashboard({}: Props) {

  return <DashboardComp />
}

export default dashboard