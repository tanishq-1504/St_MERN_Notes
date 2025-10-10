const myfs = require("fs");

const mybuff_data = myfs.readFileSync("myData.txt");
console.log(mybuff_data);

const myorg = mybuff_data.toString();
console.log(myorg);