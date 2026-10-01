import { CodeXml, ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    title: "Web Carros",
    description:
      "Descrição curta do projeto apresentando os principais recursos e tecnologias utilizadas.",
    liveUrl: "https://seu-projeto-1.vercel.app",
    githubUrl: "https://github.com/seu-usuario/projeto-1",
  },
  {
    id: 2,
    title: "Dev Post",
    description:
      "Descrição curta do projeto apresentando os principais recursos e tecnologias utilizadas.",
    liveUrl: "https://seu-projeto-2.vercel.app",
    githubUrl: "https://github.com/seu-usuario/projeto-2",
  },
  {
    id: 3,
    title: "Dev Store",
    description:
      "Descrição curta do projeto apresentando os principais recursos e tecnologias utilizadas.",
    liveUrl: "https://seu-projeto-3.vercel.app",
    githubUrl: "https://github.com/seu-usuario/projeto-3",
  },
  {
    id: 4,
    title: "Dev Stock",
    description:
      "Descrição curta do projeto apresentando os principais recursos e tecnologias utilizadas.",
    liveUrl: "https://seu-projeto-3.vercel.app",
    githubUrl: "https://github.com/seu-usuario/projeto-3",
  },
  {
    id: 5,
    title: "Elas por ai",
    description:
      "Descrição curta do projeto apresentando os principais recursos e tecnologias utilizadas.",
    liveUrl: "https://seu-projeto-3.vercel.app",
    githubUrl: "https://github.com/seu-usuario/projeto-3",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-gray-600 text-2xl font-bold tracking-tight md:text-3xl mb-8">
          Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-gray-800 bg-gray-800 text-gray-100 flex flex-col justify-between"
            >
              <div>
                <CardHeader>
                  <div className="flex h-48 w-full items-center justify-center rounded-t-lg bg-gray-700">
                    <ImageIcon className="h-10 w-10 text-gray-500" />
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-lg font-semibold text-gray-100">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </div>
              <CardFooter className="p-6 flex gap-3 bg-gray-800">
                <Button
                  size="sm"
                  className="flex-1 bg-blue-400 text-gray-950 hover:bg-blue-300"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <CodeXml className="h-32 w-32" />
                    Ver Projeto
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-gray-700 bg-transparent text-gray-200 hover:bg-gray-800"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
