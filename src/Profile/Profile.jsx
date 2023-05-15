import React, { useState, useEffect } from "react";
import Sidebar from "../General/Sidebar/Sidebar";
import "./Profile.css";
import { getUserById,updateUser,changePassword } from "../Services/appService";
import { useLocation } from "react-router";
import {ServerEnum} from "../ServerEnum";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const location = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState(ServerEnum.STUDENT);
  const [toggleSetting, setToggleSetting] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userType] = useState(localStorage.getItem("userType"));
  const attributessOfToast = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleToggleSwitch = () => {
    // Handle toggle switch logic here
    setToggleSetting(!toggleSetting);
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const userId = localStorage.getItem("userId");
    const body = {
        userId: userId,
        oldPassword: oldPassword,
        newPassword: newPassword,
    };
    changePassword(body).then((data) => {
        if (data.status === false) {
            // go back to login page
            toast.error("Error", attributessOfToast);
        } else {
          toast.success("Password Changed Successfully", attributessOfToast);
          return ;   
        }
        toast.error("Error", attributessOfToast);


    });


  };
  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const userId = localStorage.getItem("userId");
    let finalDesignation = designation?designation:ServerEnum.STUDENT;
    
    const body = {
        userId: userId,
        firstName: firstName,
        lastName: lastName,
        mobile: phoneNumber,
        department: department,
        designation: finalDesignation,
        showRating: toggleSetting?"1":"0",
      };
        updateUser(body).then((data) => {
            if (data.status === false) {
                // go back to login page
                toast.error("Error", attributessOfToast);
            } else {
              toast.success("Profile Updated Successfully", attributessOfToast);
            }
        });
    };
 
  
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const body = {
      userId: userId,
    };
    async function fetchUser() {
      getUserById(body).then((data) => {
        if (data.status === false) {
          // go back to login page
          location.push("/");
          return;
        } else {
          const userResponse = data.user;
          setFirstName(userResponse.firstname);
          setLastName(userResponse.lastname);
          setDepartment(userResponse.department);
          setPhoneNumber(userResponse.mobile);
          if (
            userResponse.type === ServerEnum.TEACHER ||
            userResponse.type === ServerEnum.STAFF
          ) {
            setToggleSetting(Number(userResponse.showrating)===1?true:false);
            setDesignation(userResponse.designation);
          }
        }
      });
    }
    fetchUser();
  }, []);

  return (
    <Sidebar>
              <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="account-settings">
        <div className="allSections">
          <div className="section section1">
            <div className="fields">
              <div className="signup-row">
                <div className="field">
                  <label>First Name:</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="signup-row">
                <div className="field">
                  <label>Department:</label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              { userType === ServerEnum.TEACHER || userType === ServerEnum.STAFF ?
                <div className="signup-row">
                  <div className="field">
                    <label>Designation:</label>
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                  <div className="field toggle-switch-profile">
                    <label>Show Your Ratings to others :</label>
                    <button
                      className={`toggle-button ${
                        toggleSetting ? "active" : ""
                      }`}
                      onClick={handleToggleSwitch}
                    >
                      {toggleSetting ? "On" : "Off"}
                    </button>
                  </div>
                </div>: null
              }
            </div>
            <button
              className="submit-Button button"
              onClick={handleUpdateProfile}
            >
              Update Information
            </button>
          </div>

          <div className="section section2">
            <div className="fields">
              <div className="field">
                <label>Old Password:</label>
                <input
                  type="passwordForChange"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="field">
                <label>New Password:</label>
                <input
                  type="passwordForChange"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="submit-Button button"
              onClick={handleChangePassword}
            >
              change Password 
            </button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Profile;
