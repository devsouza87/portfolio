"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-gray-600 text-2xl font-bold tracking-tight md:text-3xl">
          Contato
        </h2>
        <h3 className="mt-4 text-xl font-medium text-gray-200 md:text-2xl">
          Vamos Conversar!
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-gray-300">Nome</label>
              <Input
                placeholder="Seu nome"
                className="h-10 mt-1 border-gray-800 bg-gray-700 text-gray-100 placeholder:text-gray-500 focus-visible:ring-blue-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300">Email</label>
              <Input
                type="email"
                placeholder="seu.email@exemplo.com"
                className="h-10 mt-1 border-gray-800 bg-gray-700 text-gray-100 placeholder:text-gray-500 focus-visible:ring-blue-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300">
                Mensagem
              </label>
              <Textarea
                placeholder="Sua mensagem..."
                className="mt-1 h-32 border-zinc-800 bg-[#2A2A2A] text-white placeholder:text-zinc-500 focus-visible:ring-blue-400 resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-400 text-gray-950 hover:bg-blue-300 font-medium cursor-pointer"
            >
              Enviar
            </Button>
          </form>

          <div className="flex flex-col justify-start space-y-4 text-sm text-gray-400 md:pl-8">
            <div className="flex items-center gap-4">
              <MdOutlineEmail size={24} />
              <div>
                <span className="block font-medium text-gray-200">Email</span>
                <a href="mailto:email@seunome.com" className="hover:underline">
                  contato@cesaraugusto.dev
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp size={24} />
              <div>
                <span className="block font-medium text-gray-200">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/5527997489072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  27 9 9748-9072
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <CiLinkedin size={24} />
              <div>
                <span className="block font-medium text-gray-200">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/ocesaraugusto87/?isSelfProfile=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @ocesaraugusto87
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
