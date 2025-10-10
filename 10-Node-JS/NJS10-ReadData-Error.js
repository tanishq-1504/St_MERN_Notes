const myfs = require("fs");
myfs.writeFileSync("tanishq/myinfo.txt","My NodeJS Data Ram");
const data = myfs.readFileSync("tanishq/myinfo.txt","utf-8");

console.log(data);
myfs.readFile("tanishq/myinfo.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);
});