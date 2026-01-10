function app(){}
console.log("Start");

setTimeout(()=>{
    console.log("Inside set Timeout");
},0)

Promise.resolve().then(()=>{console.log("Promise resolved")})

console.log("END")

