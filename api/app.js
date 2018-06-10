let express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

app.use(cors({credentials: true, origin: 'http://localhost:3002'}));


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/auth',require('./routes'));


module.exports = app;