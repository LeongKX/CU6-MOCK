const Course = require("../models/course");

//get all courses
const getCourses = async () => {
  const courses = await Course.find().populate("instructor");
  return courses;
};

//get course by id
const getCourse = async (id) => {
  const course = await Course.findById(id).populate("instructor");
  return course;
};

//add new course
const addNewCourse = async (
  title,
  instructor,
  startDate,
  endDate,
  subject,
  description,
  enrollmentCount
) => {
  const newCourse = new Course({
    title,
    instructor,
    startDate,
    endDate,
    subject,
    description,
    enrollmentCount,
  });
  await newCourse.save();
  return newCourse;
};

//update course
const updateCourse = async (
  id,
  title,
  instructor,
  startDate,
  endDate,
  subject,
  description,
  enrollmentCount
) => {
  const updateCourse = await Course.findByIdAndUpdate(
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
  return updateCourse;
};

//delete course
const deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};

module.exports = {
  getCourses,
  getCourse,
  addNewCourse,
  updateCourse,
  deleteCourse,
};
