const path = require('path');
const User = require("./models/user");

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

sequelize
.sync()
.then(result => {
    app.listen(4000);
})
.catch(err => {
    console.log(err);
})

