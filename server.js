const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5555;

app.use(express.json());

// instruction: setup cors
app.use(cors());

// instruction: setup MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/course")
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));

// instruction: setup routes
app.use("/instructors", require("./routes/instructors"));
app.use("/courses", require("./routes/courses"));

app.get("/", (req, res) => {
  res.send("Good luck!");
});

// Server listening
app.listen(port, () => console.log(`Server started on port ${port}`));
