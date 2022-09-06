// index.js
// where your node app starts

// init project
const express = require('express');
const path = require('path')
const app = express();
const serverless=require('serverless-http');
const router = express.Router();


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname,'../../public')));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.send(path.join(__dirname,'../../views/index.html'))
  res.sendFile(path.join(__dirname,'../../views/index.html'));
});


app.get("/api/:date", function (req, res) {
  const dateString=req.params.date
  console.log(dateString)
  if (Date.parse(dateString)) 
    res.json({
      unix:new Date(dateString).getTime(),
      utc:new Date(dateString).toUTCString()
    })

  else if (Date.parse(new Date(parseInt(dateString))))
    res.json({
      unix:new Date(parseInt(dateString)).getTime(),
      utc:new Date(parseInt(dateString)).toUTCString()
    })
  else res.json({
      error : "Invalid Date"
    }) 
     
});

app.get("/api", function (req, res) {
    res.json({
      unix:new Date().getTime(),
      utc:new Date()
    })   
});


app.use(`/.netlify/functions/index`, router);

module.exports.handler = serverless(app)
