import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="text-center md:text-left">
            <div className="text-lg font-semibold">Volodymyr</div>
            <p className="text-sm text-muted-foreground">Electrical Engineering Student</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="mailto:Shchuryshyn@protonmail.com"
            className="text-muted-foreground hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/VSTimeless"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vstimeless/"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="container mt-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Volodymyr. All rights reserved.
      </div>
    </footer>
  )
}
