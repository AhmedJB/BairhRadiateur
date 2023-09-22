import { z } from "zod";
import validator from "validator"

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { encryptPassword } from "../../../utils/helpers";
import { Prisma } from "@prisma/client";
import { ServerHandler } from "../handler";
import { ProductInfoResponseT, generalProuctInfotT } from "../../../types/general";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(z.object({ 
        username : z.string().min(4),
        name : z.string().min(3),
        surname : z.string().min(3),
        email : z.string().email(),
        password : z.string().min(6),
        naissance : z.date(),
        address : z.string().min(6),
        cin : z.string().min(7).max(9),
        tel : z.string().min(10).max(14).refine(validator.isNumeric)

    }
        


        ))
    .mutation(async ({ input ,ctx}) => {
      try{
        const r = await ctx.prisma.user.create({
          data : {
              name : input.name,
              surname : input.surname,
              email : input.email,
              username : input.username,
              password : encryptPassword(input.password),
              UserInformation : {
                create : {
                  naissance : input.naissance,
                  address : input.address,
                  cin : input.cin,
                  tel : input.tel
                }
              }
          }
        })

      }catch (e){
        console.log(e)
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          // The .code property can be accessed in a type-safe manner
          if (e.code === 'P2002') {
            console.log((e?.meta?.target as string[]).join(",") + " not unique")
            let field = (e?.meta?.target as string[]).join(",")
            if (field === "tel"){
              field = 'Votre Numéro de téléphone'
            }
            throw Error( field + " existe déjà")
          }
        }
        throw Error("something  wrong")

      }
      
    }),
  fetchProducts : publicProcedure
  .query(async ({ctx}) => {
    const products = await ctx.prisma.importedProduct.findMany({
       
    })
    const ids = products.map(e => e.productId)
    const resp = await ServerHandler.post("silentProducts/getinfo",{
      ids
    })
    if (resp.status === 200){
      const respData : ProductInfoResponseT[] = (resp.data as ProductInfoResponseT[]);
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
  
});


/* 

getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
*/