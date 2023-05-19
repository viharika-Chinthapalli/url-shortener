const express = require('express');
const app = express();


app.set('view engine', 'ejs');

const endpoints = [
  { path: '/', description: 'Home page', response: 'Rendered HTML' },
  { path: '/i/google', description: 'Link to Google', response: 'HTML anchor tag' },
  { path: '/i/github', description: 'Link to Github', response: 'HTML anchor tag' },
  { path: '/r/google', description: 'Redirect to Google', response: 'Redirect to https://google.com' },
  { path: '/r/github', description: 'Redirect to Github', response: 'Redirect to https://github.com' },
  { path: '/r', description: 'Information about redirection endpoint', response: 'Message about how to use /r/google and /r/github' },
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

app.get('/r', (req, res) => {
  const message = 'To use the redirection endpoint, make a GET request to /r/google.';
  res.send(message);
});

app.get('/r/google', (req, res) => {
  res.redirect('https://www.google.com');
})

app.get('/r/github', (req, res) => {
  res.redirect('https://github.com/');
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running at port 5000');
});