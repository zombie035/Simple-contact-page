const express = require('express');
const hostRouter = require('./Hostrouter');
const rootDir = require('./pathUtils');

const app = express();
const path = require("path")
app.use(express.urlencoded({ extended: false }));

app.use('/', hostRouter);


app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, '404.html'));
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
//nothing
