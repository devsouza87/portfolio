import Image from "next/image";
import { CodeXml } from "lucide-react";
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
      "Plataforma para compra, venda e exibição de veículos com filtros avançados.",
    image: "/project_construction_thumbnail.png",
    liveUrl: "https://seu-projeto-1.vercel.app",
    githubUrl: "https://github.com/seu-usuario/projeto-1",
  },
  {
    id: 2,
    title: "Dev Post",
    description:
      "API de rede social estilo X/Twitter com autenticação JWT, Prisma e PostgreSQL.",
    image: "/project_construction_thumbnail.png",
    liveUrl: "https://seu-projeto-2.vercel.app",
    githubUrl: "https://github.com/seu-usuario/projeto-2",
  },
  {
    id: 3,
    title: "Dev Store",
    description:
      "E-commerce backend/fullstack com gestão de categorias, produtos e slugs.",
    image: "/project_construction_thumbnail.png",
    liveUrl: "https://seu-projeto-3.vercel.app",
    githubUrl: "https://github.com/seu-usuario/projeto-3",
  },
  {
    id: 4,
    title: "Dev Stock",
    description:
      "Sistema de gerenciamento e controle de estoque de produtos em tempo real.",
    image: "/project_construction_thumbnail.png",
    liveUrl: "https://seu-projeto-4.vercel.app",
    githubUrl: "https://github.com/seu-usuario/projeto-4",
  },
  {
    id: 5,
    title: "Elas Por Aí",
    description:
      "Aplicação web para localização de espaços e eventos seguros para mulheres com mapas interativos.",
    image: "/project_construction_thumbnail.png",
    liveUrl: "https://seu-projeto-5.vercel.app",
    githubUrl: "https://github.com/seu-usuario/projeto-5",
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
              className="border-gray-800 bg-gray-800 text-gray-100 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <CardHeader className="p-0">
                  <div className="relative w-full h-48 sm:h-52 bg-gray-900 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-300 hover:scale-105"
                      priority={project.id <= 2}
                    />
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
                  disabled
                  className="flex-1 bg-blue-400/30 text-gray-400 cursor-not-allowed font-medium hover:bg-blue-400/30 pointer-events-auto"
                >
                  <span className="flex items-center justify-center gap-2 cursor-not-allowed">
                    <CodeXml className="h-4 w-4" />
                    Ver Projeto
                  </span>
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  disabled
                  className="flex-1 border-gray-700 bg-transparent text-gray-500 cursor-not-allowed hover:bg-transparent pointer-events-auto"
                >
                  <span className="flex items-center justify-center gap-2 cursor-not-allowed">
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import { CodeXml } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Button } from "./ui/button";

// const projects = [
//   {
//     id: 1,
//     title: "Web Carros",
//     description:
//       "Plataforma para compra, venda e exibição de veículos com filtros avançados.",
//     image: "/project_construction_thumbnail.png",
//     liveUrl: "https://seu-projeto-1.vercel.app",
//     githubUrl: "https://github.com/seu-usuario/projeto-1",
//   },
//   {
//     id: 2,
//     title: "Dev Post",
//     description:
//       "API de rede social estilo X/Twitter com autenticação JWT, Prisma e PostgreSQL.",
//     image: "/project_construction_thumbnail.png",
//     liveUrl: "https://seu-projeto-2.vercel.app",
//     githubUrl: "https://github.com/seu-usuario/projeto-2",
//   },
//   {
//     id: 3,
//     title: "Dev Store",
//     description:
//       "E-commerce backend/fullstack com gestão de categorias, produtos e slugs.",
//     image: "/project_construction_thumbnail.png",
//     liveUrl: "https://seu-projeto-3.vercel.app",
//     githubUrl: "https://github.com/seu-usuario/projeto-3",
//   },
//   {
//     id: 4,
//     title: "Dev Stock",
//     description:
//       "Sistema de gerenciamento e controle de estoque de produtos em tempo real.",
//     image: "/project_construction_thumbnail.png",
//     liveUrl: "https://seu-projeto-4.vercel.app",
//     githubUrl: "https://github.com/seu-usuario/projeto-4",
//   },
//   {
//     id: 5,
//     title: "Elas Por Aí",
//     description:
//       "Aplicação web para localização de espaços e eventos seguros para mulheres com mapas interativos.",
//     image: "/project_construction_thumbnail.png",
//     liveUrl: "https://seu-projeto-5.vercel.app",
//     githubUrl: "https://github.com/seu-usuario/projeto-5",
//   },
// ];

// export function ProjectsSection() {
//   return (
//     <section id="projects" className="py-16 border-t border-gray-800">
//       <div className="container mx-auto max-w-6xl px-4">
//         <h2 className="text-gray-600 text-2xl font-bold tracking-tight md:text-3xl mb-8">
//           Projetos
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <Card
//               key={project.id}
//               className="border-gray-800 bg-gray-800 text-gray-100 flex flex-col justify-between overflow-hidden"
//             >
//               <div>
//                 <CardHeader className="p-0">
//                   {/* Contêiner com altura adaptável (h-48 no mobile, h-52 em telas médias) */}
//                   <div className="relative w-full h-48 sm:h-52 bg-gray-900 overflow-hidden">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       className="object-cover object-center transition-transform duration-300 hover:scale-105"
//                       priority={project.id <= 2}
//                     />
//                   </div>
//                 </CardHeader>

//                 <CardContent className="p-6">
//                   <CardTitle className="text-lg font-semibold text-gray-100">
//                     {project.title}
//                   </CardTitle>
//                   <CardDescription className="mt-2 text-sm text-gray-400">
//                     {project.description}
//                   </CardDescription>
//                 </CardContent>
//               </div>
//               <div>
//                 <CardFooter className="p-6 flex gap-3 bg-gray-800">
//                   <Button
//                     size="sm"
//                     disabled // Desabilita o estado ativo do botão
//                     className="flex-1 bg-blue-400/50 text-gray-400 cursor-not-allowed font-medium hover:bg-blue-400/50"
//                   >
//                     <a
//                       href="#"
//                       onClick={(e) => e.preventDefault()} // Impede o clique/navegação
//                       className="flex items-center justify-center gap-2 cursor-not-allowed w-full h-full"
//                     >
//                       <CodeXml className="h-4 w-4" />
//                       Ver Projeto
//                     </a>
//                   </Button>

//                   <Button
//                     size="sm"
//                     variant="outline"
//                     disabled // Desabilita o estado ativo do botão
//                     className="flex-1 border-gray-700 bg-transparent text-gray-500 cursor-not-allowed hover:bg-transparent"
//                   >
//                     <a
//                       href="#"
//                       onClick={(e) => e.preventDefault()} // Impede o clique/navegação
//                       className="flex items-center justify-center gap-2 cursor-not-allowed w-full h-full"
//                     >
//                       <FaGithub className="h-4 w-4" />
//                       GitHub
//                     </a>
//                   </Button>
//                 </CardFooter>
//               </div>

//               {/* <CardFooter className="p-6 flex gap-3 bg-gray-800">
//                 <Button
//                   size="sm"
//                   className="flex-1 bg-blue-400 text-gray-950 hover:bg-blue-300 font-medium"
//                 >
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2"
//                   >
//                     <CodeXml className="h-4 w-4" />
//                     Ver Projeto
//                   </a>
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="flex-1 border-gray-700 bg-transparent text-gray-200 hover:bg-gray-800"
//                 >
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 cursor"
//                   >
//                     <FaGithub className="h-4 w-4" />
//                     GitHub
//                   </a>
//                 </Button>
//               </CardFooter> */}
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
