import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { api } from '../../../server/utils/api';
import { toast } from 'react-toastify';
import { InputTypeEnum } from '../../../enums';
import InputField from '../../General/InputField';

type Props = {}

interface ProfileDataT {
    username : string;
    email : string;
}

function Profile({}: Props) {
    const [show,setShow] = useState(false);
    const [userData,setUserData] = useState<ProfileDataT>();
    const router = useRouter();
    const {data : userInfoResp , status,refetch} = api.authHandler.getUserInfo.useQuery();
    const userUpdateMutation = api.authHandler.updateUserInfo.useMutation({
        onSuccess : () => {
            toast.success("Success")
            refetch().catch(() => {console.log("")});
        },
        onError : () => {
            toast.error("Failed ")
            refetch().catch(() => {console.log("")});
        }
    })


    

    useEffect(() => {
        if (status === "error"){
            router.push("/").catch(() => {console.log("")})
        }else if (status === "success"){
            setUserData({
                username : userInfoResp?.username as string,
                email : userInfoResp?.email as string
            })
            setShow(true)
        }
    },[userInfoResp,status])
    type onChangeType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;


    const handleFormChange = (event: React.ChangeEvent<onChangeType>) => {
        event.preventDefault();
        const nv = event.target.value;
        const temp  = {...userData} as ProfileDataT
        const name = event.target.name;
        temp[name as keyof ProfileDataT] = nv; 
        setUserData(temp);
    }


    const confirm = () => {
        
        userUpdateMutation.mutate(userData as ProfileDataT);

    }



  return <>
  {
    show && <><div className="flex flex-col mt-5 md:w-1/2 w-full mx-auto">
    <h1 className="text-mainBlack font-semibold text-2xl">Modifier vos donnees </h1>
    
    <InputField inputType={InputTypeEnum.input} label="Username" name="username" value={userData?.username} changeFunc={handleFormChange} />
    <InputField inputType={InputTypeEnum.input} label="Email" name="email" value={userData?.email} changeFunc={handleFormChange} />
    <div className="w-full flex items-center justify-center">
        <button className="p-2 rounded-lg bg-blue text-white font-semibold" onClick={confirm}>Confirmer</button>
    </div>
</div> </>
  }
    
    
  </>
}

export default Profile