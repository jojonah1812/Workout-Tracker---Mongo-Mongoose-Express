const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
 
      day: Number,
    exercises: [
      {
        type: String,
        name: String,
        duration: Number,
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number
      }
    ]
  }
)

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports=Workout;