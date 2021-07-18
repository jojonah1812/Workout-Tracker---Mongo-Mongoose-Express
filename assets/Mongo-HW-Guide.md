# Mongo Homework Guide

## Here are some steps/hints to help you with the NoSQL mongo homework

### The model structure will look exactly like the seeds

 ```
 {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  ```

  * Notice how the structure of the object has a day field which is a date and an exercise field which is an array.  You will also need to define the fields inside the array in your schema as well



  ### You will have 5 api routes to complete.

  * A POST route to create a workout

  * A PUT route to update a workout(HINT:you will have to find the workout by id and then push exercises to the exercises array)

  * A GET route to get the workouts(HINT: this will need an aggregate to add all the durations from each exercise together. Here is an example https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/)

  * A GET route to get workouts in a specific range(HINT:very similar to the one above, but needs a limit. Here is an exampe https://kb.objectrocket.com/mongo-db/how-to-use-the-mongoose-limit-function-927)

  * A DELETE route to delete a workout by a specific id



  *Also make sure you reference the Mongoose server files in activities 10-15 to make sure you have the correct configuration