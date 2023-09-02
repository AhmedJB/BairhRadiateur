import { z } from "zod"
import { adminProcedure } from "../trpc"
import { AppUrl } from "../constants/backend"
import App from "next/app"
import axios from "axios"
import { ProductInfoResponseT, ProductRespT, generalProuctInfotT } from "../../../types/general"
import { ServerHandler } from "../handler"

export const getUsers =  adminProcedure
    .query(({ctx}) => {
        return ctx.prisma.user.findMany({
            where : {
                isAdmin : false
            },
            include : {
                UserInformation : true
            }
        })
    })


export const getAppProducts = adminProcedure.
        query(async ({ctx}) : Promise<ProductRespT[] | null> => {
            let resp = await axios.get(AppUrl + "silentpd")
            if (resp.status === 200){
                return resp.data
            }else {
                return null
            }
        })

export const  importProduct = adminProcedure
        .input(z.object({
            p_id : z.string(),
            name : z.string(),
            price : z.number(),
        }))
        .mutation(
            async ({input,ctx}) => {
                try{
                    let r = await ctx.prisma.importedProduct.create({
                        data : {
                            name : input.name,
                            price : input.price,
                            productId : input.p_id
                        }
                    })
                } catch (e){
                    console.log(e)
                    throw Error("failed import")
                }                
            }
         )

export const showProductWithInfo = adminProcedure
			.query(async ({ctx}) => {
				const products = await ctx.prisma.importedProduct.findMany({
					
				})
				let ids = products.map(e => e.productId)
				let resp = await ServerHandler.post("silentProducts/getinfo",{
					ids
				})
				if (resp.status === 200){
					let respData : ProductInfoResponseT[] = resp.data;
					let finalRes : generalProuctInfotT[] = [];
					for (let productResp of respData){
						console.log("Filtering product" , productResp.p_id)
						let index = -1
						products.forEach((e,i) => {
							if (e.productId === productResp.p_id){
								index = i;
							}
						})
						
						console.log("index ", index)
						if (products[index]){
							finalRes.push({
								info : products[index],
								serverInfo : productResp
							})
						}
						
						
					}
					return finalRes;
				}else{
					return products
				}
			})

