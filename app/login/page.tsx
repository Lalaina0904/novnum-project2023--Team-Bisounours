"use client";

import z from "zod";
import { ErrorOption, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});

export default function Login() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if (response?.error) {
      const { code } = JSON.parse(response.error) as { code: number };

      const error = errorCodeMap[code as keyof typeof errorCodeMap];

      form.setError(...error);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="container h-[calc(100vh-320px)]">
      <div className="flex h-full flex-grow items-center justify-center">
        <div className="mx-auto w-full max-w-[375px]">
          <div className="my-8">
            <h1 className="mb-2 text-3xl">Good to see you again</h1>
            <p className="text-foreground/90">Do great stuff ✨</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="theo@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>

          <div className="mt-4">
            <Link href="/register" className="underline">
              I don&apos;t have an account yet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const errorCodeMap: Record<
  number,
  [keyof z.infer<typeof formSchema>, ErrorOption]
> = {
  [404]: ["email", { message: "User not found please verify email address" }],
  [401]: ["password", { message: "Password do not match" }],
};
