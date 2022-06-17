import { MailAdapters, SendMail } from "../mailAdapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "13810d23e12577",
    pass: "675e581e4cf0ca",
  },
});

export default class NodeMailerMailAdapters implements MailAdapters {
  async sendEmail({ subject, body }: SendMail) {
    await transport.sendMail({
      from: "Naruto <unarutouzumakihokage@gmail.com>",
      to: "unarutouzumakihokage@gmail.com",
      subject,
      html: body,
    });
  };
};