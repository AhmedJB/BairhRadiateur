import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { encryptPassword } from "../../../utils/helpers";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(z.object({ 
        username : z.string(),
        name : z.string().min(6),
        email : z.string().email(),
        password : z.string().min(6),
        naissance : z.date(),
        address : z.string().min(6),
        cin : z.string().min(7)

    }
        


        ))
    .mutation(({ input ,ctx}) => {
      ctx.prisma.user.create({
        data : {
            name : input.name,
            email : input.email,
            username : input.username,
            password : encryptPassword(input.password),
            userinfo : {
              create : {
                naissance : input.naissance,
                address : input.address,
                cin : input.cin
              }
            }
        }
      }).then(() => console.log("created user"))
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