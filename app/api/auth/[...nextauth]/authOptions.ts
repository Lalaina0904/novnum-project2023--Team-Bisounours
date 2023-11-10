import {PrismaAdapter} from "@auth/prisma-adapter";
import {db} from "@/prisma/client";
import {Adapter} from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import {NextAuthOptions} from "next-auth";

export const authOptions = {
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "theo@gmail.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                const { email, password } = credentials!;
                const user = await db.user.findUnique({
                    where: { email },
                });

                if (!user) {
                    throw new Error(JSON.stringify({ code: 404 }));
                }

                const passwordMatch = await bcrypt.compare(password, user.password);

                if (!passwordMatch) {
                    throw new Error(JSON.stringify({ code: 401 }));
                }

                return user;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    role: user.role,
                    id: user.id,
                };
            }
            return token;
        },

        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    role: token.role
                }
            };
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
} satisfies NextAuthOptions;
