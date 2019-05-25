const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const userRouter = require('./Routers/UserRouter');
const creatorRouter = require('./Routers/CreatorRouter');
const videoRouter = require('./Routers/VideoRouter');

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

app.get('/', (req, res) => {
  res.json({
     status: 'API is working',
     message: 'Welcome to the Nephele API'
  });
});

app.use('/users', userRouter);
app.use('/creators', creatorRouter);
app.use('/videos', videoRouter);

app.on('ready', _ => { 
  app.listen(4000, _ => {
    console.log('Listening on port 4000');
  }); 
});