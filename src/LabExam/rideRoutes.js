const express = require("express");
const router = express.Router();
const { Ride } = require("../models/ride");

router.post("/rides", async (req, res) => {
  try {
    const { rideDriver, startLocation, endLocation, date, time, vehicle, price } = req.body;

    const newRide = new Ride({
      rideDriver,
      startLocation,
      endLocation,
      date,
      time,
      vehicle,
      price
    });
    const savedRide = await newRide.save();

    res.status(201).json(savedRide);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


router.put("/rides/:id", async (req, res) => {
    try {
      const { rideDriver, startLocation, endLocation, date, time, vehicle, price } = req.body;

      const updatedRide = await Ride.findByIdAndUpdate(
        req.params.id,
        { rideDriver, startLocation, endLocation, date, time, vehicle, price },
        { new: true }
      );
  
      if (!updatedRide) {
        return res.status(404).json({ msg: "Ride not found" });
      }
  
      res.json(updatedRide);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });
  
  router.get("/rides", async (req, res) => {
    try {
      const rides = await Ride.find();
  
      res.json(rides);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });

  
  router.delete("/rides/:id", async (req, res) => {
    try {
      const deletedRide = await Ride.findByIdAndDelete(req.params.id);
  
      if (!deletedRide) {
        return res.status(404).json({ msg: "Ride not found" });
      }
  
      res.json({ msg: "Ride deleted" });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });
  

module.exports = router;
