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

}