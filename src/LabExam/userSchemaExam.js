const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  rideDriver: { type: String },
  startLocation: { type: String },
  endLocation: { type: String },
  date: { type: String },
  time: { type: String },
  vehicle: { type: String },
  price: { type: String }
});

const Ride = new mongoose.model("Ride", rideSchema);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  aadharNumber: {
    type: String,
    required: true
  },
  freqStartLocation: {
    type: String
  },
  freqDestLocation: {
    type: String
  },
  emailid: {
    type: String,
    required: true
  },
  phonenum: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cnfpassword: {
    type: String,
    required: true
  },
  ridesJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ride" }],
  ridesCreated: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ride" }]
});

const User = new mongoose.model("User", userSchema);

module.exports = { User, Ride };
