const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors')
const { MONGOURI } = require('./config/keys');
const app = express();
const PORT =process.env.PORT || 5000;

mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on('connected', () => {
  console.log('connected to mongo yeahh');
});
mongoose.connection.on('error', (err) => {
  console.log('Mongodb eror ' + err);
});
require('./models/user');
require('./models/url');
app.use(cors());
app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/urlRoutes'));

if(process.env.NODE_ENV=="production"){
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}


app.listen( PORT, () => {
  console.log('server is running at' +  PORT);
});
