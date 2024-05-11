import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Link from "next/link"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    
  }
})