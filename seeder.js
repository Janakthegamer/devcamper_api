/*=======================================================

                       Data Seeder

Usage : 
node seeder <method> <type>

Example :
(1) node seeder -i bootcamp
this command will import bootcamp data in server

(2) node seeder -d course
this command will destroy data of course from server

=======================================================*/

const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: "./config/config.env" });

// load models
const Bootcamp = require("./models/Bootcamp");
const Course = require("./models/Course");
const User = require("./models/User");

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8"))
const courses = JSON.parse(fs.readFileSync(`${__dirname}/_data/courses.json`, "utf-8"))
const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8"))


// Import into DB
const importData = async (model, name, type) => {
    try {
        await model.create(type);

        console.log(`${name} Data Imported...`.green.inverse);
        process.exit();
    } catch (err) {
        console.log(err);
    }
}

// Delete data
const deleteData = async (model, name) => {
    try {
        await model.deleteMany();

        console.log(`${name} Data Destroyed...`.red.inverse);
        process.exit();
    } catch (err) {
        console.log(err);
    }
}

// Error
const showError = async () => {
    console.log("Error".red.inverse + " Check command again");
    process.exit();
}

if (process.argv[2] === "-i" && process.argv[3] === "course") {
    importData(Course, "Course", courses);
} else if (process.argv[2] === "-d" && process.argv[3] === "course") {
    deleteData(Course, "Course");
} else if (process.argv[2] === "-i" && process.argv[3] === "bootcamp") {
    importData(Bootcamp, "Bootcamp", bootcamps);
} else if (process.argv[2] === "-d" && process.argv[3] === "bootcamp") {
    deleteData(Bootcamp, "Bootcamp");
} else if (process.argv[2] === "-i" && process.argv[3] === "user") {
    importData(User, "User", users);
} else if (process.argv[2] === "-d" && process.argv[3] === "user") {
    deleteData(User, "User", users);
} else if (process.argv[2] === "-i" && process.argv[3] === "review") {
    showError();
} else if (process.argv[2] === "-d" && process.argv[3] === "review") {
    showError();
} else {
    showError();
}
