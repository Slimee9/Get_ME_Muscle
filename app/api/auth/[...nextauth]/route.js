import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";

export const authoptions = NextAuth ({
    providers: [
        GithubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }), 
    ],
   callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if(account.provider =="github"){
                await connectDB();
                //ck user ex or not
                const currentUser = await  User.findOne({email: email})
                if(!currentUser){
                    const newUser = await User.create ({
                        email: user.email,
                        username: user.email.split("@")[0],
                    })
                    // user.name = newUser.username
                    // console.log(newUser)
                }
                // else{
                //     user.name = currentUser.username
                // }
                return true
            }
        },
        async session ({ session, user,token }) {
            await connectDB();
            const dbUser = await User.findOne({email: session.user.email})
            console.log(dbUser)
            session.user.name = dbUser.username    
                        
            return session 
        }
        }
        })

export { authoptions as GET, authoptions as POST}