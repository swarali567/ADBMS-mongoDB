const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
var mongoose = require("mongoose")

dotenv.config()
const connectDB = require('./server/database/connection');

/*mongoose.connect('mongodb://localhost:27017/mydb'),{
    useNewUrlParser: true,
    useUnifiedTopology: true
};*/
// mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb

var db = mongoose.connection;

const app = express();

const PORT = process.env.PORT || 8080

app.use(morgan('tiny'));

// mongodb connection
connectDB();

app.use(bodyparser.urlencoded({ extended : true}))

app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});