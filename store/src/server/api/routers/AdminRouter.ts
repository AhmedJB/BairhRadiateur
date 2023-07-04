import { z } from "zod";

import { createTRPCRouter, publicProcedure, adminProcedure } from "../trpc";

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
    })
});
