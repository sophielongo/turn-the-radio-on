"use strict";
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
var port = process.env.PORT || 3737;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
app.use('/api', router);
// ROUTES FOR OUR WEB SITE
// =============================================================================
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
};
app.get('/*', renderIndex);
// START THE SERVER
// =============================================================================
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Magic happens on port :' + port);
});
//# sourceMappingURL=server.js.map