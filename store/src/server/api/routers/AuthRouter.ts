import { z } from "zod";
import validator from "validator"

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { encryptPassword } from "../../../utils/helpers";
import { Prisma } from "@prisma/client";

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
        let r = await ctx.prisma.user.create({
          data : {
              name : input.name,
              surname : input.surname,
              email : input.email,
              username : input.username,
              password : encryptPassword(input.password),
              userinfo : {
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

      }
      
    }),

  
});


/* 

getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
*/