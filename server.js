const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path"); 

const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, });

//Create Database?
// db.Workout.create({ name: "Workouts" })
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

  //POST-INSERT
app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
      .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//PUT-UPDATE
app.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    })
  });


//GET
app.get("/models/workouts", (req, res) => {

    db.Workout.find({}
      .then(dbWorkout => {
        res.json(dbWorkout);
        })
      .catch(err => {
        res.json(err);
        })
)})
  
  //GET with RANGE
  app.get("/find/range", (req, res) => {
    db.Workout.findOne(
      { _id: mongojs.ObjectId(req.params.id)},
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });

//////////////////////
// DELETE ROUTE NEEDED


app.listen(3000, () => {
  console.log("App running on port 3000!");
})
