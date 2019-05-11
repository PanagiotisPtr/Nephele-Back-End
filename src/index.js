const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const apiRoutes = require('./api-routes');

// use cors
app.use(cors());

// Configure to handle post requests
app.use(express.json());
app.use(express.urlencoded());

// Of course username and password are fake. If you want to run the code you will have to set it up on mongodb
mongoose.connect('mongodb://panos:pa55w0rd@db:27017/nephele',  { useNewUrlParser: true });
mongoose.connection.once('open', _ => { 
  app.emit('ready');
});

app.use('/', apiRoutes);

app.on('ready', _ => { 
  app.listen(4000, _ => {
    console.log('Listening on port 4000');
  }); 
});