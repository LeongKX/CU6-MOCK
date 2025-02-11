const Instructor = require("../models/instructor");

//get all instructor
const getInstructors = async () => {
  const instructors = await Instructor.find();
  return instructors;
};

//get instructor by id
const getInstructor = async (id) => {
  const instructor = await Instructor.findById(id);
  return instructor;
};

//create new instructor
const addNewInstructor = async (
  name,
  qualification,
  profile,
  coursesTaught
) => {
  const newInstructor = new Instructor({
    name,
    qualification,
    profile,
    coursesTaught,
  });
  await newInstructor.save();
  return newInstructor;
};

//update intructor
const updateInstructor = async (
  id,
  name,
  qualification,
  profile,
  coursesTaught
) => {
  const updateInstructor = await Instructor.findByIdAndUpdate(
    id,
    {
      name,
      qualification,
      profile,
      coursesTaught,
    },
    { new: true }
  );
  return updateInstructor;
};

//delete instructor
const deleteInstructor = async (id) => {
  return await Instructor.findByIdAndDelete(id);
};

module.exports = {
  getInstructors,
  getInstructor,
  addNewInstructor,
  updateInstructor,
  deleteInstructor,
};
