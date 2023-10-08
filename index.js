const express = require('express');
const bodyparser = require('body-parser');
const sequilize = require('./util/database');
const User = require('./models/user');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-control-allow-Origin', '*');
    res.setHeader('Access-control-allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

//test route
app.get('/', (req, res, next) => {
    res.send('Hello World');
});

//error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

//sync databaseS
sequilize
    .sync()
    .then(result => {
        console.log("Database connected");
        app.listen(3000);
    })
    .catch(err => console.log(err));