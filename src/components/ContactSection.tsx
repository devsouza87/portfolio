"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import { sendEmailAction } from "@/app/actions/send-email";
import { contactSchema, type ContactFormData } from "@/schemas/contact";

export function ContactSection() {
  const [feedback, setFeedback] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setFeedback(null);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const result = await sendEmailAction(formData);

    if (result.success) {
      setFeedback({
        success: true,
        message: "Mensagem enviada com sucesso! Em breve entrarei em contato.",
      });
      reset();
    } else {
      setFeedback({
        success: false,
        message: result.error || "Erro ao enviar a mensagem. Tente novamente.",
      });
    }
  }

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
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm font-medium text-gray-300">Nome</label>
              <Input
                {...register("name")}
                placeholder="Seu nome"
                className={`h-10 mt-1 border-gray-800 bg-gray-700 text-gray-100 placeholder:text-gray-500 focus-visible:ring-blue-300 ${
                  errors.name
                    ? "border-rose-500 focus-visible:ring-rose-500"
                    : ""
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">Email</label>
              <Input
                {...register("email")}
                type="email"
                placeholder="seu.email@exemplo.com"
                className={`h-10 mt-1 border-gray-800 bg-gray-700 text-gray-100 placeholder:text-gray-500 focus-visible:ring-blue-300 ${
                  errors.email
                    ? "border-rose-500 focus-visible:ring-rose-500"
                    : ""
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">
                Mensagem
              </label>
              <Textarea
                {...register("message")}
                placeholder="Sua mensagem..."
                className={`mt-1 h-32 border-zinc-800 bg-[#2A2A2A] text-white placeholder:text-zinc-500 focus-visible:ring-blue-400 resize-none ${
                  errors.message
                    ? "border-rose-500 focus-visible:ring-rose-500"
                    : ""
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-rose-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-400 text-gray-950 hover:bg-blue-300 font-medium cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>

            {feedback && (
              <p
                className={`text-sm ${feedback.success ? "text-emerald-400" : "text-rose-400"}`}
              >
                {feedback.message}
              </p>
            )}
          </form>

          <div className="flex flex-col justify-start space-y-4 text-sm text-gray-400 md:pl-8">
            <div className="flex items-center gap-4">
              <MdOutlineEmail size={24} className="text-gray-200" />
              <div>
                <span className="block font-medium text-gray-200">Email</span>
                <a
                  href="mailto:contato@cesaraugusto.dev"
                  className="hover:underline transition-colors hover:text-blue-300"
                >
                  contato@cesaraugusto.dev
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp size={24} className="text-emerald-400" />
              <div>
                <span className="block font-medium text-gray-200">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/5527997489072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors hover:text-emerald-400"
                >
                  +55 27 9 9748-9072
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <CiLinkedin size={24} className="text-blue-400" />
              <div>
                <span className="block font-medium text-gray-200">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/ocesaraugusto87/?isSelfProfile=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors hover:text-blue-400"
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
