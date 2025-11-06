import { CredentialsSignUp } from "@/components/auth/credentials-sign-up";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black p-4">
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
            <CardDescription>
              Sign up to get started with your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CredentialsSignUp />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

