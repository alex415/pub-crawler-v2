var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});