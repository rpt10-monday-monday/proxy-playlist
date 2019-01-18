
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 7000;
const proxy = require('http-proxy-middleware');
var cors = require('cors');
app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));
app.use(proxy("/songs", {target: 'http://ec2-3-87-34-19.compute-1.amazonaws.com/'}));
app.use(proxy("/filterSongsRock", {target: 'http://ec2-3-87-34-19.compute-1.amazonaws.com:5000/'}));
app.use(proxy("/filterSongsJazz", {target: 'http://ec2-3-87-34-19.compute-1.amazonaws.com:5000/'}));
app.use(proxy("/filterSongsPop", {target: 'http://ec2-3-87-34-19.compute-1.amazonaws.com:5000/'}));



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});