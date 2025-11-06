import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import type { Session } from "next-auth";

export async function getServerSession(): Promise<Session | null> {
  const session = await auth();
  return session;
}

export async function requireAuth(): Promise<Session> {
  const session = await auth();
  
  if (!session) {
    redirect("/auth/signin");
  }
  
  return session;
}

export async function getCurrentUser() {
  const session = await auth();
  return session?.user ?? null;
}

export async function requireUser() {
  const session = await requireAuth();
  return session.user;
}

export async function isAuthenticated(): Promise<boolean> {
  const session = await auth();
  return !!session;
}

export async function getUserId(): Promise<string | null> {
  const session = await auth();
  return session?.user?.id ?? null;
}

export async function requireUserId(): Promise<string> {
  const user = await requireUser();
  if (!user.id) {
    redirect("/auth/signin");
  }
  return user.id;
}

