require('dotenv').config();

<<<<<<< HEAD
const express = require('express');
const app = express();
const user = require('./controllers/userController');
const sequelize = require('./db');
const bodyParser = require('body-parser');


sequelize.sync();
app.use(bodyParser.json());


app.use(require('./middleware/headers'));
app.use('/user', user);


//Protected Routes


// app.use('/connection/test', function(req, res){
//   res.send("This is an old test from a new server.");
// })

app.listen(3000, function(){
  console.log('I can hear you now ${process.env.PORT}')
});

=======
var sequelize = require('./db')
var goals = require('./controllers/goalsController.js')
const port = process.env.PORT || 3000;
sequelize.sync()

app.use(bodyParser.json())
app.use(require("./middleware/headers"))
app.use('/goals', goals)

app.use(require('./middleware/validate-session'))

app.listen(`${process.env.PORT}`, function() {
    console.log(`server on ${process.env.PORT}`)
})
>>>>>>> dev-serv
