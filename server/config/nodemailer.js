import nodemailer from "nodemailer";

//  Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

//  Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error(" Email server connection failed:", error);
  } else {
    console.log(" Email server is ready to send messages");
  }
});

export default transporter;
