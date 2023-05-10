const express = require("express");
const router = express.Router();
const { Ride } = require("../models/ride");

router.post("/rides", async (req, res) => {
  try {
    const { rideDriver, startLocation, endLocation, date, time, vehicle, price } = req.body;

    // Create a new ride document with the provided details
    const newRide = new Ride({
      rideDriver,
      startLocation,
      endLocation,
      date,
      time,
      vehicle,
      price
    });

    // Save the new ride document to the database
    const savedRide = await newRide.save();

    res.status(201).json(savedRide);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
