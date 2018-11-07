require('dotenv').config();

const express = require('express');
const app = express();
const user = require('./controllers/userController');
// const user = require('./controllers/newController');
const Goal = require('./controllers/goalsController');

const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use('/goal', Goal)
app.use(require('./middleware/headers'));
app.use('/user', user);

require('./associations.js')

app.listen(`${process.env.PORT}`, function() {
    console.log(`server on ${process.env.PORT}`)
})
