const app = require('./app');
var x = 10;
var y = 20;

const  arr = [2,3,4,5,6,7,8,3,4];

result = arr.filter((item)=>{
  
  return item>4
})
// console.log(result);

const fs = require('fs');
fs.writeFileSync('hello2.text','this is text2 file');


console.log(">>>",__dirname);
