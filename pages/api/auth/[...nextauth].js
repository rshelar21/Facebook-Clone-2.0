import NextAuth  from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
          }),

          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],
    callbacks: {
      async session({ session, token, user }) {
        // Send properties to the client, like an access_token and user id from a provider.
        session.accessToken = token.accessToken
        session.user.id = token.sub

        return session
      }
    }
    
  }
  export default NextAuth(authOptions)