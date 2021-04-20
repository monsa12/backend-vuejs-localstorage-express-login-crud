const express = require('express');
const app = express();
const path = require('path');


app.use(require('./usuario'));
app.use(require('./login'));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname , '../wwww/index.html'))
// })


module.exports = app;