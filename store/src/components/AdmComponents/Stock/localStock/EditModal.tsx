import React, { useEffect, useState } from 'react'
import styles from "../../../../styles/modular/AuthStyles/Auth.module.css"
import { ImportedProduct } from '@prisma/client'
import { AnimatePresence } from 'framer-motion'
import Modal from '../../../General/Modal'
import InputField from '../../../General/InputField'
import { InputTypeEnum } from '../../../../enums'
import { toast } from 'react-toastify'
import { api } from '../../../../server/utils/api'

type Props = {
	open : boolean,
	closeModal : () => any,
	product : ImportedProduct | undefined
}

function EditModal({open,closeModal,product}: Props) {
	const modalStyle = styles.modalAuth + " xl:p-5 xl:pb-1 md:p-2 md:pb-1 p-1 "

	const [modifiedProduct , setModifiedProduct] = useState<ImportedProduct>();
	const [visible,setVisible] = useState(false);

	useEffect(() => {
		if (product){
			setModifiedProduct(product);
			setVisible(product.isEnabled);
		}
		
	},[product])

	const utils = api.useContext();

  const modifyProductRespMutation = {
    onSuccess : (resp :any) => {
      console.log(resp);
      console.log("success")
      utils.adminHandler.showProductWithInfo.invalidate();
      toast.success("Succès")
	  closeModal()
      },
      onError : (data : any) => {
      console.log("error handling here")
      console.log(data.message)
      toast.error("failed modifying product") 
      }
  }

  	const modifyProductMutation = api.adminHandler.modifyProducts.useMutation(modifyProductRespMutation);




	const handleInputChange = (arg : React.ChangeEvent<HTMLInputElement>) => {
		if (modifiedProduct){
			let t = arg.target;
			let key = t.id as keyof typeof temp;
			let temp : ImportedProduct = {...modifiedProduct};
			let val : string | number = t.value;
			if (key === "price"){
				val = Number(val);
			}
			(temp[key] as (string | number )) = val
			setModifiedProduct(temp);
		}
		
	}

	const submitChanges = async () => {
		if (modifiedProduct){
			let body = {
				name : modifiedProduct.name,
				description : modifiedProduct.description,
				price : modifiedProduct.price,
				isEnabled : visible,
				id : modifiedProduct.id
	
			}

			modifyProductMutation.mutate(body);
		}
		

	}

  return (
	<AnimatePresence>
		{
			open && (
				<Modal handleClose={closeModal} classes={modalStyle}>
					{
						 modifiedProduct && <>
						<div className="flex flex-col w-full h-full">
						<InputField 
							label="Nom"
							inputType={InputTypeEnum.input}
							id="name"
							type="text"
							value={modifiedProduct.name}
							changeFunc={handleInputChange}
							
							
						/>

						<InputField 
							label="Description"
							inputType={InputTypeEnum.textarea}
							id="description"
							value={modifiedProduct.description}
						    changeFunc={handleInputChange}	
							/>

						<InputField 
							label="Prix"
							inputType={InputTypeEnum.input}
							type="number"
							id="price"
							value={modifiedProduct.price.toFixed(2)}
							changeFunc={handleInputChange}							
							
						/>	

						<InputField
							label={"Visiblité"}
							inputType={InputTypeEnum.switch}
							checked={visible}
							setChecked={setVisible}

							/>
							<button
							onClick={submitChanges}
                  className={
                    "w-[250px] bg-blue mx-auto mb-5 py-3 px-8 text-white font-semibold rounded-md text-xl"
                  }
                >
                  Modifier
                                  </button>
					</div>
						</>
					}
					

				</Modal>
			)
		}
	</AnimatePresence>
  )
}

export default EditModal