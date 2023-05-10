import React from 'react'

const RiderExam = () => {
    // const [name,setname] = useState('')
    // const [username,setaadhar] = useState('')
    // const [collagename,setsrc] = useState('')
    // const [YearOfPassOut,setdst] = useState('')
    // const [emailid,setemail] = useState('')
    // const [phonenum,setphone] = useState('')
    // const [password,setpass] = useState('')
    // const [cnfpassword,setcnfpass] = useState('')
  return (
    <div>
        <h1>Hello Rider</h1>
        <h3>To Create a Ride, Enter the Details</h3>

        <div>

        </div>
        <form>
                <div className="Regisdata">
                    <div className="regispers">
                        <input id="name" name=""  type="text" placeholder="Rider Name"/>
                        <input id="time" name=""  type="text" placeholder="Ride Time"/>
                    </div>
                    <div className="regisqua">
                        <input id="source" name=""  type="text" placeholder="Start Location"/>
                        <input id="dest" name=""  type="text" placeholder="Destination Location"/>
                    </div>
                    <div className="regisconta">
                        <input id="email"  name="" type="text" placeholder="Email-Id"/>
                        <input id="phone"  name="" type="text" placeholder="Phone Number"/>
                    </div>
                    <div className="regispass">
                        <input id="vehical" name=""  type="password" placeholder="Vehical Type"/>
                        <input id="count" name=""  type="password" placeholder="No.of people may join"/>
                    </div>
                    <div className="regisprice">
                        <input id="price" name=""  type="password" placeholder="Price"/>
                        {/* <input id="count" name=""  type="password" placeholder="No.of people may join"/> */}
                    </div>
                    <div className="regissub">
                        <input id="signup" type="submit" />
                    </div>
                </div>
            </form>
    </div>
  )
}

export default RiderExam