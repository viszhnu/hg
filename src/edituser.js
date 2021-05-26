import React, { useState, useContext, useEffect} from "react";
import UserContext from "./usercontext";
import { Link } from "react-router-dom";
import { GetUserData, PostUserData, UserData, PutUserData} from "./api"; 
function Edituser(props) {
  let [username, setname] = useState("");
  let [useremail, setemail] = useState("");
  let userdetails_update = {
    name:username,
    email:useremail,
  };
var i=0;
  useEffect(async ()=>{
    let x= await UserData(props.match.params.id);
    console.log(x, props.match.params.id)
    setname(x.data.name);
    setemail(x.data.email);
  },[])
  
 
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await PutUserData(props.match.params.id,userdetails_update)
        setname("");
        setemail("");
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <label for="username">User Name</label>
            <input
              className="form-control"
              type="text"
              value={username}
              onChange={(e) => {
                console.log("b");
                setname(e.target.value);
              }}
            />
          </div>
          <div className="col-lg-6">
            <label for="useremail">Email</label>
            <input
              className="form-control"
              type="text"
              value={useremail}
              onChange={(e) => {
                console.log("c");
                setemail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Edituser;
