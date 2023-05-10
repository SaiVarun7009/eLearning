const asyncHandler = require('express-async-handler');
const {User, rides} = require('../model/userSchemaExam');
  
  const createCourse = asyncHandler(async (req, res) => {
    const {name, aadharNumber, freqStartLocation,freqDestLocation,emailid,phonenum,password,ridesJoined,ridesCreated} = req.body;
  
    let ridesIds = [];
  
    if (Array.isArray(rides)) {
        ridesIds = await Promise.all(rides.map(async (ride) => {
        const newRide = new CourseChapter(ride);
        const savedRide = await newChapter.save();
        return savedRide._id;
      }));
    }
  
    const newUser = new User({name, aadharNumber, freqStartLocation,freqDestLocation,emailid,phonenum,password,ridesJoined,ridesCreated});
  
    const savedCourse = await newCourse.save();
  
    res.status(201).json(savedCourse);
  });