import React, {useState, useContext, Profiler, useEffect} from "react";
import UserContext from "./usercontext";
import {PostUserData, GetUserData} from "./api";
function Createuser(){
    let[username, setusername]=useState("");
    let[usermail, setusermail]=useState("");
    let usedata={
        name:username, email:usermail
    }

     

    return(
        <form onSubmit={async (e)=>{
            e.preventDefault();

            await PostUserData(usedata);
            setusername("");
            setusermail("");
        
        }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                  <label for="username">
                   User Name
                  </label>
                  <input className="form-control" type="text" value={username} onChange={(e)=>{
                       setusername(e.target.value);
                  }}/>
                </div>
                <div className="col-lg-6">
                  <label for="useremail">
                   Email
                  </label>
                  <input className="form-control" type="text" value={usermail} onChange={(e)=>{
                      setusermail(e.target.value);
                  }}/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <button className="btn btn-primary">
                     Add User
                    </button>
                </div>
            </div>
        </div>
        </form>
    )
}
export default Createuser;