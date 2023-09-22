import { useSession } from 'next-auth/react'
import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router';
import FullPageLoader from '../../components/General/FullPageLoader';
import Clients from '../../components/AdmComponents/Clients';
import ImportStockPage from '../../components/AdmComponents/ImportStockPage';


type Props = {}

function ImportStockComp({} : Props) {
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

    }else{
      router.push("/").catch((e) => {console.log(e)})
    }
  },[status])

  return <>
    {
      !loading && <ImportStockPage />
    }
    {
      loading && <FullPageLoader />
    }
  </>
}

function importstock({}: Props) {
  return <ImportStockComp />
  
}

export default importstock