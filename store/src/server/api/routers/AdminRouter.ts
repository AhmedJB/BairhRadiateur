import { z } from "zod";

import { createTRPCRouter, publicProcedure, adminProcedure } from "../trpc";
import axios from "axios"
import { base_url } from "../../utils/constants";
import { ProductRespT } from "../../../types/general";

export const AdminRouter = createTRPCRouter({
  getUsers : adminProcedure
    .query(({ctx}) => {
        return ctx.prisma.user.findMany({
            where : {
                isAdmin : false
            },
            include : {
                UserInformation : true
            }
        })
    }),
  getAppProducts : adminProcedure.
        query(async ({ctx}) : Promise<ProductRespT[] | null> => {
            let resp = await axios.get(base_url + "silentpd")
            if (resp.status === 200){
                return resp.data
            }else {
                return null
            }
        }),
  importProduct : adminProcedure
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
});
