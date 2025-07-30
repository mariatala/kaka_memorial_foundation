import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, subject, message } = data;

  // Configure Mailtrap transporter
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io", // or smtp.mailtrap.io for older accounts
    port: 587,
    auth: {
      user: process.env.SMTP_USER, // set in your .env.local
      pass: process.env.SMTP_PASS, // set in your .env.local
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "mariacherono@gmail.com", // Replace with your desired recipient
      subject: subject || "Contact Form Submission",
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}