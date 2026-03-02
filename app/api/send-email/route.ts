// app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

// Skema validasi menggunakan Zod
const contactSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
  email: z.string().email({ message: "Format email tidak valid" }),
  subject: z.string().min(1, { message: "Subjek harus diisi" }),
  message: z.string().min(1, { message: "Pesan harus diisi" }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const validation = contactSchema.safeParse(body);

  if (!validation.success) {
    const errors = validation.error.issues.map((issue) => ({
  field: issue.path[0],
  message: issue.message,
}));

    return NextResponse.json(
      { message: "Validasi gagal", errors },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = validation.data;

  try {
    await resend.emails.send({
      from: "Kontak Website <onboarding@resend.dev>",
      to: "ciracassdn14@gmail.com",
      subject: `[Kontak Website] ${subject}`,
      html: `
        <strong>Nama:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Pesan:</strong><br/>${message}
      `,
      replyTo: email,
    });

    return NextResponse.json({ message: "Email terkirim!" });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { message: "Gagal mengirim email." },
      { status: 500 }
    );
  }
}
