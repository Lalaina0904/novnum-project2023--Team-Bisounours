"use client";
import z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  email: z.string(),
  name: z.string(),
  message: z.string().min(1),
});

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  async function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({
      title: "Success",
      description: "Message posted",
    });
  }

  return (
    <div className="container mx-auto my-16">
      <div className="container mx-auto my-24">
        <div className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 className="font-bol mb-6 text-3xl">Contact us</h2>
              <div className="mb-6">
                <p className="mb-3 font-semibold">
                  {" "}
                  We&apos;d Love to Hear From You!
                </p>

                <p>
                  Have questions, inquiries, or feedback? Get in touch with us
                  through the contact information provided below. Our dedicated
                  team is here to assist you and ensure your experience with us
                  is nothing short of exceptional.
                </p>
              </div>
              <p className="mb-2 text-foreground/60">
                Antananarivo, 101, Madagascar
              </p>
              <p className="mb-2 text-foreground/60">+ 261 34 49 000 00</p>
              <p className="mb-2 text-foreground/60">hayra@outlook.com</p>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
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
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
