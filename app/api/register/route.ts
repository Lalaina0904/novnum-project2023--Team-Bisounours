import bcrypt from "bcrypt";
import { db } from "@/prisma/client";
import { NextResponse } from "next/server";
import { User } from ".prisma/client";

export async function POST(req: Request) {
  const registerData = (await req.json()) as User;

  const exist = await db.user.findUnique({
    where: { email: registerData.email },
  });

  if (exist) {
    return new NextResponse("User already exists", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(registerData.password, 10);

  const newUser = await db.user.create({
    data: {
      email: registerData.email,
      password: hashedPassword,
      name: registerData.name,
      role: registerData.role,
    },
  });

  return NextResponse.json(newUser);
}
