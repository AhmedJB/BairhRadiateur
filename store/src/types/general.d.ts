import { ImportedProduct } from "@prisma/client"

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

  export interface ProductInfoResponseT {
	id: number
	images: Image[]
	p_id: string
	name: string
	ptype: string
	paid: number
	price_vente: number
	price_achat: number
	quantity: number
	date: string
	provider: number
  }

export interface generalProuctInfotT  {
	info : ImportedProduct | undefined,
	serverInfo : ProductInfoResponseT
}

export interface OptionT  {
	readonly value : string;
	readonly label : string
}

export interface OrderDetailsT {
	name: string;
	price: number;
	product_id: string;
	quantity: number;
}

export interface OrderTableDataT {
	address: string;
        name: string;
        tel: string;
        total: number;
		details : {
			name: string;
			price: number;
			product_id: string;
			quantity: number;
		}[]
}