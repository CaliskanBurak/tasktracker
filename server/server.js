const express = require('express');
const app = express();
const path = require('path');

console.log(process.env.NODE_ENV);
//Global middleware
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

