var db = require("../models");

module.exports = function (app) {

    //displays a specific user's profile data
    app.get("/api/user/:user", function (req, res) {
        db.User.findOne({
            where: {
                name: req.params.user
            }
        })
            .then(function (dbUser) {
                res.json(dbUser)
            });
    });

    //enter goal
    app.post("/api/goals", function (req, res) {
        db.Goal.create(req.body).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

    //updates goal
    app.put("/api/goals", function (req, res) {
        db.Goal.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbGoal) {
                res.json(dbGoal);
            });
    });

}