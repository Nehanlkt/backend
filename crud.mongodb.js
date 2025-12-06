use("CrudDb")
// created db

db.createCollection("courses")
// collection creation

db.courses.insertOne({
    name: "neha",
    prize: 0,
    age: 21
})
// document creation
// if we run 2 times than 2 documents vl be created

// read
db.courses.insertMany([{
    name: "neha",
    prize: 0,
    age: 21

},
{
    name: "neh",
    prize: 0,
    age: 22
},
{
    name: "nehu",
    prize: 0,
    age: 23
}
]
)

// let a=db.courses.find({age:21})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())
// let b=db.courses.findOne({age:21})
// console.log(b)

// update
// db.courses.updateOne({age:21},{$set:{age:50}})
db.courses.updateMany({age:21},{$set:{age:50}})


// delete
db.courses.deleteOne({age:23})
// how many times u vl run every time it deletes
