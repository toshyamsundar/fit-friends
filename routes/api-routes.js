var db = require("../models");

module.exports = function(app) {
  //displays a specific user's profile data
  app.get("/api/user/:user", function(req, res) {
    db.User.findOne({
      where: {
        name: req.params.user
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/user", (req, res) => {
    console.log("Inside User post");
    db.User.create(req.body).then(response => {
      res.json(response);
    });
  });

  //display goals
  app.get("/api/goals", function(req, res) {
    db.Goal.findAll({}).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });

  //enter goal
  app.post("/api/goals", function(req, res) {
    db.Goal.create(req.body).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });

  //display activity values(metrics)
  app.get("/api/activities", function(req, res) {
    db.Activity.findAll({
      attributes: ["metric"]
    }).then(function(dbActivity) {
      res.json(dbActivity);
    });
  });

  //activity values
  app.post("/api/activities", function(req, res) {
    db.Activity.create(req.body).then(function(dbActivity) {
      res.json(dbActivity);
    });
  });
};
