import { requireAuth } from "@/lib/auth-server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserMenu } from "@/components/auth/user-menu";

export default async function DashboardPage() {
  const session = await requireAuth();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="border-b bg-white dark:bg-black">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <UserMenu />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Welcome back!</CardTitle>
            <CardDescription>
              You are successfully authenticated with NextAuth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {session.user?.name || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {session.user?.email || "N/A"}
              </p>
              <p>
                <strong>User ID:</strong> {session.user?.id || "N/A"}
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

