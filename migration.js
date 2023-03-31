const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://azin:azin@cluster0.y4rr3j5.mongodb.net/exams", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const quizShema = new mongoose.Schema({
  name: String,
  sid: Number,
});

const Quiz2 = mongoose.model("quiz2", quizShema);


const azin = new Quiz2({
  name: "azin",
  sid: 300365490,
});



Quiz2.insertMany([azin], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully created db");
    mongoose.connection.close();
  }
});

// if it was only one record then
// const azin = new User({
//     name: "azin",
//     email: "azin@company.org",
//     fav_pizza: "Pepperoni",
//     sid: 826488,
//   });
// user.save();
