const express = require("express");
//const routes = require('./src/routes');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const app = express();

const MongoClient = require("mongoose");
const uri ="mongodb+srv://dbBeatriz:bia123@datacenter-z4nuu.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('conectado');
});

requireDir('./src/models');

app.use('/apinode', require('./src/routes'));


app.listen(3001);



