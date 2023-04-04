
export const formatErrorMSG = (msg) => {
	let field = msg.path.join(",")
	if (field === "tel"){
		field = 'Votre Numéro de téléphone'
	}
	if (msg.code === "custom"){
		
		return `Veuillez vérifiez ${field}`
	}
	
	let errType = (msg.code === "too_big" ? "au plus" : "au moins")
	let length = msg[msg.code === "too_big" ? "maximum" : "minimum"]
	let res = `${field} doit contenir ${errType} ${length} caractères`
	return res;
}