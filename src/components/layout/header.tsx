import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  return (
    <header className=" w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg font-headline">My Portofolio</span>
        </a>
        <nav className="flex items-center">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
