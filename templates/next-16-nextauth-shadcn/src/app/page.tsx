import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getServerSession } from "@/lib/auth-server";
import { UserMenu } from "@/components/auth/user-menu";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex w-full items-center justify-between">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          {session ? (
            <UserMenu />
          ) : (
            <div className="flex gap-2">
              <Link href="/auth/signin">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            NextAuth.js Authentication
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This template includes NextAuth.js with Google, GitHub, and Credentials providers.
            {session ? (
              <>
                {" "}You are signed in! Visit the{" "}
                <Link
                  href="/dashboard"
                  className="font-medium text-zinc-950 dark:text-zinc-50 underline"
                >
                  dashboard
                </Link>{" "}
                to see your session details.
              </>
            ) : (
              <>
                {" "}Get started by{" "}
                <Link
                  href="/auth/signin"
                  className="font-medium text-zinc-950 dark:text-zinc-50 underline"
                >
                  signing in
                </Link>
                .
              </>
            )}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          {session ? (
            <Link href="/dashboard">
              <Button className="w-full md:w-[158px]">Go to Dashboard</Button>
            </Link>
          ) : (
            <Link href="/auth/signin">
              <Button className="w-full md:w-[158px]">Sign In</Button>
            </Link>
          )}
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://next-auth.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextAuth Docs
          </a>
        </div>
      </main>
    </div>
  );
}
