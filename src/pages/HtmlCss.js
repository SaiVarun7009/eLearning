import React from 'react'
import ReactPlayer from 'react-player';
import './HtmlCss.css'
import CourseCurriculum from '../components/courseCurriculum/courseCurriculum'
 
const HtmlCss = () => {
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
            <CourseCurriculum/>
        </div>

        
    </div>
  )
}

export default HtmlCss