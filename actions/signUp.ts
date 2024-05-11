"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { SignUpProfile } from "@/types/auth";

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export const SignUpSubmit = async (SignUpData: SignUpProfile) => {
    // Get authenticated user
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
        .from("profiles")
        .upsert([
            {
                id: user?.id,
                ...SignUpData,
            },
        ])
        .select();

    return { data, error };
};
