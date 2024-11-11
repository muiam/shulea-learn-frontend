export async function middleware(request: { url: string | URL | undefined }) {}
export const config = {
  matcher: "/learner/:path*",
};
