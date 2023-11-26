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
  }),
  handleFavorite : protectedProcedure
    .input(z.object({
      pid : z.string()
    }))
    .mutation(async ({input,ctx,}) => {
      try{
        const test = await ctx.prisma.favorites.findFirst({
          where : {
            userId : ctx.session.user.id,
            productId : input.pid
          }
        })
        if (!test){
          const f = await ctx.prisma.favorites.create({
            data : {
              userId : ctx.session.user.id,
              productId : input.pid
            }
          })
        }else {
          const f = await ctx.prisma.favorites.delete({
            where : {
              id : test.id
            }
          })
        }
        
      }catch (e) {
        throw Error("Failed Liking the product")
      }
    }),
  checkFavorite : protectedProcedure
    .input(z.object({
      pid : z.string()
    }))
    .query(async ({input,ctx}) => {
      try{
        const f = await ctx.prisma.favorites.findFirstOrThrow({
          where : {
            userId : ctx.session.user.id,
            productId : input.pid  
          }
        })
        return {status : true}
      }catch (e){
        console.log("Error Checking favorite")
        //console.log(e)
        return {status : false}
      }
    }),
  getFavorites : protectedProcedure
    .query(async ({input,ctx}) => {
      try{
        const f = await ctx.prisma.favorites.findMany({
          where : {
            userId : ctx.session.user.id
          },
          include : {
            ImportedProduct : true
          }
        })
        const products = f.map(e => e.ImportedProduct);
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
      }catch (e) {
        return []
      }
    }),
  getMarks : publicProcedure
    .query(async ({ctx}) =>{
      try{
        const res = await  ctx.prisma.mark.findMany();
        return res;
      }catch(e){
        return [];
      }
    }),
  getTubes : publicProcedure
  .query(async ({ctx}) =>{
    try{
      const res = await  ctx.prisma.tube.findMany();
      return res;
    }catch(e){
      return [];
    }
  }),
  getUserInfo : protectedProcedure
    .query(async ({ctx}) => {
      try{
        const ud = await ctx.prisma.user.findUnique({
          where : {
            id : ctx.session.user.id
          },
          include : {
            UserInformation : true
          }
        })
        return ud
      }catch {
        return null
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