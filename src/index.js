const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
let x = data.trim().split('\n')

let ans = 0;
x.map((e)=>{
  let a = e.split(' ');
  ans+= parseInt(a[1]);
})
console.log(ans);
fs.writeFileSync('output.txt', ans.toString());
