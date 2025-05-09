const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>DevOps Portfolio Project</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #121212;
      color: #f0f0f0;
      margin: 0;
      padding: 2rem;
      line-height: 1.6;
    }
    h1, h2 {
      color: #00ffcc;
    }
    .container {
      max-width: 800px;
      margin: auto;
      padding: 1rem;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      backdrop-filter: blur(5px);
    }
    a {
      color: #00ffff;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 DevOps Portfolio Project</h1>
    <p>This project demonstrates a simple DevOps workflow using:</p>
    <ul>
      <li><strong>GitHub Codespaces</strong> – For instant development environment</li>
      <li><strong>Docker</strong> – To containerize the app</li>
      <li><strong>GitHub Actions</strong> – To automate CI/CD pipelines</li>
    </ul>

    <h2>📦 What does this app do?</h2>
    <p>This app runs inside a Docker container and is deployed with CI/CD tools. It helps you understand:</p>
    <ul>
      <li>How Docker containers work</li>
      <li>How to write a Dockerfile</li>
      <li>How GitHub Actions automate testing/build/deployment</li>
    </ul>

    <h2>🛠️ How to Run</h2>
    <pre><code>docker build -t devops-portfolio .</code></pre>
    <pre><code>docker run -p 3000:3000 devops-portfolio</code></pre>

    <h2>🌐 Deployment</h2>
    <p>You can deploy this project using Render, Vercel (static HTML only), or even GitHub Pages (with workflow).</p>

    <h2>👨‍💻 Author</h2>
    <p><a href="https://github.com/playlikesam" target="_blank">playlikesam</a> on GitHub</p>
  </div>
</body>
</html>
`;

app.get('/', (req, res) => {
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
