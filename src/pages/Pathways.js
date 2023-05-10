// import React from 'react'
// import { useNavigate } from 'react-router-dom'



// const Pathways = () => {
//   const navigate = useNavigate()
//   return (
//     <div>   
//       <div> Pathways </div>
//       <button onClick={() => navigate('pathwayPage')}>Web Developer</button>
//     </div>
//   )
// }

// export default Pathways


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pathways.css';
import { useNavigate } from 'react-router-dom';

const Pathways = () => {
  const [pathways, setPathways] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pathways/');
        console.log(response.data); // log the response data to the console
        setPathways(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const navigate = useNavigate();

  console.log(pathways); // log the pathways state to the console
  return (
    <div>
      <h2>Pathways</h2>
      <h1>All </h1>
      <div className='pathwayContainer-Pathways'>
      {pathways.map((pathway) => (
        <div key={pathway.id} className="singlePathway">
          <div className="imageDiv">
            <img src={pathway.image} alt={pathway.title} />
          </div>
          <div className="pathwayInfo">
            <h4 style={{ height: '4rem', font: 'Clinton', marginBottom: '15px' }}>
              {pathway.title}
            </h4>
            <p style={{ height: '3rem', font: 'Clinton' }}>{pathway.miniDescription}</p>
            <div className="outcomes" style={{ marginBottom: '15px' }}>
              <ul>
                {pathway.pathwayOutcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div>
              <button
                className="butn"
                onClick={() => navigate(`/pathways/${pathway._id}`)}
              >
                {pathway.id}
                Start Learning
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Pathways;
