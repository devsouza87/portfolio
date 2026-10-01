import Link from "next/link";
import { Button } from "./ui/button";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#121212]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-black tracking-wider">
          PORTFOLIO
        </Link>
        <nav className="hidden items-center gap-6 text-md font-medium text-zinc-400 md:flex">
          <Link href="#sobre" className="transition-colors hover:text-white">
            Sobre
          </Link>
          <Link href="#projetos" className="transition-colors hover:text-white">
            Projetos
          </Link>
          <Link href="#contato" className="transition-colors hover:text-white">
            contato
          </Link>
        </nav>
        <Button
          className={`bg-blue-400 text-zinc-950 hover:bg-blue-300 font-medium`}
        >
          <a href="">Download CV</a>
        </Button>
      </div>
    </header>
  );
}
