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

  //POST-INSERT - A POST route to create a workout
app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
      .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//PUT-UPDATE - A PUT route to update a workout(HINT:you will have to find the workout by id and then push exercises to the exercises array)
app.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    })
  });


//GET - A GET route to get the workouts(HINT: this will need an aggregate to add all the durations from each exercise together. Here is an example https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/)
app.get("/models/workouts", (req, res) => {

    db.Workout.aggregate([
       {
     //adds Duration tolist of fields - as noted as not being listed in the Model.js//
        $addFields: {
       totalDuration: { $sum: "exercises.$duration" }
     }
   }
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
      })
    .catch(err => {
      res.json(err);
      })
});
  
  //GET - A GET route to get workouts in a specific range(HINT:very similar to the one above, but needs a limit. Here is an exampe https://kb.objectrocket.com/mongo-db/how-to-use-the-mongoose-limit-function-927)

  //  -add aggregate
  //  -add limit
  //  -add closing error catches
 
  // use range as a limit
 
  app.get("/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields:{
            totalDuration: {$sum: "exercises.duration"}
        }
      }
    ])
    .limit(5)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
  });

//////////////////////
// DELETE ROUTE NEEDED - A DELETE route to delete a workout by a specific id
// Note from Aidan TA: "_id": "6035819e069dac799094fff8",

ProductModel.findOneAndDelete(
  { _id: "6035819e069dac799094fff8" },
  function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
  }
);




app.listen(3000, () => {
  console.log("App running on port 3000!");
})
