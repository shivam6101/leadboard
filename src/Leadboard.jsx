import React, { useEffect, useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Delete from "./Delete";

const Leadboard = () => {
  const [task, setTask] = useState([]);
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState([]);
  const [srt, setSrt] = useState([]);
  const [reload, setReload] = useState(false);

  const sorted = task;
  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://backendsem.herokuapp.com/form/tasklist");
      setTask(res.data);
    }
    getData();
  },[]);

  useEffect(() => {
    setFilterdata(
      task.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, task]);

  if (srt === "name") {
    filterdata.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filterdata.sort((a, b) => b.percent - a.percent);
  }

  return (
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
          <span>Leadboard</span>
          </div>
          <form id="form-wrapper">
            <br />
            <div className="flex-wrapper">
              <div style={{ flex: 6 }}>
                <input
                  className="form-control"
                  id="title"
                  onChange={(event) => setSearch(event.target.value)}
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div style={{ flex: 1 }}>
                <select
                  className="btn btn-outline-info"
                  onChange={(event) => {
                    setSrt(event.target.value);
                  }}
                >
                  <option value="percent">percent</option>
                  <option value="name">name</option>
                </select>
              </div>
            </div>
          </form>
          <div style={{flex:10}} className="task-wrapper flex-wrapper spn">
            <div style={{ flex: 4.5 }}>
              <span>Name</span>
            </div>
            <div style={{ flex: 3.5 }}>
              <span>Percent</span>
            </div>
            <div style={{ flex: 0 }}>
              <span>total/300</span>
            </div>
          </div>
          <div id="list-wrapper">
            {filterdata.map(function (item, index) {
              return (
                <div className="flex-wrapper padding" key={index}>
                  <div
                    style={{ flex: 10}}
                    className="task-wrapper flex-wrapper"
                    onClick={() =>
                      alert(
                        `Math=${item.math} , Chemistry=${item.chemistry} , Physics=${item.physic}`
                      )
                    }
                  >
                    <div style={{ flex: 4.5 }}>
                      <span style={{paddingRight:5}}>{item.name}</span>
                    </div>
                    <div style={{ flex: 3.5 }}>
                      <span>{item.percent}%</span>
                    </div>
                    <div style={{ flex: 0 }}>
                      <span>{item.total}</span>
                    </div>
                  </div>
                  {/* <div style={{flex:0}} className="sbtn">
                  <Delete className="btn btn-sm btn-outline-danger" id={item.id} />
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadboard;
