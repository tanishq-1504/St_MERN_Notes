const myfs = require("fs");
const data = myfs.readFileSync("tanishq/myinfo.txt","utf-8");

console.log(data);