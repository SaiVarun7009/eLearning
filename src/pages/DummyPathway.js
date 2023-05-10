import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import PathwayBanner from '../components/Banner/PathwayBanner'
import Description from '../components/Description/Description'
import SlickCourse2 from '../components/PathwayCourses/SlickCourse2'
import Reference from '../components/References/Reference'
import Reference2 from '../components/References/Reference2'




const PathwayPage = () => {
    const { pathwayId } = useParams();
    const navigate = useNavigate()
  const [pathway, setPathway] = useState(null);
  const [filterPathCourse, setfilterPathCourse] = useState([]);
  useEffect(() => {
    const fetchPathway = async () => {
    //   console.log("H1", courseId, course);
      try {
        // const response = await axios.get(
        //   `http://localhost:5000/api/courses/643807996a6aca591bec35ac`
        // );
        // console.log("H2");
        const response = await axios.get(`http://localhost:5000/api/pathways/${pathwayId}`);
        // console.log(pathway.title)
        
        console.log("Pathway data:", response.data);
        setPathway(response.data);
        const tag = `pathway.title`
        console.log({tag})
        // const response2 = await axios.get(`http://localhost:5000/api/pathways/${tag}/courses`);
        const response2 = await axios.get(`http://localhost:5000/api/pathways/${response.data.title}/courses`);
        setfilterPathCourse(response2.data);
        
      } catch (error) {
        console.log("Error is ");
        console.log(error);
      }
    };
    fetchPathway();
  }, [pathwayId]);

  if (!pathway) {
    return <div>Loading...</div>;
  }
  
  return (
    <div> dhhsrfh
        <PathwayBanner/>
        <Description descData = {{description: pathway.description, learningObjectives: pathway.pathwayOutcomes}}/>
        <br/>
        {/* <PathwayCourses/> */}
        {/* <SlickCourse /> */}
        <br/><br/>
        <SlickCourse2 />
        <p>{pathway.title}</p>
        <div>
            <h1>Programming Courses</h1>
            <div className='courseContainer-Courses'>
            {filterPathCourse.map((course) => (
            <div key={course.id} className="singleCourse">
                <div className="imageDiv">
                    <img src={course.image} alt={course.courseTitle} />
                </div>
                <div className="courseInfo">
                    <p style={{ height: '3rem', font: 'Clinton' }}>{course.instructor}</p>
                    <h4 style={{ height: '4rem', font: 'Clinton', marginBottom: '15px' }}>
                    {course.title}
                    </h4>
                    <div className="duration" style={{ marginBottom: '15px' }}>
                    {course.lecturesTotalTime}
                    </div>
                    <div className="price" style={{ marginBottom: '15px' }}>
                    <h3>Free</h3>
                    </div>
                    <div>
                    <button
                        className="butn"
                        // onClick={() => navigate(`/courses/CoursePage`)}
                        onClick={() => navigate(`/courses/${course._id}`)}
                    >
                        {course.id}
                        Start Learning
                    </button>
                    </div>
                </div>
            </div>
        ))}
        </div>
        </div>
        <Reference/>
        <Reference2 youtubeLink={pathway.youtubeLink}/>
    </div>
  )
}

export default PathwayPage






















































// const DummyPathway = () => {
//   return (
//     <div> dhhsrfh
//         <PathwayBanner  title = {course.title} description = {course.miniDescription} introvideoUrl = {course.introvideoUrl}/>
//         {/* <Description/> */}
//         <br/>
//         {/* <PathwayCourses/> */}
//         {/* <SlickCourse /> */}
//         <br/><br/>
//         <SlickCourse2 />
//         <Reference/>
//     </div>
//   )
// }

// export default DummyPathway