import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
// import useUser from "../../../services/data-service/useUser";

export default NextAuth({

    providers: [
        GoogleProvider({
            clientId: "463437246940-2m6t20pcvkserhlnmd3k5gkiqe1krs80.apps.googleusercontent.com",
            clientSecret: "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",
        })
    ],

    secret: "5790630fdcee1c45560d2fdb698d8ff7",

    pages: {
        signIn: "/auth/signin",
    },

    callbacks: {
        async session({ session, token, user }) {
            // const { setUserId } = useUser();
            const sessionUser = session!.user as any;
            sessionUser.username = (session?.user?.name || "").split(" ")
                .join("").toLocaleLowerCase();
            sessionUser.uid = token.sub;
            // if (setUserId) {
            //     setUserId(token.sub);
            // }
            return session;
        }
    }

    //   theme: {
    //       logo: "https://links.papareact.com/jjm",
    //       brandColor: "#f113287",
    //       colorScheme: "auto"
    //   }
})


// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import EmailProvider from "next-auth/providers/email"

// export default NextAuth({
//     // Configure one or more authentication providers
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID || "",
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//         })
//         // ...add more providers here
//     ],

//     secret: process.env.SECRET,

//     pages: {
//         signIn: "/auth/signin",
//     },

//     callbacks: {
//         async session({ session, token, user }) {
//             const sessionUser = session!.user as any;
//             sessionUser.username = (session?.user?.name || "").split(" ")
//                 .join("").toLocaleLowerCase();
//             sessionUser.uid = token.sub;
//             return session;
//         }
//     }

//     //   theme: {
//     //       logo: "https://links.papareact.com/jjm",
//     //       brandColor: "#f113287",
//     //       colorScheme: "auto"
//     //   }
// })