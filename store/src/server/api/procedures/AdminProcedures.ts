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
            const resp = await axios.get(AppUrl + "silentpd")
            if (resp.status === 200){
                return resp.data as ProductRespT[]
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
                    const r = await ctx.prisma.importedProduct.create({
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

export const deleteImportedProduct = adminProcedure
			.input(z.object({
				id : z.string()
			}))
			.mutation(
				async ({input,ctx}) => {
					try{
						const r = await ctx.prisma.importedProduct.delete({
							where : {
								id : input.id
							}
						})
					}catch (e) {
						throw Error("Failed Product Delete")
					}
				}
			)

export const showProductWithInfo = adminProcedure
			.query(async ({ctx}) => {
				const products = await ctx.prisma.importedProduct.findMany({
					 
				})
				const ids = products.map(e => e.productId)
				const resp = await ServerHandler.post("silentProducts/getinfo",{
					ids
				})
				if (resp.status === 200){
					const respData : ProductInfoResponseT[] = (resp.data as ProductInfoResponseT[]) ;
					const finalRes : generalProuctInfotT[] = [];
					for (const productResp of respData){
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


export const modifyProducts = adminProcedure
			.input(
				z.object({
					id : z.string(),
					name : z.string(),
					description : z.string(),
					price : z.number(),
					isEnabled : z.boolean()
				})
			)
			.mutation(
				async ({input,ctx}) => {
					try{
						const res = await ctx.prisma.importedProduct.update({
							where : {
								id : input.id
							},
							data : {
								name : input.name,
								description : input.description,
								price : input.price,
								isEnabled : input.isEnabled
							}
						})
					}catch {
						throw Error("Modified Product")
					}

				}
			)

