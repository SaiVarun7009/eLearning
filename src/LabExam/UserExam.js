import React from 'react'

const Data = [
    {
        id:1,
        StartLocation: 'BoysHostel',
        Destination: 'SRK',
        Price: 'Free',
        Name: 'Ranjeeth',
        Vehicle: 'Ambulance'
    },
    {
        id:2,
        StartLocation: 'SRk',
        Destination: 'Girls Hostel',
        Price: 'Free',
        Name: 'Nataraj',
        Vehicle: 'Ambulance'
    },
    {
        id:3,
        StartLocation: 'BoysHostel',
        Destination: 'GirlHostel',
        Price: 'Free',
        Name: 'Sriram',
        Vehicle: 'Ambulance'
    },
    {
        id:4,
        StartLocation: 'BackGate',
        Destination: 'Bridge',
        Price: 'Free',
        Name: 'Varun',
        Vehicle: 'Scooty'
    }


]




const UserExam = () => {
  return (
    <div>
        <h1>Hello , Lets go on a ride</h1>
        
        <div style={{display:"flex"}}>
        {Data.map(({ id, StartLocation, Destination, Name, Price }) => (
                    <div key={id}>
                        <div className="ridesCards" style={{backgroundColor:"white", margin:"20px"}}>
                            
                            <div className="rideInfo" style={{padding:"20px"}}>
                                <p style={{height: "3rem", font:"Clinton"}} >{StartLocation} to {Destination}</p>
                                
                                <h4 style={{height: "4rem", font:"Clinton", marginBottom:"15px"}}>{Name}</h4>
                                
                                <div className='price'style={{marginBottom:"15px"}}>
                                    <h3>{Price}</h3>
                                </div>                            
                                
                            </div>
                            <div >
                                <button className="req" >
                                    Send request
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        
    </div>
  )
}

export default UserExam