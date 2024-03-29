import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id : string,
      username : string,
      name : string,
      surname :string,
      email : string,
      isAdmin : boolean
    }
  }





}


/* 
{
      id: string;
    } & DefaultSession["user"];

*/