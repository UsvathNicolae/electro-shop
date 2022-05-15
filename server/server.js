const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

const sequelize = require('./src/configs/sequelize/connection');
const userRoute = require('./src/routes/userRoute');
const productRoute = require('./src/routes/productRoute');

const app = express();
dotenv.config();

const PORT = process.env.PORT | 8080;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//MySql connection
require('./src/configs/sequelize/connection');

sequelize
    .authenticate()
    .then(() => console.log('Connection to database has been established successfully.'))
    .catch((err) => console.error(err));


app.use('/user', userRoute);
app.use('/product', productRoute);

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});

//err
app.use('*', (req, res, next) => {
    const error = new Error("Not found");;
    error.code = 404;
    next(error);
});

app.use('*', (err, req, res, next) => {
    res.status(err.code).json({
        message: err.message
    })
})
