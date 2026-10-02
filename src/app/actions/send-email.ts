"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Por favor, preencha todos os campos." };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfólio <contato@cesaraugusto.dev>",
      to: ["contato@cesaraugusto.dev"],
      subject: `Nova mensagem de contato: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Nova mensagem enviada pelo Portfólio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Erro ao enviar a mensagem." };
  }
}
