const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const postsRouting = require('./routes/posts')
const app = express();


mongoose.connect("mongodb+srv://orahl:y3I0Yae9fonRCW5m@cluster0.cmo5o.mongodb.net/first?retryWrites=true&w=majority", {useNewUrlParser: true})
.then (() => {
  console.log('coonected to DB!')
})
.catch((err) => {
  console.log(err)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin', '*'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use("/facts", postsRouting);

module.exports = app;
