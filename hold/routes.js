const Workout = require("./Models/workout") 



app.get("/models/workout", (req, res) => {
    Workout.find({}
      .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
)});
  
  //GET with RANGE
  //add a limit
  app.get("/find/range", (req, res) => {
    db.Workout.findOne(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });


//POST-INSERT
app.post("/api/workout", (req, res) => {
  console.log(req.body);

//   db.Workout.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});


//PUT-UPDATE
app.put("/update/:id", (req, res) => {
  db.Workout.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        title: req.body.title,
        note: req.body.note,
        modified: Date.now()
      }
    },
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
 ////Do i need to EXPORT>