import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">BLITZ</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/dashboard" className="text-foreground/60 transition-colors hover:text-foreground">
            Dashboard
          </Link>
          <Link href="/settings" className="text-foreground/60 transition-colors hover:text-foreground">
            Settings
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

