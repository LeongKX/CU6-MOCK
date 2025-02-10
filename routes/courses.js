const express = require("express");
const router = express.Router();

// instruction: import the course model
const Course = require("../models/course");

/* 
    instruction: 
    - setup GET /: List all courses (utilize populate() to bring in instructor details)
    
*/
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor");
    res.status(200).send(courses);
  } catch (error) {
    res.status(400).send(error._message);
  }
});

// instruction: setup GET /:id: Retrieve details of a specific course by its _id (use populate() for instructor details)

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findById(id).populate("instructor");
    res.status(200).send(course);
  } catch (error) {
    res.status(400).send(error._message);
  }
});
// instruction: setup POST /: Add a new course
router.post("/", async (req, res) => {
  try {
    // const title = req.body.title;
    // const instructor = req.body.instructor;
    // const startDate = req.body.startDate;
    // const endDate = req.body.endDate;
    // const subject = req.body.subject;
    // const description = req.body.description;
    // const enrollmentCount = req.body.enrollmentCount;

    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(200).send(newCourse);
  } catch (error) {
    res.status(400).send(error._message);
  }
});

// instruction: setup PUT /:id: Modify details of a course by its _id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const instructor = req.body.instructor;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const subject = req.body.subject;
    const description = req.body.description;
    const enrollmentCount = req.body.enrollmentCount;

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      {
        title,
        instructor,
        startDate,
        endDate,
        subject,
        description,
        enrollmentCount,
      },
      { new: true }
    );
    res.status(200).send(updatedCourse);
  } catch (error) {
    res.status(400).send(error._message);
  }
});

// instruction: setup DELETE /:id: Remove a course by its `_id`

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Course.findByIdAndDelete(id);
    res
      .status(200)
      .send({ message: `Course with provided id #${id} has been deleted` });
  } catch (error) {
    res.status(400).send(error._message);
  }
});

// instruction: export the router

module.exports = router;
