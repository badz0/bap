const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// connect to database
mongoose.connect(config.database);

// on connection
mongoose.connection.on('connected', () => {
  console.log('connected to database' +config.database)
});

//on error
mongoose.connection.on('error', (err) => {
  console.log('database err:'+err)
})

const app = express();

const users = require('./routes/users');
const port = 8080;

//cors middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, '../bap/dist')))
//body parser middleware
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
app.use('/users', users);

//index router
app.get('/', (req, res) => {
  res.send('some text');
})

//start server
app.listen(port, () => {
  console.log('Server starter on port ' +port);
})
