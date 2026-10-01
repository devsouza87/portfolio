import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { NavBar } from "@/components/NavBar";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © Cesar Augusto. Todos os direitos reservados. 2026.
      </footer>
    </div>
  );
}
