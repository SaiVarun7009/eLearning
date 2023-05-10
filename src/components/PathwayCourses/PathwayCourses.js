import React from "react"
import './Card.css'
import Slider from "react-slick";
import { products } from "./list"

function Card({title, imageUrl, body}){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <div>
      <h1> WELCOME </h1>
      <Slider {...settings}>
        {products.map((item, index) => {
          return(
            <React.Fragment key={index}>
              <Card item = {item} />
            </React.Fragment>
          );
        })}

      </Slider>
      
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt='' />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
        </div>
      
        <div className="btn">
          <button>
            <a>
              View more
            </a>
          </button>
        </div>

      </div>
    </div>

    
  )
}


export default Card