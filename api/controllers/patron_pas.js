'use strict';

var util = require('util');

module.exports = {
  patronpas: patronpas    
};

function patronpas(req, res) {
    
  var patronList = {
        "patronid": "0002000",
        "status": "OPTED-IN",
        "collection-method": "Email"
    }
  
  // this sends back a JSON response which is a single string
  res.json(patronList);
}