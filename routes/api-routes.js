var db = require("../models");

module.exports = function(app) {
  //displays a specific user's profile data
  app.get("/api/user/:user", function(req, res) {
    db.User.findOne({
      where: {
        username: req.params.user
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/user", (req, res) => {
    console.log("Inside User post");
    db.User.create(req.body).then(results => {
      res.json(results);
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
    console.log(req.body.userGoal);
    db.Goal.bulkCreate(req.body.userGoal).then(function(results) {
      res.json(results);
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
    db.Activity.bulkCreate(req.body.userActivity).then(function(results) {
      res.json(results);
    });
  });

  //chart.js data
  app.get("/api/tracker/:id", function(req, res) {
    db.Activity.findAll({
      where: {
        UserID: req.params.id
      }
    }).then(function(activities) {
      db.Goal.findAll({
        where: {
          UserID: req.params.id
        }
      }).then(function(goals) {
        var data = {
          userActivity: activities,
          userGoal: goals
        };
        res.json(data);
      });
    });
  });
};
