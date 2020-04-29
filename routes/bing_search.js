'use strict';
var request = require('request');
var express = require("express");
var router = express.Router();
require('dotenv').config();

//host 
let host = 'https://api.cognitive.microsoft.com';
let path = '/bing/v7.0/suggestions';

// Replace the subscriptionKey string value with your valid subscription key.
const subscriptionKey = process.env.SUBSCRIPTION_KEY;

router.get('/', function (req, res) {
  console.log('inside search api');

  // query params
  let search_query = req.query.query;
  let mkt = 'en-US';
  let params = '?mkt=' + mkt + '&q=' + search_query;

  // url construction
  let url = host + path + params;
  console.log(url);

  // request to the bing search api
  request({
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey
    },
    uri: url,
    method: 'GET'
  }, function (error, response, body) {
    //if success
    if (!error && response.statusCode == 200) {
      let body_parse = JSON.parse(body);
      // console.log(body_parse);
      res.send(body_parse);
    }
    else {
      console.log(error);
      res.send(error);
    }
  });
});

module.exports = router;