import { useSession } from 'next-auth/react'
import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router';
import FullPageLoader from '../../components/General/FullPageLoader';
import StockComponent from '../../components/AdmComponents/Stock/indext';




type Props = {}

function StockPage({} : Props){
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
      !loading && <><StockComponent /> </>
    }
    {
      loading && <FullPageLoader />
    }
  </>
}


function stock({}: Props) {
 return <StockPage />
  
}

export default stock;
