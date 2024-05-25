import { OnBoardingForm } from "@/components/auth/OnBoardingForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import { checkOnBoard } from "@/utils/supabase/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const onBoardStatus = await checkOnBoard();
  if (onBoardStatus !== true) {
    redirect("/");
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userEmail = user?.email;

  console.log(userEmail);

  return (
    <>
      <div className="flex flex-col justify-center h-[100vh] pt-6 p-8">
        <h2 className="text-3xl font-bold tracking-tight">Welcome Aboard!</h2>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Let&apos;s Get Started!</CardTitle>
            <CardDescription>
              Provide your personal details below to ensure accurate information
              throughout the system. Remember, you can edit these details in the
              settings later for any updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OnBoardingForm userEmail={userEmail} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;
