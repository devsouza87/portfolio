import Link from "next/link";
import { Button } from "./ui/button";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-gray-200 text-lg font-bold tracking-wider"
        >
          PORTFOLIO
        </Link>
        <nav className="hidden items-center gap-6 text-md font-medium text-gray-400 md:flex">
          <Link href="#about" className="transition-colors hover:text-gray-200">
            Sobre
          </Link>
          <Link
            href="#projects"
            className="transition-colors hover:text-gray-200"
          >
            Projetos
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-gray-200"
          >
            contato
          </Link>
        </nav>
        <Button
          className={`bg-blue-400 text-gray-800 hover:bg-blue-300 font-medium`}
        >
          <a href="">Download CV</a>
        </Button>
      </div>
    </header>
  );
}
