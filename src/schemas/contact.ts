import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." })
    .max(50, { message: "O nome é demasiado longo." }),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." })
    .max(1000, { message: "A mensagem excedeu o limite de 1000 caracteres." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
