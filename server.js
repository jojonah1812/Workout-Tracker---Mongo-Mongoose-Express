const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, });

//Create Database?
db.Workout.create({ name: "Workouts" })
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });
//POST-INSERT
app.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body, (error, data) => {
    .then(dbLibrary => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
//PUT-UPDATE
app.put("/update/:id", (req, res) => {
  db.Workout.update(
    {
     .ObjectId(req.params.id)
    },
    {
      $set: {
        title: req.body.title,
        note: req.body.note,
        modified: Date.now() }
    },
    (error, data) => {
      if (error) { res.send(error);
      } else { res.send(data);
      }
    }
  );
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
});
