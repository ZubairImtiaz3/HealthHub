import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const cookieStore = cookies();

    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    const origin = requestUrl.origin;

    if (code) {
        const supabase = createClient(cookieStore);
        await supabase.auth.exchangeCodeForSession(code);
    }

    // URL to redirect to after sign up process completes
    return NextResponse.redirect(`${origin}/user-panel`);
}
