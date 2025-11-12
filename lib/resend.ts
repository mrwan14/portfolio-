import { Resend } from 'resend';

const resend = new Resend('re_B6chsdRK_Mikktum6vnmb6bJh6bKYNcEy');

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'marwanabdelwahab9@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      throw new Error(error.message || 'Failed to send email');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Resend error:', error);
    throw error;
  }
}

