const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path');

app.use(compression());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080, () => {
  const port = process.env.PORT || 8080;
  console.log(`Server running on port ${port}`);
});

//https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352