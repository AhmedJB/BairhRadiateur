import React, { useState } from 'react'
import {GrAdd} from "react-icons/gr";
import {AiOutlineCheck} from "react-icons/ai"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Modes, Targets } from '../../../enums';
import { api } from '../../../server/utils/api';
import { OptionT } from '../../../types/general';
import { toast } from 'react-toastify';
import { text } from 'stream/consumers';






type Props = {
	options_ : readonly OptionT[],
	target : Targets,
	currentValue : string,
	handleValueChange : (newv : string) => void
}



function CustomEditSelect({options_,target,currentValue,handleValueChange}: Props) {
	const [currentMode,setCurrentMode] = useState<Modes>(Modes.SELECT);
	const [textValue,setTextValue] = useState("");

	const utils = api.useContext();

	const markMutation = api.adminHandler.addMark.useMutation({
		onSuccess : () => {
			utils.authHandler.getMarks.invalidate().catch(() => "");
			setCurrentMode(Modes.SELECT)
		},
		onError : (err) => {
			toast.error("Failed Creating Mark")
		} 
	})

	const tubeMutation = api.adminHandler.addTube.useMutation({
		onSuccess : () => {
			utils.authHandler.getTubes.invalidate().catch(() => "");
			setCurrentMode(Modes.SELECT)

		},
		onError : (err) => {
			toast.error("Failed Creating Tube")
		} 
	})


	const handleMutation = () => {
		if (textValue && textValue.length > 0) {
			const mut = target === Targets.MARK ? markMutation : tubeMutation;
			mut.mutate({name : textValue});
		}else{
			setCurrentMode(Modes.SELECT);
		}
		
	}



	
	
	
	  
	

	const renderUI = () => {
		switch (currentMode) {
			case Modes.EDIT:
				return <>
					<div className="flex items-center p-3 pl-0 gap-3">
						<input type="text" className='w-full p-3 ml-0 rounded-lg outline-none bg-transparent border-black border-2' value={textValue} onChange={(e) => setTextValue(e.target.value)} />
						<span  className="w-[40px] aspect-square font-semibold smooth-shadow-1  grid place-items-center rounded-xl cursor-pointer transition-transform hover:scale-110 text-black bg-white"
						onClick={handleMutation}
						>
							<AiOutlineCheck /></span>

					</div>
				</>
			case Modes.SELECT:
				return <>
					<div className="flex items-center p-3 gap-3">
					<Autocomplete
						disablePortal
						id="edit-selector"
						options={options_}
						sx={{ width: "100%" }}
						value={options_.filter(e => e.value === currentValue)[0]}
						onChange={(v,newv) => {
							if (newv) {
								handleValueChange(newv.value)
							}
						}}
						renderInput={(params) => <TextField {...params} label={
							target === Targets.MARK ? "Mark ..." : "Tube ..."
						} />}
						/>
						<span  className="w-[40px] aspect-square font-semibold smooth-shadow-1  grid place-items-center rounded-xl cursor-pointer transition-transform hover:scale-110 text-black bg-white"
						onClick={() => setCurrentMode(Modes.EDIT)}
						>
							<GrAdd />
						</span>
					</div>
				</>
		}
	}

	return renderUI();
}

export default CustomEditSelect