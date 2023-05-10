import React from "react";
import './Pathway_Banner.css'
import './Course_Banner.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";



const CourseBanner = ({ title,miniDescription, description, introvideoUrl}) => {
  // const iframeSrc = `https://www.youtube.com/embed/56JJHL-ynB0`;
  const { courseId } = useParams();
  const navigate = useNavigate()
return (
  <div className='courseBanner'>
      <div className='courseHeader'>

          <div className='courseText'>
              <h1 className='Title'>{title} </h1>           
              <p className='subTitle'>{description}</p>
              {/* <p className='subTitle'>
              
              </p> */}

          </div>
          
          <div className='courseFrame'>
            <div className="courseFrameVideo">
              <iframe
                width="100%"
                height="195"
                src={introvideoUrl}
                // src={iframeSrc}
                title="YouTube Playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; settings"
                allowFullScreen
              />
            </div>
            <div className="courseFrameGotoCourse">
              <button onClick={() => navigate(`/course/${courseId}/learning`)}>Got to COurse</button>
            </div>
              
          </div>
       
          {/* <div className='ScrollGrid'>
            <button className='Scrollbtn'>Bootcamps</button>
            <button className='Scrollbtn'> <a href="#ScrollCourses">Courses</a></button>
            <button className='Scrollbtn'> Flowchart </button>
          </div> */}



      </div>
  </div>
)
}

export default CourseBanner

// const CourseBanner = () => {
//     const iframeSrc = `https://www.youtube.com/embed/videoseries?list=PLkVd4_IMjZgkwcXwnpy7tenGNBbRdiRO8`;
//     const navigate = useNavigate()
//   return (
//     <div className='courseBanner'>
//         <div className='courseHeader'>

//             <div className='courseText'>
//                 <h1 className='Title'> HTML/CSS </h1>           
//                 <p className='subTitle'>
//                 a learning path created by extraordinary instructors, students, 
//                 so you can spend time learning instead of searching.
//                 </p>
//                 <p className='subTitle'>
                
//                 </p>

//             </div>
            
//             <div className='courseFrame'>
//               <div className="courseFrameVideo">
//                 <iframe
//                   width="100%"
//                   height="195"
//                   src={iframeSrc}
//                   title="YouTube Playlist"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; settings"
//                   allowFullScreen
//                 />
//               </div>
//               <div className="courseFrameGotoCourse">
//                 <button onClick={() => navigate('/course/HtmlCss')}>Got to COurse</button>
//               </div>
                
//             </div>
         
//             {/* <div className='ScrollGrid'>
//               <button className='Scrollbtn'>Bootcamps</button>
//               <button className='Scrollbtn'> <a href="#ScrollCourses">Courses</a></button>
//               <button className='Scrollbtn'> Flowchart </button>
//             </div> */}



//         </div>
//     </div>
//   )
// }

// export default CourseBanner