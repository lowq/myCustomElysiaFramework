import nodemailer from "nodemailer";

export class Mailer {
  static configOptions = {
    pool: true,
    host: Bun.env.SMTP_HOST,
    port: Bun.env.SMTP_PORT,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: Bun.env.SMTP_USER,
      pass: Bun.env.SMTP_PASS,
    },
  };
  static transporter = nodemailer.createTransport(
    this.configOptions as nodemailer.TransportOptions
  );

  static sendMail(
    email: string,
    message: string,
    subject: string,
    html: string,
    attachments?: Array<any> | undefined
  ) {
    try {
      this.transporter.sendMail({
        from: Bun.env.SMTP_USER,
        to: email,
        subject: subject,
        text: message,
        html: html,
        attachments: attachments,
      });
    } catch (error) {
      throw new Error("Error sending email");
    }
  }
}
