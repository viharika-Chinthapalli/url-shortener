const express = require('express');
const app = express();


app.set('view engine', 'ejs');

const endpoints = [
  { path: '/', description: 'Home page', response: 'Rendered HTML' },
  { path: '/i/google', description: 'Link to Google', response: 'HTML anchor tag' },
  { path: '/i/github', description: 'Link to Github', response: 'HTML anchor tag' },
];

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/i/google', (req, res) => {
  res.send('<a href="https://www.google.com">Go to Google</a>');
})

app.get('/i', (req, res) => {
  res.json(endpoints);
});

app.get('/i/github', (req, res) => {
  res.send('<a href="https://github.com/">Go to Github</a>');
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running at port 5000');
});