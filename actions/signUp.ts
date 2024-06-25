"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { SignUpProfile } from "@/types/auth";

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export const SignUpSubmit = async (SignUpData: SignUpProfile) => {
  const { data, error } = await supabase
    .from("profiles")
    .insert([SignUpData])
    .select();

  return { data, error };
};
