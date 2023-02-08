const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

const port = 8000;

let categories = [
  {
    id: 1,
    name: 'Blog',
  },
  {
    id: 2,
    name: 'Technolgoy',
  },
  {
    id: 3,
    name: 'Photo',
  },
];

let nextCatId = categories.length;

app.get('/categories', (request, response) => {
  response.status(200);
  response.json(categories);
});

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  let category = null;

  for (const row of categories) {
    if (id == row.id) {
      category = row;
      break;
    }
  }

  res.json(category);
});

app.delete('/categories/:id', (req, res) => {
  const { id } = req.params;
  categories = categories.filter((row) => row.id !== id);
  res.json(id);
});

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.post('/categories', jsonParser, (req, res) => {
  const { name } = req.body;
  const newCategory = { id: nextCatId++, name };
  categories.push(newCategory);
  res.json(newCategory);
});

app.put('/categories/:id', jsonParser, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  let updatedCat;
  categories = categories.map((row) => {
    console.log('aaa');
    if (row.id === Number(id)) {
      updatedCat = { id: Number(id), name };
      return updatedCat;
    }
    return row;
  });
  res.json(updatedCat);
});

app.listen(port, () => {
  console.log('http://localhost:' + port);
});
