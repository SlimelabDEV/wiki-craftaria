const express = require('express');
const path = require('path');

const app = express();
const port = 3222;
const host = '127.0.0.1';  // Écoute uniquement en local

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, host, () => {
  console.log(`Docusaurus site is running on http://${host}:${port}`);
});