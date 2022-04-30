const app = require('./app');
var x = 10;
var y = 20;

const  arr = [2,3,4,5,6,7,8,3];

result = arr.filter((item)=>{
  
  return item>4
})
// console.log(result);

const fs = require('fs');
//fs.writeFileSync('hello.text','this is text file');

console.log(">>>",__dirname);
