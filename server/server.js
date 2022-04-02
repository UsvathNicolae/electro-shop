const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const sequelize = require('./src/configs/sequelize/connection');

const app = express();
dotenv.config();

const PORT = process.env.PORT | 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//MySql connection
require('./src/configs/sequelize/connection');

sequelize
    .authenticate()
    .then(() => console.log('Connection to database has been established successfully.'))
    .catch((err) => console.error(err));

app.use('*', (req, res) => res.status(404).json({message: "Invalid route"}));

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});
