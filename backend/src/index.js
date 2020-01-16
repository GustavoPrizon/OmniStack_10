const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://gustavo:2408J@que@cluster0-y9o1a.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);