import React, { useState, useRef } from 'react';
import './courseCurriculum.css';
import Data from './syllabus';
import { Icon } from '@iconify/react';
// import { CourseChapter } from './models/course';







// const CourseCurriculumContent = ({ chapter }) => {
//   const [isActive, setIsActive] = useState(false);
//   const [height, setHeight] = useState(0);
//   const contentRef = useRef(null);

//   function toggleAccordion() {
//     setIsActive(!isActive);
//     setHeight(isActive ? 0 : contentRef.current.scrollHeight);
//   }

//   return (
//     <div className="courseCurriculum-Chapter" key={chapter._id}>
//       <button className={`courseCurriculum-ChapterName ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
//         <h3>{chapter.title}</h3>
//       </button>
//       <div ref={contentRef} className="courseCurriculum-ChapterTopics" style={{ height: `${height}px` }}>
//         {chapter.lessons.map((lesson, index) => (
//           <div key={index} style={{ display: 'flex', alignItems: 'center', paddingTop: '10px', marginLeft: '10px', marginRight: '20px' }}>
//             <p><Icon icon="mdi:file-document" color="gray" /></p>
//             <div className="courseCurriculum-ChapterTopicName">
//               <p>{lesson.title}</p>
//               <p>{lesson.lessonsTime}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const CourseCurriculum = ({ chapters }) => {
//   return (
//     <div>
//       {chapters.map(chapter => (
//         <CourseCurriculumContent key={chapter._id} chapter={chapter} />
//       ))}
//     </div>
//   );
// };

// export default CourseCurriculum;
// In the updated code, we pass the chapters array as a prop to the CourseCurriculum component, and then we iterate over this array to display each chapter as an accordion section using the CourseCurriculumContent component. Inside the CourseCurriculumContent component, we use state to keep track of whether the section is active or not and to set the height of the content based on its visibility. Finally, we iterate over the lessons array of each chapter to display the content inside the accordion section.











// const CourseCurriculum = ({ chapters }) => {
//   return (
//     <div>
//       {chapters.map(chapter => (
//         <CourseCurriculumContent key={chapter._id} chapter={chapter} />
//       ))}
//     </div>
//   );
// };








const CourseCurriculumContent = ({chapterName, topics }) => {

  const [setActive, setActiveState] = useState("false");
  const [setHeight, setHeightState] = useState("0");

  const content = useRef();
  console.log(content);
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    console.log(content.current.scrollHeight);
  }

  return (
    <div  className="courseCurriculum-Chapter">
      
      <button className={`courseCurriculum-ChapterName ${setActive}`} onClick={toggleAccordion}>
        <h3>{chapterName}</h3>
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className="courseCurriculum-ChapterTopics">
        
        {topics.map(({title, type,url,lessonsTime, _id}) => {
          // console.log(topics);
          // console.log(title)
          return(
            <div style={{display:"flex", alignItems:"center",paddingTop:"10px", marginLeft:"10px", marginRight:"20px"}}>
              <p><Icon icon="mdi:file-document" color="gray" /></p>
              <p>{type}</p>
              <div className='courseCurriculum-ChapterTopicName' key={_id}>
                <p>{title}</p>
                <p>{lessonsTime}</p>
              </div>
            </div>
            )
        })}
      </div>
    </div>
  );
};


const CourseCurriculum = (props) => {
  // console.log(props.chapters);
  return(
    <div>
      {props.chapters.map(({title, lessons}) => (
        <CourseCurriculumContent 
          // key={id}
          // id={id}
          chapterName={title}
          topics={lessons}
        />
      ))}
    </div>
  );
};



// const CourseCurriculum = ({ chapters }) => {
//   console.log(chapters);
//   return (
//     <div className="courseCurriculum">
//       {/* console.log("wfjbrhbfh"); */}
//       {chapters.map((chapter, index) => (
//         <CourseCurriculumContent
//           key={index}
//           id={chapter.id}
//           section={chapter.title}
//           topics={chapter.lessons}
//         />
//       ))}
//     </div>
//   );
// };




// const CourseCurriculum = (chapters) => {
  
//   return(
//     <div>
//       {Data.map(({id, section, topics}) => (
//         <CourseCurriculumContent 
//           key={id}
//           id={id}
//           section={section}
//           topics={topics}
//         />
//       ))}
//     </div>
//   );
// };

export default CourseCurriculum;
