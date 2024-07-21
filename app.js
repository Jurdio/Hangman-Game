const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/model');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

db.sequelize.sync().then(() => {
    console.log('Database connected');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});