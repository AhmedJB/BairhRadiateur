import React, { useEffect, useState } from 'react'
import styles from "../../../../styles/modular/AuthStyles/Auth.module.css"
import { ImportedProduct, Mark, Tube } from '@prisma/client'
import { AnimatePresence } from 'framer-motion'
import Modal from '../../../General/Modal'
import InputField from '../../../General/InputField'
import { InputTypeEnum, Targets } from '../../../../enums'
import { toast } from 'react-toastify'
import { api } from '../../../../server/utils/api'
import CustomEditSelect from '../../../General/CustomEditSelect'
import { OptionT } from '../../../../types/general'

type Props = {
	open : boolean,
	closeModal : () => any,
	product : ImportedProduct | undefined
}

function EditModal({open,closeModal,product}: Props) {
	const modalStyle = `${styles.modalAuth as string} xl:p-5 xl:pb-1 md:p-2 md:pb-1 p-1` 

	const [modifiedProduct , setModifiedProduct] = useState<ImportedProduct>();
	const [visible,setVisible] = useState(false);

	const [selectedTube , setSelectedTube] = useState(product?.tubeId)
	const [selectedMark , setSelectedMark] = useState(product?.markId)
	const [markOptions, setMarkOptions] = useState<OptionT[]>([]);
	const [tubeOptions,setTubeOptions] = useState<OptionT[]>([]);

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
      utils.adminHandler.showProductWithInfo.invalidate().catch(e=> console.log(e));
      toast.success("Succès")
	  closeModal()
      },
      onError : (data : any) => {

      toast.error("failed modifying product") 
      }
  }

  	const modifyProductMutation = api.adminHandler.modifyProducts.useMutation(modifyProductRespMutation);
  	const {data : marks,status : markStatus,refetch : markRefetch}  = api.authHandler.getMarks.useQuery();
	const {data : tubes,status : tubeStatus,refetch  : tubeRefetch} = api.authHandler.getTubes.useQuery();


	const formatData = (data : Tube[] | Mark[]) => {
		let res = data.map((e,i) => {
			return {
				value : e.id,
				label : e.name
			}
		})
		return res;
	}

	useEffect(() => {
		if (markStatus === "success") {
			const d = formatData(marks);
			setMarkOptions(d);
		}
	},[markStatus,marks])

	useEffect(() => {
		if (tubeStatus === "success") {
			const d = formatData(tubes);
			setTubeOptions(d);
		}
	},[tubeStatus,tubes])



	const handleInputChange = (arg : React.ChangeEvent<HTMLInputElement>) => {
		if (modifiedProduct){
			const t = arg.target;
			const key = t.id as keyof typeof temp;
			const temp : ImportedProduct = {...modifiedProduct};
			let val : string | number = t.value;
			if (key === "price"){
				val = Number(val);
			}else if (key === "minShipping" || key === "maxShipping"){
				val = Number(val)
			}
			(temp[key] as (string | number )) = val
			setModifiedProduct(temp);
		}
		
	}

	const submitChanges =  () => {
		if (modifiedProduct){
			if (!selectedTube || selectedTube.length === 0) {
				toast.warning("Please select tube")
			}else if (!selectedMark || selectedMark.length === 0) {
				toast.warning("Please select mark")
			}else {
				const body = {
					name : modifiedProduct.name,
					description : modifiedProduct.description,
					price : modifiedProduct.price,
					isEnabled : visible,
					id : modifiedProduct.id,
					minShipping : modifiedProduct.minShipping,
					maxShipping : modifiedProduct.maxShipping,
					tubeId : selectedTube,
					markId : selectedMark
	
		
				}
	
				modifyProductMutation.mutate(body);
			}

			
		}
		

	}

  const handleMarkChange = (newv : string) =>  {
    setSelectedMark(newv);
  }

  const handleTubeChange = (newv : string) =>  {
    setSelectedTube(newv);
  }

  return (
	<AnimatePresence>
		{
			open && (
				<Modal handleClose={closeModal} classes={modalStyle}>
					{
						 modifiedProduct && <>
						<div className="flex flex-col w-full h-full">
							<div className="flex flex-col">
							<label className="text-mainBlack font-semibold text-lg">
								Mark
								<CustomEditSelect 
								  target={Targets.MARK}
								  currentValue={selectedMark as string}
								  options_={markOptions}
								  handleValueChange={handleMarkChange}
								/>
								</label>
							</div>

							<div className="flex flex-col">
							<label className="text-mainBlack font-semibold text-lg">
								Tube
								<CustomEditSelect 
								  target={Targets.TUBE}
								  currentValue={selectedTube as string}
								  options_={tubeOptions}
								  handleValueChange={handleTubeChange}
								/>
								</label>
							</div>
						
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


						<div className="w-full flex items-center gap-3">
						<InputField 
							label="Delai minimum"
							inputType={InputTypeEnum.input}
							type="number"
							id="minShipping"
							value={modifiedProduct.minShipping.toFixed(0)}
							changeFunc={handleInputChange}							
							
						/>	
						<InputField 
							label="Delai Maximum"
							inputType={InputTypeEnum.input}
							type="number"
							id="maxShipping"
							value={modifiedProduct.maxShipping.toFixed(0)}
							changeFunc={handleInputChange}							
							
						/>	
						</div>

						<InputField
							label={"Visiblité"}
							inputType={InputTypeEnum.switch}
							checked={visible}
							setChecked={setVisible}

							/>
							<button
							onClick={(() => submitChanges()) as React.MouseEventHandler<HTMLButtonElement>}
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