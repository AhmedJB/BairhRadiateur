import { useSession } from 'next-auth/react'
import React , {useState,useEffect,useContext} from 'react'
import InputField from '../../General/InputField';
import { InputTypeEnum } from '../../../enums';
import { api } from '../../../server/utils/api';
import { useRouter } from 'next/router';
import { CartContext } from '../../../contexts/CartContext';
import { toast } from 'react-toastify';

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
    const cartState = useContext(CartContext)
    const router = useRouter();
    const {data : userInfoResp , status} = api.authHandler.getUserInfo.useQuery();
    const submitOrderMutation = api.authHandler.submitOrder.useMutation({
        onSuccess : () => {
            toast.success("Success")
        },
        onError : () => {
            toast.error("Failed Order")
        }
    })


    

    useEffect(() => {
        if (status === "error"){
            router.push("/").catch(() => "")
        }else if (status === "success"){
            setUserData({
                address : userInfoResp?.UserInformation?.address as string,
                nom : userInfoResp?.name as string,
                tel : userInfoResp?.UserInformation?.tel as string
            })
            setShow(true)
        }
    },[userInfoResp,status])


    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const nv = event.target.value;
        const temp  = {...userData} as ShippingT
        const name = event.target.name;
        temp[name as keyof ShippingT] = nv; 
        setUserData(temp);
    }


    const confirm =  () => {
        if (cartState && cartState.cartData && userData){
            
            const orderProducts = [];
            let total = 0;
            for (const cartObj of cartState.cartData){
                if (cartObj.product.info){
                    const temp = {
                        name : cartObj.product.info.name,
                        price : cartObj.product.info.price,
                        product_id : cartObj.product.serverInfo.p_id,
                        quantity : cartObj.quantity
                    }
                    total += temp.quantity * temp.price;
                    orderProducts.push(temp);
                }
                
            }
            const body = {
                order : {
                    ...userData,
                    name : userData.nom,
                    total,
                },
                orderDetails : orderProducts      
            }
            submitOrderMutation.mutate(body);
        }
        

    }



  return <>
  {
    show && <><div className="flex flex-col mt-5 md:w-1/2 w-full mx-auto">
    <h1 className="text-mainBlack font-semibold text-2xl">Confirmer vos donnes </h1>
    <InputField inputType={InputTypeEnum.input} label="Nom" name="nom" value={userData?.nom} changeFunc={handleFormChange} />
    <InputField inputType={InputTypeEnum.input} label="Tel" name="tel" value={userData?.tel} changeFunc={handleFormChange} />
    <InputField inputType={InputTypeEnum.input} label="Addresse" name="address" value={userData?.address} changeFunc={handleFormChange} />
    <div className="w-full flex items-center justify-center">
        <button className="p-2 rounded-lg bg-blue text-white font-semibold" onClick={confirm}>Confirmer</button>
    </div>
</div> </>
  }
    
    
  </>
}

export default ShippingInfo