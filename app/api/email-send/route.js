import { EmailTemplate } from "@/components/email-templates";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

resend.emails.send({
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});

export async function POST(req) {
  try {
    // Parse incoming data
    const { firstName, lastName, email, phone, message } = await req.json();

    console.log({ firstName, lastName, email, phone, message });

    if (!firstName || !lastName || !email || !phone || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const subject = `A new message from ${firstName} ${lastName}`;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ruhulamin15jun1999@gmail.com",
      subject,
      react: EmailTemplate({ firstName, lastName, phone, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    // console.log(data);

    return Response.json({ success: true, data, status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
