"use server";

import { db } from "@/prisma/client";
import { User } from "@prisma/client";

export const signup = async (formData: FormData) => {
  const { role, password, name, email } = Object.fromEntries(formData) as Omit<
    User,
    "id"
  >;

  try {
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });

    console.log(newUser);
    return newUser;
  } catch (e) {
    console.log(e);
    return null;
  }
};
