import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "kishanpandya405@gmail.com", // Gmail account
      pass: "bhkokqwleepicjtc", // App-specific password
    },
    debug: true,
  });

  const mailOptions = {
    from: "kishanpandya405@gmail.com", // Ensure this is the Gmail account
    to: "kishanpandya405@gmail.com", // Receiver (can be same as sender for testing)
    subject: subject || "No Subject", // Default subject if not provided
    text: `Message from ${name || "Anonymous"}: \n\n${message || "No message"}`, // Default message if not provided
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).send("Message sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send(`Failed to send message: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
