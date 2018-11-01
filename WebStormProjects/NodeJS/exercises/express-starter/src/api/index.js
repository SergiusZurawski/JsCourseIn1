import express from "express";
import courses from "./courses/courses";

const router = express.Router();

export default () => {
    router.use('/courses', courses);

    return router;
}