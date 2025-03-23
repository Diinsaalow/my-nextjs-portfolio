import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Dilnsaalow. All rights reserved.</p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

