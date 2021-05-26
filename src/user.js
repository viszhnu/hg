import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetUserData } from "./api";
import Profile from "./profile";
import UserContext from "./usercontext";
function User() {
  let[user, setuser]=useState([]);

  useEffect(async ()=>{
    let x= await GetUserData();
    setuser(...user, x.data);
  },[])
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-grey-800">Users</h1>

        <Link
          to="/createuser"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas  fa-sm text-white-50"></i> Create user
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {user.map((e, i) => {
                  console.log("z")
                  return (
                    <tr>
                      <td>
                        <Link to={`/profile/${i+1}`}>{e.name}</Link>
                      </td>
                      <td>{e.email}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <Link
                          to={`/edituser/${i+1}`}
                          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                        >
                          <i class="fas  fa-sm text-white-50"></i>edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
