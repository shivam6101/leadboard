import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Form = () => {
  const [data, setData] = useState({
    rollno: "",
    name: "",
    math: "",
    physic: "",
    chemistry: "",
    total: "",
    percent: "",
  });


  const change = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
        tot,
        per,
      };
    });
  };

  var tot =
    parseInt(data.math) + parseInt(data.physic) + parseInt(data.chemistry);
  var per = (
    ((parseInt(data.math) + parseInt(data.physic) + parseInt(data.chemistry)) /
      300) *
    100
  ).toFixed(1);

  const submitval = () => {
    data.total = tot;
    data.percent = per;
    if (
      data.rollno &&
      data.name &&
      data.math &&
      data.physic &&
      data.chemistry
    ) {
      axios.post("http://leadboard6101.pythonanywhere.com/form/taskcreate", data);
      alert("submitted");
      window.location.reload(); 
      
    } else {
      alert("Enter all fields");
      
    }
    
  };

  return (
    <>
      <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
            <NavLink
              className="btn btn-sm btn-outline-dark"
              exact
              activeClassName="active_class"
              to="/"
            >
              Back
            </NavLink>
            <div className="tle">
            <span >Form</span>
            </div>
            <div id="form">
              <br />
              <input
                className="form-control"
                id="title"
                name="rollno"
                onChange={change}
                type="number"
                placeholder="Roll No"
              />
              <input
                className="form-control"
                id="title"
                name="name"
                onChange={change}
                type="text"
                placeholder="Name"
              />
              <input
                className="form-control"
                id="title"
                name="math"
                onChange={change}
                type="number"
                placeholder="Math"
              />
              <input
                className="form-control"
                id="title"
                name="physic"
                onChange={change}
                type="number"
                placeholder="Physic"
              />
              <input
                className="form-control"
                id="title"
                name="chemistry"
                onChange={change}
                type="number"
                placeholder="Chemistry"
              />
              <input
                className="form-control"
                id="title"
                name="total"
                value={tot}
                readOnly
                type="number"
                placeholder="Total"
              />
              <input
                className="form-control"
                id="title"
                name="percent"
                value={per}
                readOnly
                type="number"
                placeholder="Percent"
              />
              <br />
              <input
                className="btn btn-warning"
                id="submit"
                type="submit"
                value="submit"
                onClick={submitval}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
