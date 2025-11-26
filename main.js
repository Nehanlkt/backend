// import http from "http"
// import {a,b} from "./mymodule.js"
// console.log(a,b)
// /these is for named import

// import obj from "./mymodule.js"
// console.log(obj)
// default import can be called by any name
// import neha from "./mymodule.js"
// console.log(neha)
// to run in html also
// to run this type:module add this in package.json

// (function(exports,require,module,__filename,__dirname){
    // module can actually lives here
// })
const a = require("./mymodule2.js")
console.log(a,__dirname,__filename)
// a can be of any name
// all this wrapped in function



