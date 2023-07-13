export interface ProductRespT {
	fournisseur: Fournisseur
	product: ProductT
	options: Options
	images: Image[]
  }
  
  export interface Fournisseur {
	id: number
	name: string
	email: string
	credit: number
	phone: string
	address: string
	date: string
  }
  
  export interface ProductT {
	id: number
	p_id: string
	name: string
	paid: number
	ptype: string
	price_vente: number
	price_achat: number
	quantity: number
  }
  
  export interface Options {
	id: number
	metal: string
	type: string
  }
  
  export interface Image {
	id: number
	image: string
	date: string
	product: number
  }