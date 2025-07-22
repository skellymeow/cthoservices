import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center py-4 border-t text-sm">
      <div className="flex flex-col items-center justify-center py-8 px-4 gap-2">
        <div className="flex flex-col items-center justify-center mb-2">
          <Link href="/">
            <Image
              src="/cthoworkwhitetext.png"
              alt="Logo"
              width={126}
              height={38}
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <p className="text-base text-muted-foreground text-center max-w-xl">Launch your business online in weeks. Fast, clean, and hassle-free—no agency circus.</p>
        <p className="text-xs text-muted-foreground text-center mt-2">© {new Date().getFullYear()} Christian Thompson. All rights reserved.</p>
        <a href="/privacy" className="ml-2 text-[#6017EA] underline hover:text-[#7c3aed] transition-colors">Privacy Policy</a>
      </div>
    </footer>
  );
} 