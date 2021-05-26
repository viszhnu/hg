import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from "./user";
import Createuser from "./createuser";
import Edituser from "./edituser";
import Profile from "./profile";
import {UserProvider} from "./usercontext";
var cards=[
  {
    title:"EARNINGS(MONTHLY)",
    value:40000,
    sign:"$",
    icon:"fa-calendar",
    color:"primary "
  },
  {
    title:"EARNINGS(ANNUAL)",
    value:215000,
    sign:"$",
    icon:"fa-dollar-sign",
    color:"success"
  },
  {
    title:"TASKS",
    value:50,
    sign:"%",
    icon:"fa-clipboard-list",
    color:"info"
  },
  {
    title:"PENDING REQUESTS",
    value:18,
    sign:"",
    icon:"fa-comments",
    color:"warning"
  }
];
function App() {
  return (
    <Router>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <UserProvider>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <Switch>
          <Route path="/" exact="true">
         <Dashboard card={cards}></Dashboard>
         </Route>
         <Route path="/user" exact="true">
           <User></User>
         </Route>
         <Route path="/createuser" component={Createuser} exact="true"/>
         <Route path="/edituser/:id" component={Edituser} exact="true"/>
         <Route path="/profile/:id" component={Profile} exact="true"/>
         </Switch>
        </div>
      </div>
      </UserProvider>
    </div>
    </Router>
  );
}

export default App;
