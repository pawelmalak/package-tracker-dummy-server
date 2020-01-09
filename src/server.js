const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

const public = path.join(__dirname, '../public');
app.use(express.static(public));

app.get('/', (req, res) => {
  res.sendFile(path.join(public, 'index.html'));
})

app.get('/inpost', (req, res) => {
  res.sendFile(path.join(public, 'inpost.html'));
})

app.get('/ruch', (req, res) => {
  res.sendFile(path.join(public, 'ruch.html'));
})

app.get('/poczta', (req, res) => {
  res.sendFile(path.join(public, 'poczta.html'));
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})