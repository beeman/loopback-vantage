'use strict';

var Vantage = require('vantage');

module.exports = function (app) {

  var port = 5000;
  var appName = 'loopback-api';
  var prompt = appName + ':' + port + '~$';
  var banner = 'Welcome to your LoopBack API (' + appName + ')';

  app.vantage = Vantage()
    .delimiter(prompt)
    .banner(banner)
    .listen(app, port)
    .show();

  console.log('Loading vantage on port %s', port);

};
