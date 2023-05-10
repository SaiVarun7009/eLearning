import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Courses.css';
import { useNavigate } from 'react-router-dom'


const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filterProgramming, setfilterProgramming] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses/');
        const response2 = await axios.get('http://localhost:5000/api/pathways/Programming/courses');
        console.log(response.data); // log the response data to the console
        setCourses(response.data);
        setfilterProgramming(response2.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  

  console.log(courses); // log the courses state to the console
  return (
    <div>
      <h2>Courses</h2>
      <h1>All </h1>
      <div className='courseContainer-Courses'>
      {courses.map((course) => (
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
      <div>
        <h1>Programming Courses</h1>
        <div className='courseContainer-Courses'>
      {filterProgramming.map((course) => (
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
    </div>
  );
};

export default Courses;



// import React from 'react'
// import '../components/PathwayCourses/SlickCourse.css'
// import Data from '../components/PathwayCourses/Data'
// import { useNavigate } from 'react-router-dom'

// const Courses = () => {
//   const navigate = useNavigate()
//   return (
//     <div>Courses

//       <div className="singleCourse">
//           <div className='imageDiv'>
//               {/* <img src={imgSrc} alt ="{courseTitle}"/> */}
//           </div>
//           <div className="courseInfo">
//               <p style={{height: "3rem", font:"Clinton"}} >courseInstructor</p>
//               <h4 style={{height: "4rem", font:"Clinton", marginBottom:"15px"}}>courseTitle</h4>
//               <div className="duration"  style={{marginBottom:"15px"}}>4hr</div>
//               <div className='price'style={{marginBottom:"15px"}}>
//                   <h3>fees</h3>
//               </div>                            
//               <div >
//                   <button className="butn" onClick={() => navigate('/courses/CoursePage')}>
//                       Start Learning
//                   </button>
//               </div>
//               {/* <h4>{courseTitle}</h4> */}
//           </div>
//       </div>

//     </div>
//   )
// }

// export default Courses