var express = require('express');
var app = express();

app.use(express.static('public'));
app.listen(3010,function () {
    console.log("Express server is up on Port 3010");
});
