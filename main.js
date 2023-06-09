const express = require("express");
const mongoose = require("mongoose");

app = express();

const PORT = process.env.PORT || 7000;

// mongoose.connect("mongodb+srv://azin:azin@cluster0.y4rr3j5.mongodb.net/Exam", {
mongoose.connect("mongodb+srv:// tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exam", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const QuizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Sid: {
    type: String,
  },
});

const QuizModel = mongoose.model("Quiz", QuizSchema);

app.get("/", (req, res) => {
  const azin = QuizModel({
    name: "Azin Mobehdmehdiabadi",
    Sid: "300365490",
  });

  QuizModel.insertMany(azin);

  res.send(`<h1> name : "Azin Mobehdmehdiabadi </h1>
    <h1> Sid : "300365490" </h1>
    `);
});

app.listen(PORT, () => {
  console.log("Server is running " + PORT);
});
