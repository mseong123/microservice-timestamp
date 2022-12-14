
const express = require('express');
const app = express();
const serverless=require('serverless-http');


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

//API endpoint
app.get("/api/:date", function (req, res) {
  const dateString=req.params.date

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

module.exports.handler = serverless(app)
