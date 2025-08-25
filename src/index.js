const fs = require('fs');
const inputPath = path.join(__dirname, "input.txt");   // input.txt in same folder as index.js
const outputPath = path.join(__dirname, "output.txt"); // output.txt will be created here
const data = fs.readFileSync(inputPath, 'utf8');
let x = data.trim().split('\n')

let ans = 0;
x.map((e)=>{
  let a = e.split(' ');
  ans+= parseInt(a[1]);
})
console.log(ans);
fs.writeFileSync(outputPath, ans.toString());

