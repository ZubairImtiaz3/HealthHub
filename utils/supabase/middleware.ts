import signOut from '@/actions/signOut';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers
    }
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options
          });
          response = NextResponse.next({
            request: {
              headers: request.headers
            }
          });
          response.cookies.set({
            name,
            value,
            ...options
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options
          });
          response = NextResponse.next({
            request: {
              headers: request.headers
            }
          });
          response.cookies.set({
            name,
            value: '',
            ...options
          });
        }
      }
    }
  );

  const user = await supabase.auth.getUser();

  const { data: role } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.data.user?.id)
    .single();

  // Restrict routes based on role
  if (
    (role?.role === 'admin' || role?.role === 'superadmin') &&
    request.nextUrl.pathname.startsWith('/user-panel')
  ) {
    await signOut();
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (request.nextUrl.pathname === '/reset-password') {
    const token = request.nextUrl.searchParams.get('code');
    if (!token) {
      return NextResponse.redirect(new URL('/forgot-password', request.url));
    }
  }

  return response;
}
