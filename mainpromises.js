
import fs from "fs/promises"

// let a=await fs.readFile("harry.txt")
// let b=await fs.writeFile("harry.txt","\n\n\namazing promise")
// console.log(a.toString(),b)

let a=await fs.readFile("harry.txt")
let b=await fs.appendFile("harry.txt","\n\n\namazing promise")
console.log(a.toString(),b)
// one time added text and mutiple times means while running every time amazing promise vl print
