const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const password = process.env.PASSWORD; 


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', 
  port: 465, 
  secure: false, // Use TLS for secure connection (recommended)
  auth: {
    user: 'channaka.sajith@gmail.com',
    pass: password, // Replace with your email password (consider using app passwords)
  }
});


app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received contact form submission: Name: ${name}, Email: ${email}, Message: ${message}`);

  try {
    await transporter.sendMail({
      from: email,
      to: 'channaka.sajith@gmail.com',
      subject: 'New Contact Form Submission',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    res.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error submitting the form. Please try again later.' });
  }
});

// Example route: Respond with "Hello World!" on root path
app.get('/', (req, res) => {
    res.send('Hello World from your Node.js backend!');
});

// Define the path to your resume PDF file (replace with your actual path)
const resumePath = path.join(__dirname, 'assets/Channaka Gunawardhane_Resume_.pdf'); 

// Route to serve the resume PDF
app.get('/resume', (req, res) => {
    res.sendFile(resumePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error downloading resume');
        } else {
            console.log('Resume downloaded successfully');
            // Set appropriate content type header for PDF download
            res.setHeader('Content-Type', 'application/pdf');
        }
    });
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
