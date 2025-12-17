const path = require('path');
const express = require('express');

const router = express.Router();
const rootDir = require('./pathUtils');

router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'home.html'));
});

router.get('/contact-us', (req, res) => {
  res.sendFile(path.join(rootDir, 'contact.html'));
});

router.post('/contact-us', (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);

  res.send(`
  <html lang="en">
  <head>
    <title>Success</title>
    <style>
      body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background-color: #eef2f3;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        color: #333;
      }
      .card {
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        text-align: center;
        max-width: 400px;
        width: 90%;
      }
      .icon {
        font-size: 3rem;
        color: #27ae60;
        margin-bottom: 1rem;
      }
      h1 {
        color: #2c3e50;
        margin-bottom: 1.5rem;
      }
      .info-group {
        text-align: left;
        background: #f9f9f9;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 2rem;
        border-left: 4px solid #27ae60;
      }
      p {
        margin: 0.5rem 0;
        font-size: 1rem;
      }
      strong {
        color: #555;
      }
      a {
        display: inline-block;
        text-decoration: none;
        color: #3498db;
        font-weight: 600;
        transition: color 0.2s;
      }
      a:hover {
        color: #2980b9;
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="icon">✓</div>
      <h1>Form Submitted</h1>
      <div class="info-group">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      </div>
      <a href="/">← Go Back Home</a>
    </div>
  </body>
  </html>
`);
});

module.exports = router;
