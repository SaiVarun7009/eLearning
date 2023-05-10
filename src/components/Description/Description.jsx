import React, { useState } from "react";
import './Description.css';

const Description = ({descData}) => {
    const {description} = descData;
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    return(
        <div className="Description">
            <div className="PathwayInfo">
                <h3>Description</h3>
                {/* <p>{description}</p> */}
                <p>{showMore ? description : `${description.substring(0, 1000)}...`}</p>
                {description.length > 200 && <button onClick={toggleShowMore}>{showMore ? "Show Less" : "Show More"}</button>}
                {/* <p>Why and How to Become a Web Developer? Web development is always scouting for new talents. Basically, you have three options: a career in front-end or back-end. What is the third? The final option means that you become a true mastermind in both of these fields. However, let’s walk before we run. Front-end developers are responsible for building the user interface. They decide on the colors, fonts, sizes, and all other visual elements. They work hand-in-hand with web designers or are capable of being both: front-end specialists and web designers. This field is preferred by many because your work leads to a clear-cut visual image. For back-end developers, the situation is a little different. They work under-the-hood, reassuring that the website functions correctly, connects to databases, and performs other critical tasks. Therefore, their work is invisible to the naked eye since visitors are more inclined to react to visual elements (at least initially). In this learning path, you will be introduced to the main programming and scripting languages for web development. You will have the chance to learn from professionals about HTML, CSS, JavaScript, PHP, and the most widely used frameworks/libraries.
                </p> */}
            </div>



            
            <div className="PathwayFeautures">
                <h3 className="FeautureHeading">What will youlearn</h3>
                <div className="Feauture">
                    <div className="FeautureContent">
                        {/* <div className="Feautureicon">
                            <iconify-icon style={{color:"red", fontSize:"2em"}} icon="mdi:flowchart-outline"></iconify-icon>
                        </div> */}
                        
                        <div className="FeautureInfo">
                            <span className="feature-title"> A structured course tree</span>
                            <p className="feauture-description">
                            A carefully tailored list of courses for best experience developing your skills, including only the essentials and skipping the usual college surpluses
                            </p>
                        </div>
                        
                    </div>
                    <div className="FeautureContent">
                        {/* <div className="Feautureicon">
                            <iconify-icon style={{color:"red", fontSize:"2em"}} icon="mdi:flowchart-outline"></iconify-icon>
                        </div> */}
                        
                        <div className="FeautureInfo">
                            <span className="feature-title"> A structured course tree</span>
                            <p className="feauture-description">
                            A carefully tailored list of courses for best experience developing your skills, including only the essentials and skipping the usual college surpluses
                            </p>
                        </div>
                        
                    </div>
                    <div className="FeautureContent">
                        {/* <div className="Feautureicon">
                            <iconify-icon style={{color:"red", fontSize:"2em"}} icon="mdi:flowchart-outline"></iconify-icon>
                        </div> */}
                        
                        <div className="FeautureInfo">
                            <span className="feature-title"> A structured course tree</span>
                            <p className="feauture-description">
                            A carefully tailored list of courses for best experience developing your skills, including only the essentials and skipping the usual college surpluses
                            </p>
                        </div>
                        
                    </div>               
                    
                </div>
            </div>
            
        </div>
    )
}


export default Description;