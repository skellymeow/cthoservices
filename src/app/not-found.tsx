import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 sm:py-3">
        <div className="container-lg flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/cthoworkwhitetext.png"
              alt="Cthowork Logo"
              width={220}
              height={70}
              className="h-16 sm:h-20 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-muted-foreground text-lg mb-4">Page not found.</p>
          <Link href="/" className="text-[#6017EA] underline hover:text-[#4F14B8] transition-colors text-sm">Go to homepage</Link>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-background border-t border-border/20 mt-8">
        <div className="max-w-2xl mx-auto flex flex-col items-center py-8 gap-2">
          <Image
            src="/cthoworkwhitetext.png"
            alt="Cthowork Logo"
            width={120}
            height={36}
            className="object-contain mb-2"
            priority
          />
          <p className="text-xs text-muted-foreground text-center">© {new Date().getFullYear()} Christian Thompson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 