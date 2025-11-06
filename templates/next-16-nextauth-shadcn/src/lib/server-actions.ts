"use server";

import { auth, signIn, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function signInAction(provider: string, formData?: FormData) {
  try {
    if (provider === "credentials") {
      const email = formData?.get("email") as string;
      const password = formData?.get("password") as string;
      
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        return { error: "Invalid credentials" };
      }

      if (result?.ok) {
        revalidatePath("/");
        redirect("/dashboard");
      }
    } else {
      await signIn(provider, { redirectTo: "/dashboard" });
    }
  } catch (error) {
    return { error: "An error occurred during sign in" };
  }
}

export async function signOutAction() {
  try {
    await signOut({ redirectTo: "/" });
    revalidatePath("/");
  } catch (error) {
    return { error: "An error occurred during sign out" };
  }
}

export async function getSessionAction() {
  try {
    const session = await auth();
    return { session };
  } catch (error) {
    return { session: null, error: "Failed to get session" };
  }
}

