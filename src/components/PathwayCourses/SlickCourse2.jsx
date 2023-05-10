import React, { useRef } from "react";
import Slider from "react-slick";
import './SlickCourse.css'
import Data from './Data'
import { useNavigate } from 'react-router-dom'


export default function PreviousNextMethods() {
    const sliderRef = useRef(null);
    const navigate = useNavigate()
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    }

    const next = () => {
        sliderRef.current.slickNext();
    }

    return (
        <div style={{width: "85%", margin: "auto"}}>
            <h2>Previous and Next methods</h2>
            <div style={{ textAlign: "right"}}>
                <button className="nextprevbtn" onClick={previous}>
                    Prev
                </button>
                <button className="nextprevbtn" onClick={next}>
                    Next
                </button>
            </div>
            <br />
            <div className="courseContainer">
                <Slider ref={sliderRef} {...settings}>
                    {Data.map(({ id, imgSrc, courseTitle, courseInstructor, fees, description }) => (
                        <div key={id}>
                            <div className="singleCourse">
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt ="{courseTitle}"/>
                                </div>
                                <div className="courseInfo">
                                    <p style={{height: "3rem", font:"Clinton"}} >{courseInstructor}</p>
                                    <h4 style={{height: "4rem", font:"Clinton", marginBottom:"15px"}}>{courseTitle}</h4>
                                    <div className="duration"  style={{marginBottom:"15px"}}>4hr</div>
                                    <div className='price'style={{marginBottom:"15px"}}>
                                        <h3>{fees}</h3>
                                    </div>                            
                                    <div >
                                        <button className="butn" onClick={() => navigate('/courses/CoursePage')}>
                                            Start Learning
                                        </button>
                                    </div>
                                    {/* <h4>{courseTitle}</h4> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
