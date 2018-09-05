const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    location: String,
    phone: String,
    email: String,
    firstName:String,
    lastName: String,
    Clothes:false,
 food:false,
 water:false,
 blankets:false,
 firstAid:false,
 money:false,
    date: { type: Date, default: Date.now }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
