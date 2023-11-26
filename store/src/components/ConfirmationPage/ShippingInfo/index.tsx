import { useSession } from 'next-auth/react'
import React , {useState,useEffect} from 'react'
import InputField from '../../General/InputField';
import { InputTypeEnum } from '../../../enums';
import { api } from '../../../server/utils/api';
import { useRouter } from 'next/router';

type Props = {}
interface ShippingT {
    address: string;
    nom : string;
    tel : string;  
}

function ShippingInfo({}: Props) {
    const session = useSession();
    const [show,setShow] = useState(false);
    const [userData,setUserData] = useState<ShippingT>();
    const router = useRouter();
    const {data : userInfoResp , status} = api.authHandler.getUserInfo.useQuery();


    

    useEffect(() => {
        if (status === "error"){
            router.push("/")
        }else if (status === "success"){
            setUserData({
                address : userInfoResp?.UserInformation?.address as string,
                nom : userInfoResp?.name as string,
                tel : userInfoResp?.UserInformation?.tel as string
            })
            setShow(true)
        }
    },[userInfoResp,status])


    const handleFormChange = (event: React.ChangeEvent<any>) => {
        event.preventDefault();
        const nv = event.target.value;
        let temp  = {...userData} as ShippingT
        const name = event.target.name as string;
        temp[name as keyof ShippingT] = nv; 
        setUserData(temp);
    }



  return <>
  {
    show && <><div className="flex flex-col mt-5 md:w-1/2 w-full mx-auto">
    <h1 className="text-mainBlack font-semibold text-2xl">Confirmer vos donnes </h1>
    <InputField inputType={InputTypeEnum.input} label="Nom" name="nom" value={userData?.nom} changeFunc={handleFormChange} />
    <InputField inputType={InputTypeEnum.input} label="Tel" name="tel" value={userData?.tel} changeFunc={handleFormChange} />
    <InputField inputType={InputTypeEnum.input} label="Addresse" name="address" value={userData?.address} changeFunc={handleFormChange} />
    <div className="w-full flex items-center justify-center">
        <button className="p-2 rounded-lg bg-blue text-white font-semibold">Confirmer</button>
    </div>
</div> </>
  }
    
    
  </>
}

export default ShippingInfo