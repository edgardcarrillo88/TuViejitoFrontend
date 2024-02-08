import GoogleProvider from "next-auth/providers/google";
import nextAuth from "next-auth";


const handler = nextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]
})

export { handler as GET, handler as POST }
