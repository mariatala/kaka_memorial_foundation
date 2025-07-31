// /lib/mail.ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Add this once, to fail fast if your creds are wrong:
transporter.verify()
  .then(() => console.log('🔌 SMTP connection OK'))
  .catch(err => console.error('❌ SMTP connection error', err));

export type Registration = {
  formType: string;
  name: string;
  phone: string;
  pointOfContact?: string;
  email?: string;
  address?: string;
  socialLinks?: string;
  message?: string;
};

export async function sendNotificationEmail(reg: Registration) {
  await transporter.sendMail({
    from: `"Kaka Foundation" <no-reply@kaka.org>`,
    to: process.env.NOTIFY_EMAIL,
    subject: `New ${reg.formType} registration`,
    text: `
      Name: ${reg.name}
      Phone: ${reg.phone}
      Contact: ${reg.pointOfContact || '—'}
      Email: ${reg.email || '—'}
      Address: ${reg.address || '—'}
      Links: ${reg.socialLinks || '—'}
      Message: ${reg.message || '—'}
    `,
  })
}
