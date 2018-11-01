import {Course} from "./model/course";
import {Router} from "express";
import {CourseDifficulty} from "./model/course-difficulty";

const router = Router();

const courses = [
    new Course("AB12", "Intro to Scala", CourseDifficulty.Beginner, 4),
    new Course("CD34", "JEE Web Development", CourseDifficulty.Intermediate, 3),
    new Course("EF56", "Meta-Programming in Ruby", CourseDifficulty.Advanced, 2),
    new Course("GH78", "OO Design with UML", CourseDifficulty.Beginner, 3),
    new Course("IJ90", "Database Access with JPA", CourseDifficulty.Intermediate, 3),
    new Course("KL12", "Design Patterns in C#", CourseDifficulty.Advanced, 2),
    new Course("MN34", "Relational Database Design", CourseDifficulty.Beginner, 4),
    new Course("OP56", "Writing MySql Stored Procedures", CourseDifficulty.Intermediate, 1),
    new Course("QR78", "Patterns of Parallel Programming", CourseDifficulty.Advanced, 2),
    new Course("ST90", "C++ Programming for Beginners", CourseDifficulty.Beginner, 5),
    new Course("UV12", "UNIX Threading with PThreads", CourseDifficulty.Intermediate, 2),
    new Course("WX34", "Writing Linux Device Drivers", CourseDifficulty.Advanced, 3),
];

router.get('/', (req, res) => {
    res.send(courses);
});

module.exports = router;