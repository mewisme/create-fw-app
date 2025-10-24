import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-32 px-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.svg"
              alt="FrameForge"
              width={64}
              height={64}
              className="h-16 w-16"
            />
            <h1 className="text-4xl font-bold tracking-tight">FrameForge</h1>
          </div>

          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold text-muted-foreground">
              Create Framework App
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              The easiest way to get started with your favorite web framework. Scaffold applications with prebuilt templates for Next.js, React.js, Vue.js, and more.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/create-fw-app">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
