import React, { useEffect, useState } from "react";

function UserProfile(){
    const[userid, setUserId]=useState('')
    const[showloading, setShowLoading]=useState(false)
    const[showerror, setShowError]=useState(false)
    const[userinfo, setUserInfo]=useState(null)

    useEffect(() => {
            //**** Check for valid User ID */
            if (!userid) return;

            //*** Set the loading message */
            setShowLoading(true)
            //*** Initialize error to false */
            setShowError(false)
            //*** Initialize userInfo to null */
            setUserInfo(null)

            fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then((response) => {
                if (!response.ok) throw new Error('User not found');
                return response.json();
            })
            .then((json) => setUserInfo(json))
            .catch((err) => {
                //*** Remove the loading message and show error message if any error */
                setShowLoading(false)
                setShowError(true)
            })
            .finally(() => {
                //*** Remove the loading message */
                setShowLoading(false)
            })
 
           
    },[userid]);    

    return(
        <div style={{padding:'20px'}}>
            <h2>User Profile</h2>

            <div>
                <label title="Enter User ID" htmlFor="txtUserID" 
                    style={{fontWeight:"bold"}}>Enter User ID: </label>
                <input type="number" id="txtUserID" value={userid}
                    className="textbox" placeholder="Enter User ID to see the profile info"
                    onChange={(e) => setUserId(e.target.value)}></input>
            </div>
            <div style={{paddingTop:"20px"}}>
                <hr/>
                 <h3>Profile Information:</h3>

                {userinfo && (
                    <div>
                        <p><b>Name:</b> {userinfo.name}</p>
                        <p><b>User Name:</b> {userinfo.username}</p>
                        <p><b>Email:</b> {userinfo.email}</p>
                        <p><b>Address:</b> {userinfo.address.street}, {userinfo.address.suite}, {userinfo.address.city}, {userinfo.address.zipcode}</p>  
                    </div>
                )}
                {userinfo === null && !showerror && !showloading && (
                    <div>
                        No data to display
                    </div>
                )}
                {showerror && (
                    <div>
                        <p  style={{ color: 'red' }}>The error encountered. Please try again with a valid User ID.</p>
                    </div>
                )}
                {showloading && (
                    <div>
                        <p>Loading the user information! Please wait...</p>
                    </div>
                )}
                
            </div>
        </div>
    )

}

export default UserProfile