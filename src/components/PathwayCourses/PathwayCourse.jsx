import React from 'react'
import './PathwayCourse.css'
import img from './PathwayCourseImages/imag.jpeg'
import HTML from './PathwayCourseImages/HTML_CSS.jpeg'
import respo from './PathwayCourseImages/Responsiveness.jpeg'
import frame from './PathwayCourseImages/frameworks.jpeg'
import Bootstrap from './PathwayCourseImages/Bootstrap.jpeg'
import JS from './PathwayCourseImages/JavaScript.png'
import jq from './PathwayCourseImages/jQuery.jpeg'
import XML from './PathwayCourseImages/xml.png'

const Data = [
    {
        id:1,
        imgSrc: HTML,
        courseTitle: 'Introducing Coding for Beginners: an HTML Course',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Learn web development from scratch – find out how to create a webpage using HTML'
    },

    {
        id:2,
        imgSrc: respo,
        courseTitle: 'A Responsive Web Design Course: Find Out How to Create a Responsive Website',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Learn how to make website mobile friendly with a responsive web design tutorial step by step!L'
    },

    {
        id:3,
        imgSrc: Bootstrap,
        courseTitle: 'Bootstrap Tutorial: Learn to Create Dynamic Websites In a Pinch',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Find out how to use Bootstrap the fun way by using an interactive Bootstrap course!'
    },

    {
        id:4,
        imgSrc: JS,
        courseTitle: 'An Interactive JavaScript Course for Beginners',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Learn JavaScript interactively with a one-of-a-kind JavaScript online course!'
    },

    {
        id:5,
        imgSrc: jq,
        courseTitle: 'Interactive jQuery Tutorial: Learn jQuery Step-by-Step',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Take an interactive jQuery training course for beginners to quickly master jQuery events, effects and more!'
    },

    {
        id:6,
        imgSrc: XML,
        courseTitle: 'Complete XML Course',
        courseInstructor: 'Varun',
        fees: 'Free',
        description: ''
    },

    {
        id:7,
        imgSrc: frame,
        courseTitle: 'Introduction to Web Frameworks',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Learn web development from scratch – find out how to create a webpage using HTML'
    },

    {
        id:8,
        imgSrc: img,
        courseTitle: 'Introducing Coding for Beginners: an HTML Course',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Learn web development from scratch – find out how to create a webpage using HTML'
    },

    {
        id:9,
        imgSrc: img,
        courseTitle: 'Introducing Coding for Beginners: an HTML Course',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Learn web development from scratch – find out how to create a webpage using HTML'
    },

    {
        id:10,
        imgSrc: img,
        courseTitle: 'Introducing Coding for Beginners: an HTML Course',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Learn web development from scratch – find out how to create a webpage using HTML'
    },

    {
        id:11,
        imgSrc: img,
        courseTitle: 'Introducing Coding for Beginners: an HTML Course',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Learn web development from scratch – find out how to create a webpage using HTML'
    },

    {
        id:12,
        imgSrc: img,
        courseTitle: 'Introducing Coding for Beginners: an HTML Course',
        courseInstructor: 'Sai Varun',
        fees: 'Free',
        description: 'Learn web development from scratch – find out how to create a webpage using HTML'
    },
]

const Course = () => {
    return(
        <div className="courseSection" id='ScrollCourses'>
            <div className='secTitle'>
                <h3>
                    Courses
                </h3>
            </div>
            <section className='main'>

                <div className='CourseContainer'>
                    {/* Here we are going to use higher order array method(map).
                        To do that we shall use a list of objects in oe array.
                        I'm going to create an array named data and from that
                        we shall .map() array to fetch each destination at once.
                    */}
                    {
                        Data.map( ({id, imgSrc, courseTitle, courseInstructor, fees, description}) => {
                            return(
                                <div key={id} className="singleCourse">
                                    <div className='imageDiv'>
                                        <img src={imgSrc} alt ="{courseTitle}"/>
                                    </div>
                                    <div className="courseInfo">
                                        <h6>{courseInstructor}</h6>
                                        <h4>{courseTitle}</h4>
                                        
                                        <div className="duration">4hr</div>
                                        <div className='price'>
                                            <h5>{fees}</h5>
                                        </div>
                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>
                                        <div className="butn">
                                            <button className='btn'>
                                                Start Learning
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>

    )
}


export default Course
