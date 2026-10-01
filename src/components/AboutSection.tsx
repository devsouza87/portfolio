import { Badge } from "./ui/badge";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Git",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-gray-600 text-2xl font-bold tracking-tight md:text-3xl">
          Sobre
        </h2>
        <h3 className="mt-4 text-xl font-medium text-gray-200 md:text-2xl">
          Olá, me chamo Cesar Augusto.
        </h3>
        <p className="mt-4 leading-relaxed text-gray-400">
          Graduado em Análise e Desenvolvimento de Sistemas, sou um profissional
          focado em criar soluções funcionais e bem estruturadas. Tenho-me
          dedicado a dominar o ecossistema JavaScript/TypeScript moderno,
          desenvolvendo aplicações Full Stack que unem interfaces dinâmicas em
          React e Next.js a APIs e bancos de dados estruturados com Node.js e
          SQL.
        </p>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-200">Habilidades</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-gray-700 px-5 py-3 text-sm font-normal text-gray-200 hover:bg-gray-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
