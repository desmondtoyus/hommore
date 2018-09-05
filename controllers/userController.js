const db = require("../models");

// Defining methods for the UsersController
module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        // console.log(req.params);
        db.User
      
            .findOne({email:req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
            //   console.log(req.body.email)
        db.User.findOneAndUpdate({ email: req.body.email }, { $set: { email: req.body.email } }, { upsert: true }, function (err) {
            if (err) {
                console.log(500, { error: err });
            }
            // console.log("succesfully saved");
        })
    
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ email: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
