import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if the path starts with /admin
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // Exclude the login page itself to avoid infinite loop
        if (request.nextUrl.pathname === '/admin/login') {
            return NextResponse.next();
        }

        // Check for the admin_token cookie
        const token = request.cookies.get('admin_token')?.value;

        // If no token (or invalid logic if you had a real JWT), redirect to login
        if (!token) {
            const loginUrl = new URL('/admin/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
