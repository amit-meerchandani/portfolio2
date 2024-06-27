// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: {
        name: "Amit Meerchandani",
        address: process.env.EMAIL_USER,
      },
      to: email,
      subject: "Query Received!",
      text: `Hello ${name},We just received your query. Please be patient, I will get back to you soon with a response.`,
      html: `<h12>Hello ${name},</h2><h3>We have received your query.</h3></h3><h3>I will surely get back to you soon with a response.</h3>`,
    };

    const ownerOptions = {
      from: {
        name,
        address: email,
      },
      to: process.env.EMAIL_USER,
      subject,
      text: `1 response received from ${name}. \n Email: ${email} \n Message: ${message}`,
      html: `<p>1 response received from <strong>${name}</strong>.</p><h3>Name: ${name}</h3><h3>Email: ${email}</h3><h3>Message: ${message}</h3>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(ownerOptions);
      res.status(200).json({ message: "Emails sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
