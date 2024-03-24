import { BaseUrl, ProdImageURL } from "../server/api/constants/backend"

export const formatImage = (path : string | undefined) => {
	
	if (path) {
		
		//return BaseUrl + path
		return ProdImageURL + path
	}else{
		return ""
	}
	
}