"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { createClient } from "@/utils/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/ui/icons";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

interface FormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const supabase = createClient();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: data?.email,
      password: data?.password,
    });

     const { data: role } = await supabase
       .from("profiles")
       .select("role")
       .eq("id", user.user?.id)
       .single();

     if (!error && role?.role === "user") {
       toast({
         title: "Login Successfully.",
         description: "Redirecting to your Dashboard",
       });
       router.push("/user-panel");
     } else {
       toast({
         title: "Something Went Wrong.",
         description: "Unable to login at this time",
       });
     }
    setIsLoading(false);
  };

  async function signInWithGoogle() {
    toast({
      title: "Please Wait...",
      description: "Logging in with Google",
    });

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_ORIGIN}/google-auth`,
      },
    });

    if (error) {
      toast({
        title: "Something Went Wrong.",
        description: error.message,
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <Button disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
      <Button onClick={signInWithGoogle} variant="outline" className="w-full">
        Login with Google
      </Button>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </div>
    </>
  );
}
