const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 DevOps Portfolio Project is live!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
