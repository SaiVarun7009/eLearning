import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DummyPage = ({ match }) => {
  const courseId = match.params.courseId;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        // const response = await axios.get(`/api/courses/${courseId}`);
        setCourse(response.data);
      } catch (error) {
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
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      {/* Add more fields as per your requirement */}
    </div>
  );
};

export default DummyPage;
