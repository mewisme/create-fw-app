import { handlers } from "@/lib/auth";
import { validateAuthConfig } from "@/lib/auth-utils";

if (process.env.NODE_ENV !== "production") {
  try {
    validateAuthConfig();
  } catch (error) {
    throw error;
  }
}

export const { GET, POST } = handlers;

