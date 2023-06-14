import NextAuth, { Profile, type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
import bcrypt from "bcryptjs"
import { JWT  } from "next-auth/jwt/types.js";
import { Account } from "next-auth";
import { User } from "@prisma/client";



const encryptPassword = (pass : string) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(pass, salt);
  return hash;
}

type Params = {
  token : JWT ;
  account : Account | null | undefined ;
  user : User | null | undefined ;
  profile : Profile | null | undefined
}

type newToken = {
  name : string;
  email : string;
  sub : string;
  id : string;
  username : string;
  surname : string;
  iat : number;
  exp : number;
  jti : string;
  isAdmin : boolean;
}


export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user,token }) {
      let newtoken = token as newToken;

      console.log("session callback")
      console.log(session)
      console.log(token)
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as User).username  = newtoken.username;
        (session.user as User).email  = newtoken.email;
        (session.user as User).name  = newtoken.name;
        (session.user as User).surname = newtoken.surname;
        (session.user as User).isAdmin = newtoken.isAdmin;
        
      }
      return session;
    },
    async jwt({ token, account, user , profile }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = user?.id
        token.name = user?.name
        token.username = ( user as User ).username 
        token.surname = ( user as User).surname
        token.isAdmin = ( user as User).isAdmin;
      }
      return token
    }
  },
  session: {
    strategy: "jwt",
  },
  /* jwt: {
    async encode({ token }) {
      console.log(token)
      return jwt.sign(token as {}, process.env.JWT_SECRET!);
    },
    async decode({ token }) {
      return jwt.verify(token!, process.env.JWT_SECRET!) as JWT;
    },
  }, */
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [

    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
      },
      async authorize(credentials, req) {
        let {email ,password } = credentials as {
          email : string,
          password : string
        }
        //console.log(encryptPassword(password))
        // Add logic here to look up the user from the credentials supplied
        let user = await prisma.user.findUnique({
          where : {
            email : email
          }
        })

        if (!user){
          user = await prisma.user.findUnique({
            where : {
              username : email
            }
          })
        }

  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          let comparison = await bcrypt.compare(password, user.password);
          if (comparison){
            console.log("valid password")
            let u = {
              id : user.id,
              email : user.email,
              name : user.name,
              username : user.username,
              isAdmin : user.isAdmin
            }
            return u
          }else{
            throw Error("Email or Password incorrect")
          }
          
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          throw Error("Email or Password incorrect")
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })


    /* DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }), */
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

export default NextAuth(authOptions);
