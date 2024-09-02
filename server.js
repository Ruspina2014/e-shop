import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import CORS

const app = express();
const PORT = 5000; // or any port you prefer

// Middleware to enable CORS
app.use(cors()); // Apply CORS middleware

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  const { fname, email, subject, message } = req.body;

  try {
    // Configure Nodemailer transport service for Outlook
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com', // SMTP server for Outlook
      port: 587, // SMTP port
      secure: false, // Use TLS
      auth: {
        user: 'ruspinafinance@outlook.com', // replace with your Outlook email
        pass: 'FinanceRuspina2024', // replace with your Outlook password or app-specific password
      },
      tls: {
        ciphers: 'SSLv3', // Required for Outlook
      },
    });

    // Mail options
    const mailOptions = {
      from: 'ruspinafinance@outlook.com',
      to: 'ruspinafinance@outlook.com', // replace with your Outlook email
      subject: subject,
      text: `Name: ${fname}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
