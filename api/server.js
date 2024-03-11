const express = require('express');
const app = express();
const path = require('path');

//port number for the server
const port = process.env.PORT || 3000;

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
