
import { api } from "../server/utils/api";
import {toast} from "react-toastify"

export const importProductRespMutation = {
	onSuccess : (resp :any) => {
		console.log(resp);
		console.log("success")
		toast.success("Succès")
	  },
	  onError : (data : any) => {
		console.log("error handling here")
		console.log(data.message)
		toast.error("failed") 
	  }
}

