const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

app.get("/resume",(req,res)=>{
  res.download("assets/Channaka_Gunawardhane_Resume.pdf");
});



// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true })); 


// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com', 
//   port: 465, 
//   secure: false, // Use TLS for secure connection (recommended)
//   auth: {
//     user: 'channaka.sajith@gmail.com',
//     pass: password, // Replace with your email password (consider using app passwords)
//   }
// });


// app.post('/api/contact', async (req, res) => {
//   const { name, email, message } = req.body;
//   console.log(`Received contact form submission: Name: ${name}, Email: ${email}, Message: ${message}`);
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.json({ message: 'Form submitted successfully!' });

//   try {
//     await transporter.sendMail({
//       from: email,
//       to: 'channaka.sajith@gmail.com',
//       subject: 'New Contact Form Submission',
//       html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//     });

//     res.json({ message: 'Form submitted successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Error submitting the form. Please try again later.' });
//   }
// });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
