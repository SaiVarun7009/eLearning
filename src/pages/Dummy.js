import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CourseBanner from '../components/Banner/CourseBanner'
import CourseCurriculum from '../components/courseCurriculum/courseCurriculum'
import Description from '../components/Description/Description'


const Dummy = () => {

  const { courseId } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
    //   console.log("H1", courseId, course);
      try {
        // const response = await axios.get(
        //   `http://localhost:5000/api/courses/643807996a6aca591bec35ac`
        // );
        // console.log("H2");
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        console.log("course data:", response.data);
        setCourse(response.data);
      } catch (error) {
        console.log("Error is ");
        console.log(error);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CourseBanner  title = {course.title} description = {course.miniDescription} introvideoUrl = {course.introvideoUrl}/>
      {/* <h1>{course.title}</h1>
      <p>{course.description}</p> */}
      {/* Add more fields as per your requirement */}
      {/* console.log(course.description) */}
      <Description descData = {{description: course.description, learningObjectives: course.learningObjectives}}/>
      {course.courseChapters ? <CourseCurriculum chapters ={course.courseChapters}/> : ""}
    </div>
  );
};

export default Dummy;
