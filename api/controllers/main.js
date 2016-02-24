'use strict';

var util = require('util');

module.exports = {
  main: main    
};

function main(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
   var welcome = util.format('Welcome to Patron PAS Service..!');

  // this sends back a JSON response which is a single string
  res.json(welcome);
}