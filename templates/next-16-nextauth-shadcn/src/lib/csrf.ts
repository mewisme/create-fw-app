import { cookies } from "next/headers";

export async function getCsrfToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const csrfToken = cookieStore.get(
    process.env.NODE_ENV === "production"
      ? "__Host-next-auth.csrf-token"
      : "next-auth.csrf-token"
  );
  return csrfToken?.value ?? null;
}

export async function validateCsrfToken(token: string): Promise<boolean> {
  const storedToken = await getCsrfToken();
  if (!storedToken) return false;
  
  return storedToken === token;
}

