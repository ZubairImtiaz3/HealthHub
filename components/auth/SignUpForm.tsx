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

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  fatherOrHusbandName: yup.string().required("F/H Name is required"),
  gender: yup.string().required("Gender is required"),
  mobileNumber: yup.string().required("Phone Number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  dateOfBirth: yup.date().required("Date of Birth is required"),
  password: yup.string().required("Password is required"),
});

export function SignUpForm() {
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
    console.log("Value changed to: ", value);
  };

  const onSubmit = (data: any) => {
    // Handle form submission
    console.log(data);
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
      <div className="grid grid-cols-2 gap-4 items-baseline">
        <div className="grid gap-2">
          <Label htmlFor="f/hNAme">Father/Husband Name</Label>
          <Input
            id="f/hNAme"
            placeholder="Martin"
            {...register("fatherOrHusbandName")}
          />
          {errors.fatherOrHusbandName && (
            <span className="text-red-500 text-sm">
              {errors.fatherOrHusbandName.message}
            </span>
          )}
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
            <span className="text-red-500 text-sm">
              {errors.gender.message}
            </span>
          )}
        </div>
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
        <Label htmlFor="date">Date Of Birth</Label>
        <Input id="date" type="date" {...register("dateOfBirth")} />
        {errors.dateOfBirth && (
          <span className="text-red-500 text-sm">{"DOB is required"}</span>
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
      <Button type="submit" className="w-full">
        Create an account
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
