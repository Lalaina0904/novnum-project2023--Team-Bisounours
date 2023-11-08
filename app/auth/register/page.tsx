"use client";
import { User } from ".prisma/client";
import { useFormStatus } from "react-dom";
import { signup } from "@/app/actions/signup";

export default function Register(p: any) {
  console.log(p);
  return (
    <main>
      <form action={signup} className="flex flex-col gap-8">
        <div className="flex flex-grow-0 flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input required name="email" type="email" id="email" />
        </div>

        <div className="flex flex-grow-0 flex-col gap-2">
          <label htmlFor="name">Username</label>
          <input required name="name" type="text" id="name" />
        </div>

        <div className="flex flex-grow-0 flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input required name="password" type="password" id="password" />
        </div>

        <div className="flex flex-grow-0 flex-col gap-2">
          <label htmlFor="role">What are you</label>
          <select name="role" id="role" defaultValue="STUDENT">
            <option value="STUDENT">Student</option>
            <option value="TEACHER">Teacher</option>
          </select>
        </div>

        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </main>
  );
}

type SignUpFormData = Omit<User, "id">;
