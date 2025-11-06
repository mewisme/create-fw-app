import { SignInButton } from "@/components/auth/sign-in-button";
import { CredentialsSignIn } from "@/components/auth/credentials-sign-in";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black p-4">
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="oauth" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="oauth">OAuth</TabsTrigger>
                <TabsTrigger value="credentials">Email</TabsTrigger>
              </TabsList>
              <TabsContent value="oauth" className="mt-4">
                <SignInButton />
              </TabsContent>
              <TabsContent value="credentials" className="mt-4">
                <CredentialsSignIn />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

