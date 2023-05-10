import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from 'react-player';
import './HtmlCss.css'
import CourseCurriculum from '../components/courseCurriculum/courseCurriculum'
 
const DummyLearning = () => {

    
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
    <div className='CourseVideos'>
        <br/>
        <div className="CourseVideoPlayer">
            <ReactPlayer
                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                width="100%"
                height="100%"
                controls
            />
        </div>
        <div className="CourseVideoTopics">
            {course.courseChapters ? <CourseCurriculum chapters ={course.courseChapters}/> : ""}
            {/* <CourseCurriculum/> */}
        </div>

        
    </div>
  )
}

export default DummyLearning