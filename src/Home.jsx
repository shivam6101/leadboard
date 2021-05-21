import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container">
      <div id="task-container">
        <div id="form-wrapper">
            <div className="flex-wrapper" style={{justifyContent:"space-between"}}>
              <NavLink className="btn btn-sm btn-outline-dark" exact activeClassName="active_class" to="/form">Enter Marks</NavLink>
              <NavLink className="btn btn-sm btn-outline-dark" exact activeClassName="active_class" to="/leadboard">View Leadboard</NavLink>
            </div>
          </div>
          </div>
          </div>
    </>
  );
};

export default Home;
