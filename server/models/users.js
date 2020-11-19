//setting up the user that we want to save in the database
//can pull out this data using Postman which pulls out static data
//Postman can make HTTP requests as well
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {type:String, required: true},
	email:{type:String, required: true},
	password: {type: String, required: true},
	date: {type: Date, default: Date.now}
	//add a favorites field
	//partial update?

	//2 new table with user and favorite meal
});

module.exports = User = mongoose.model("users", UserSchema);

// <3