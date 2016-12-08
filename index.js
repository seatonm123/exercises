const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});

app.get('/exercises', function(req, res, next){
  knex('exercises').then(function(exercise) {
    res.json(exercise);
  });
});

app.get('/exercises/:id', function(req, res, next) {
  knex('exercises').where('id', req.params.id).first().then(function(exercise) {
      res.json(exercise);
  });
});
