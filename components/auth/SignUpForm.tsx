"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

import { createClient } from "@/utils/supabase/client";
import { SignUpSubmit } from "@/actions/signUp";
import { useState } from "react";
import { Icons } from "@/components/ui/icons";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  gender: yup.string().required("Gender is required"),
  mobileNumber: yup.string().required("Phone Number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

interface FormData {
  firstName: string;
  lastName: string;
  gender: string;
  mobileNumber: string;
  email: string;
  password: string;
}

export function SignUpForm() {
  const { toast } = useToast();
  const router = useRouter();
  const supabase = createClient();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleValueChange = (value: string) => {
    setValue("gender", value);
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      const {
        data: { user },
        error: signUpError,
      } = await supabase.auth.signUp({
        email: data?.email,
        password: data?.password,
        // options: {
        //   emailRedirectTo: "http://localhost:3000/signup/confirm",
        // },
      });

      if (signUpError) {
        toast({
          title: "Something Went Wrong.",
          description: signUpError.message,
        });
        setIsLoading(false);
        return;
      }

      const userId = user ? user.id : "";

      const { error: profileError } = await SignUpSubmit({
        id: userId,
        first_name: data?.firstName,
        last_name: data?.lastName,
        gender: data?.gender,
        phone_number: data?.mobileNumber,
        email: data?.email,
      });

      if (profileError) {
        toast({
          title: "Something Went Wrong.",
          description: profileError.message,
        });
      } else {
        toast({
          title: "Account Registered Successfully.",
          description: "Redirecting to your Dashboard",
        });
        router.push("/user-panel");
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2 items-baseline">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" placeholder="Max" {...register("firstName")} />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className="grid gap-2 items-baseline">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            id="last-name"
            placeholder="Robinson"
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gender">Gender</Label>
        <Select onValueChange={handleValueChange}>
          <SelectTrigger id="gender" aria-label="Select Gender">
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
        {errors.gender && (
          <span className="text-red-500 text-sm">{errors.gender.message}</span>
        )}
      </div>

      <div className="grid gap-2 items-baseline">
        <Label htmlFor="mobileNumber">Phone Number</Label>
        <Input
          id="mobileNumber"
          type="number"
          placeholder="+923"
          {...register("mobileNumber")}
        />
        {errors.mobileNumber && (
          <span className="text-red-500 text-sm">
            {errors.mobileNumber.message}
          </span>
        )}
      </div>
      <div className="grid gap-2 items-baseline">
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
      <div className="grid gap-2 items-baseline">
        <Label htmlFor="password">Password</Label>
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
          "Sign Up"
        )}
      </Button>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </div>
    </form>
  );
}
