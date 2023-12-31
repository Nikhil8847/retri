import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: AuthOptions = {
   providers: [
      GithubProvider({
         clientId: "",
         clientSecret: "",
      }),
      GoogleProvider({
         clientId: "",
         clientSecret: "",
      }),
      CredentialsProvider({
         name: "credentials",
         credentials: {
            email: {
               type: "text",
            },
            password: {
               type: "password",
            },
         },
         authorize: ({credentials}, req){
            if(!credentials || !credentials.email || !credentials.password){
               return null;
            }
            
         }
      }),
   ],
   secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
