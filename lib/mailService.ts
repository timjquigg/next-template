import nodemailer, { Transporter } from "nodemailer";
// async..await is not allowed in global scope, must use a wrapper

const host = process.env.SMTP_HOST ?? "";
const port = Number(process.env.SMTP_PORT) ?? 587;
const user = process.env.SMTP_USERNAME ?? "";
const pass = process.env.SMTP_PASSWORD ?? "";
const sender = process.env.SMTP_SENDER ?? "";
const website = process.env.BASE_URL ?? "";

type Data = {
  email: string;
  subject: string;
  body: string;
};

export default async function sendEmail(data: Data): Promise<void> {
  console.log({ host }, { port }, { user }, { pass }, { sender }, { website });
  // create reusable transporter object using the default SMTP transport
  const transporter: Transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
  });

  // send mail with defined transport object
  try {
    const inquiry = await transporter.sendMail({
      from: sender, // sender address
      to: sender, // list of receivers
      subject: data.subject, // Subject line
      text: data.body, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });

    console.log(`Message sent: ${inquiry.messageId}`);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    const confirmation = await transporter.sendMail({
      from: sender,
      to: data.email,
      subject: "Thank you for reaching out",
      text: `Thank you for your inquiry at ${website}. We will get respond to you as soon as possible.`,
      // html:
    });

    console.log(`Message sent: ${confirmation.messageId}`);

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
}
