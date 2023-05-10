import React from 'react'
import './Pathway_Banner.css'


const PathwayBanner = ({ title, description}) => {
  return (
    <div className='Banner'>
        <div className='PathName'>
          <div className='BannerText'>
            <h1 className='Title'> {title} </h1>           
            <p className='subTitle'>
               a learning path created by extraordinary instructors, students, 
               so you 
            </p>
            <p className='subTitle'>
               can spend time learning instead of searching.
            </p>
            <br></br>
            <p>{description}</p>
          </div>

            <div className='ScrollGrid'>
              <button className='Scrollbtn'>Bootcamps</button>
              <button className='Scrollbtn'> <a href="#ScrollCourses">Courses</a></button>
              <button className='Scrollbtn'> Flowchart </button>
            </div>



        </div>
    </div>
  )
}

export default PathwayBanner