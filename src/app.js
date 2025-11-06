import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use('/public', express.static('public'));

const cats = [
  {
    cat_id: 2,
    name: 'Kisu',
    birthdate: '2020-10-08',
    weight: 6,
    owner: 'Hessu',
    image: 'http://localhost:3000/public/koirakuva.jpeg',
  },
  {
    cat_id: 3,
    name: 'Misu',
    birthdate: '2025-11-18',
    weight: 7,
    owner: 'Hessu',
    image: 'http://localhost:3000/public/koirakuva.jpeg',
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/api/v1/cats', (req, res) => {
  res.json(cats);
});
