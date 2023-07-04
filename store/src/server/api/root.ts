import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { authRouter } from "./routers/AuthRouter";
import { AdminRouter } from "./routers/AdminRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  authHandler : authRouter,
  adminHandler: AdminRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
