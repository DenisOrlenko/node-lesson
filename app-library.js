// 1
// const Joi = require('joi');

// const schema = Joi.string().alphanum().min(3).max(30)

// console.log(schema.validate("qzzsssss"))

// 2 // Генерация новой строки
// const shortid = require('shortid');

// console.log(shortid.generate());

// 3ю создание хоста для веб-сервера - localhost:4444 - прописываю в браузере - серве будет жить на этом хосте
const express = require('express');
const app = express();

app.use('*', (req, res) => {
  console.log('3anpoc от браузера');
  res.send('<h1>ЭТО МОЙ ЗАПРОС</h1>!');
});

const listener = app.listen(4444, () => {
  console.log('Веб-сервер запущен на порте ${listener.address().port}');
});
