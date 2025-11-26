const { error } = require("console")
const fs=require("fs")
// or
// const fs=require("fs/promises")
console.log(fs)

// console.log("start")


// fs.writeFileSync("harry.txt","hiii")
// console.log("end")
console.log("start")

// write file
fs.writeFile("harry2.txt","hi hloo",()=>{
    console.log("done")
})
console.log("end")

// readfile

fs.writeFile("harry2.txt","hiii",()=>{
    console.log("done")
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("harry.txt","oiii",(e,d)=>{
    console.log(d)
})
console.log("end")