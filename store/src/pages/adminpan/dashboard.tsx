import { useSession } from 'next-auth/react'
import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router';
import FullPageLoader from '../../components/General/FullPageLoader';


type Props = {}

function dashboard({}: Props) {

  const [loading,setLoading] = useState(true);

  const {status , data} = useSession();
  const router = useRouter();

  useEffect(() => {

    if (status  === "authenticated") {
      if (data?.user?.isAdmin){
        setLoading(false);
        console.log("admin here")
      }else{
        router.push("/")
      }

    }else{
      router.push("/")
    }
  },[status])

  return <>
    {
      !loading && <> dashbord </>
    }
    {
      loading && <FullPageLoader />
    }
  </>
}

export default dashboard