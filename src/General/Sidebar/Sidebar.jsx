import React, { useState } from "react";
import "./Sidebar.css";
import logoImage from "../../Images/logor.png";
import { ServerEnum } from "../../ServerEnum";
import {
  FaHome,
  FaBars,
  FaRegUser,
  FaArrowAltCircleDown,
  FaArrowCircleUp,
  FaSignOutAlt 

} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [showImage, setShowImage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    setShowImage(!showImage);
  };
  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
  
    // Perform any additional logout logic or redirects if needed
    // For example, you can redirect the user to the login page
    window.location.href = '/login';
  };
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },
    localStorage.getItem("userType") === ServerEnum.TEACHER || localStorage.getItem("userType") === ServerEnum.STAFF
    ? null
    : 
    {
      path: "/given",
      name: "Given Feedbacks",
      icon: <FaArrowCircleUp />,
    },
    
    localStorage.getItem("userType") === ServerEnum.STUDENT
      ? null
      : {
          path: "/received",
          name: "Received Feedbacks",
          icon: <FaArrowAltCircleDown />,
        },
    {
      path: "/profile",
      name: "profile",
      icon: <FaRegUser />,
    },
    {
      name: "Logout",
      icon:<FaSignOutAlt className="logout-icon" onClick={handleLogout}/>,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div>
            {showImage && (
              <img className="sidebar-logo-image" src={logoImage} alt="" />
            )}
          </div>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) =>
          item ? (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text">
                {item.name}
              </div>
            </NavLink>
          ) : null
        )}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
