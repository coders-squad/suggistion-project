var fs = require('fs')
var utils = require('../utils.js')
var file = fs.readFileSync(__dirname+'/../DB/words.txt','utf8');
var db = file.split("\n");


module.exports = function(req,res){
  var found = [];
  utils.parseBody(req,function(err,body){
  
  db.reduce(function(acc,val,index){ 
      if(db[index].startsWith(body)){
        if(found.length < 10){
          found.push(db[index]);
        }
      }
    });
  res.end(JSON.stringify(found));
  });
  
  found = [];

}