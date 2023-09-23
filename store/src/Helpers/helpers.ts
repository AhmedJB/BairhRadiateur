import { BaseUrl } from "../server/api/constants/backend"

export const formatImage = (path : string | undefined) => {
	if (path) {
		return BaseUrl + path
	}else{
		return ""
	}
	
}