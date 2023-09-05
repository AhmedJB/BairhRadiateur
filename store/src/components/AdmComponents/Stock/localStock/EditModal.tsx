import React, { useEffect, useState } from 'react'
import styles from "../../../../styles/modular/AuthStyles/Auth.module.css"
import { ImportedProduct } from '@prisma/client'
import { AnimatePresence } from 'framer-motion'
import Modal from '../../../General/Modal'
import InputField from '../../../General/InputField'
import { InputTypeEnum } from '../../../../enums'

type Props = {
	open : boolean,
	closeModal : () => any,
	product : ImportedProduct | undefined
}

function EditModal({open,closeModal,product}: Props) {
	const modalStyle = styles.modalAuth + " xl:p-5 xl:pb-1 md:p-2 md:pb-1 p-1 "

	const [modifiedProduct , setModifiedProduct] = useState<ImportedProduct>();

	useEffect(() => {
		if (product){
			setModifiedProduct(product)
		}
		
	},[product])

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
							type="text"
							value={modifiedProduct.name}
							
							
						/>

						<InputField 
							label="Description"
							inputType={InputTypeEnum.textarea}
							value={modifiedProduct.description}
							/>

						<InputField 
							label="Prix"
							inputType={InputTypeEnum.input}
							type="number"
							value={modifiedProduct.price.toFixed(2)}
							
							
						/>	

						<InputField
							label={"Visiblité"}
							inputType={InputTypeEnum.switch}

							/>
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