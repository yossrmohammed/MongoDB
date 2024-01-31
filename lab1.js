////////////////////////////////////
use FacultySystemDB
///////////////////////////////////
db.createCollection("student")
//////////////////////////////////
db.student.insertOne({
    "firstName" : "ziad",
    "lastName" : "ahmed",
    "age" : 20.0,
    "Faculty" : {
        "name" : "Arts",
        "Address" : "Cairo"
    },
    "Grades" : [ 
        {
            "CourseName" : "C",
            "Grade" : "C",
            "Pass" : true
        }, 
        {
            "CourseName" : "DataBase",
            "Grade" : "B",
            "Pass" : true
        }, 

    ],
    "IsFired" : true
})
///////////////////////////////////
db.student.insertOne({
    "firstName" : "yossr",
    "lastName" : "mohamed",
    "age" : 20.0,
    "Faculty" : {
        "name" : "science",
        "Address" : "Abassia"
    },
    "Grades" : [ 
        {
            "CourseName" : "Linux",
            "Grade" : "C",
            "Pass" : true
        }, 
        {
            "CourseName" : "Java",
            "Grade" : "F",
            "Pass" : false
        }, 
        {
            "CourseName" : "C++",
            "Grade" : "A",
            "Pass" : true
        }, 
        {
            "CourseName" : "Database",
            "Grade" : "D",
            "Pass" : true
        }
    ],
    "IsFired" : true
})
///////////////////////////////////////////
db.student.insertMany([

{
    "firstName" : "Omar",
    "lastName" : "mohamed",
    "age" : 25.0,
    "Faculty" : {
        "name" : "Engineer",
        "Address" : "Helwan"
    },
    "Grades" : [ 
        {
            "CourseName" : "Java",
            "Grade" : "B",
            "Pass" : true
        }, 
        {
            "CourseName" : "Database",
            "Grade" : "D",
            "Pass" : true
        }
    ],
    "IsFired" : true
},

{
    "firstName" : "Esraa",
    "lastName" : "Magdy",
    "age" : 23.0,
    "Faculty" : {
        "name" : "Computer science",
        "Address" : "Shrouk"
    },
    "Grades" : [ 
        {
            "CourseName" : "Linux",
            "Grade" : "C",
            "Pass" : true
        }, 
        {
            "CourseName" : "C++",
            "Grade" : "C",
            "Pass" : true
        }, 
        {
            "CourseName" : "Database",
            "Grade" : "C",
            "Pass" : true
        }
    ],
    "IsFired" : false
}

])

///////////////////////////////////////////
db.student.find({})
////////////////////////////////////////////
db.student.find({"firstName":"yossr"})
///////////////////////////////////////////
db.student.find({$or:[{"firstName" : "ahmed"},{"lastName" : "ahmed"}]})
///////////////////////////////////////////
db.student.find({ "first_name": { $ne: "ahmed" } })
/////////////////////////////////////////
db.student.find({"age": { $gte: 21 }, "Faculty": { $ne: null }})
////////////////////////////////////////////
db.student.find({ "firstName": "ahmed" }, { "firstName": 1, "lastName": 1, "IsFired": 1, "_id": 0 })
///////////////////////////////////////////////
db.student.updateOne({ "firstName": "yossr" },{ $set: { "lastName": "khatab" } })
//////////////////////////////////////////////
db.student.deleteMany({ "IsFired": true })
///////////////////////////////////////////
db.student.drop()
/////////////////////////////////////////
db.dropDatabase()
