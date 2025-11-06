export function validateAuthConfig(): void {
  const secret = process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET;
  
  if (!secret) {
    throw new Error("NEXTAUTH_SECRET environment variable is required");
  }

  if (secret.length < 32) {
    throw new Error("NEXTAUTH_SECRET should be at least 32 characters long");
  }
}

export function getClearSessionCookies(): string[] {
  return [
    "next-auth.session-token",
    "__Secure-next-auth.session-token",
    "next-auth.csrf-token",
    "__Host-next-auth.csrf-token",
    "next-auth.callback-url",
    "__Secure-next-auth.callback-url",
  ];
}

