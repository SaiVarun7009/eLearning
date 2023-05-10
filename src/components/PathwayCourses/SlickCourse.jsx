import React, { Component } from "react";
import Slider from "react-slick";
// import Course from './Course'
//import './PathwayCourse.css'
import './SlickCourse.css'

import Data from './Data'


export default class PreviousNextMethods extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
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
      return (
        <div style={{width: "85%", margin: "auto"}}>
          <h2>Previous and Next methods</h2>
          <div style={{ textAlign: "right"}}>
            <button className="nextprevbtn" onClick={this.previous}>
              Prev
            </button>
            <button className="nextprevbtn" onClick={this.next}>
              Next
            </button>
          </div>
          <br />
          <div className="courseContainer">
          <Slider ref={c => (this.slider = c)} {...settings}>
          {
                        Data.map( ({id, imgSrc, courseTitle, courseInstructor, fees, description}) => {
                            return(
                                <div key={id}>
                                    <div className="singleCourse">
                                        <div className='imageDiv'>
                                            <img src={imgSrc} alt ="{courseTitle}"/>
                                        </div>
                                        <div className="courseInfo">
                                            <p>{courseInstructor}</p>
                                            <h4 style={{height: "4rem", font:"Clinton"}}>{courseTitle}</h4>
                                            <div className="duration">4hr</div>
                                            <div className='price'>
                                                <h2>{fees}</h2>
                                            </div>                            
                                            <div >
                                                <button className="butn">
                                                    Start Learning
                                                </button>
                                            </div>
                                            {/* <h4>{courseTitle}</h4> */}
                                        </div>

                                    </div>
                                    
                                    
                                </div>
                            )
                        })
                    }
            
          </Slider>
          </div>
          
        </div>
      );
    }
  }