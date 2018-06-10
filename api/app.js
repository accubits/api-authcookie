let express = require('express');
let app = express();

app.use('/auth',require('./routes'));


module.exports = app;