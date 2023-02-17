import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./sidebar-styles.css";
import { MdSpaceDashboard} from "react-icons/md";
import { MdTransferWithinAStation} from "react-icons/md";


function SideBar() {
  const [activeLink, setActiveLink] = useState(1);
  return (
    <div>
      <div id="sidebar">
        <div id="content">
          <div className="top">
            <div className="brand">
              <img src={require("../../assets/paa-logo.png")} alt="PAA Logo" />
            </div>

            <hr />
            <div className="links">
              <ul>
                <Link to={"/"} onClick={() => setActiveLink(1)}>
                  <li className={activeLink === 1 ? "active-link" : ""}>
                    <MdSpaceDashboard className="icon" />
                    <span className="space"></span>
                    <span>Dashboard</span>
                  </li>
                </Link>
                <Link to={"/stationA"} onClick={() => setActiveLink(2)}>
                  <li className={activeLink === 2 ? "active-link" : ""}>
                    <MdTransferWithinAStation className="icon" />
                    <span className="space"></span>
                    <span>Station A</span>
                  </li>
                </Link>

                <Link to={"/stationB"} onClick={() => setActiveLink(3)}>
                  <li className={activeLink === 3 ? "active-link" : ""}>
                    <MdTransferWithinAStation className="icon" />
                    <span className="space"></span>
                    <span>Station B</span>
                  </li>
                </Link>

                <Link to={"/request"} onClick={() => setActiveLink(4)}>
                  <li className={activeLink === 4 ? "active-link" : ""}>
                    <MdTransferWithinAStation className="icon" />
                    <span className="space"></span>
                    <span>Request</span>
                  </li>
                </Link>

                <Link to={"/pending"} onClick={() => setActiveLink(5)}>
                  <li className={activeLink === 5 ? "active-link" : ""}>
                    <MdTransferWithinAStation className="icon" />
                    <span className="space"></span>
                    <span>Pending</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
