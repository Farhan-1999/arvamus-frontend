import React from "react";
import "./Dashboard.css";
// import profBack from "./Images/profback.jpg"
// import backgroundImage3 from "./Images/finbig.png";
import Sidebar from "../Dashborad/Sidebar/Sidebar";
import Profile from "./Profile";
import profileImage from "../Images/prof1.jpg";
import studentImage from "../Images/student4.png";
import teacherImage from "../Images/teacher4.png";
import staffImage from "../Images/staff4.png";
import StarRating from "./StarRating";
import ReviewItem from "../Dashborad/ReviewItem/ReviewItem";
import RatingItem from "../Dashborad/RatingItem/RatingItem";

const Dashboard = () => {
  return (
    <Sidebar>
      <div
        className="home-page-container"
        // style={{ backgroundImage: `url(${profBack})` }}
      >
        <Profile
          className="homepage-profile"
          picture={profileImage}
          name="Farhan Mahmud"
          regno="mahmud.farhan1903@gmail.com"
          impression="Good"
          rating={4}
        />

        <div className="listii">
          <div className="list-container">
            <div className="list-header">
              <div className="heading-wrapper">
                <h2>Reviews</h2>
              </div>
            </div>
            <ul className="list">
              <li>
                <ReviewItem
                  src={studentImage}
                  impression="Positive"
                  date="04 Oct, 2022"
                  // nameshow = "Anonymous"
                />
              </li>
              <li>
                <ReviewItem
                  src={studentImage}
                  impression="Positive"
                  date="04 Oct, 2022"
                  // nameshow = "Anonymous"
                />
              </li>
              <li>
                <ReviewItem
                  src={studentImage}
                  impression="Positive"
                  date="04 Oct, 2022"
                  // nameshow = "Anonymous"
                />
              </li>
            </ul>
          </div>
          <div className="separator"></div>
          <div className="list-container">
            <div className="list-header">
              <div className="star-heading-wrapper">
                <h2>Ratings</h2>
              </div>
            </div>
            <ul className="list">
              <div className="star-item">
                <RatingItem
                  src={studentImage}
                  rating={3.5}
                  date="04 Oct, 2022"
                  responsibility={3.5}
                  behavior={3.5}
                  professionalism={3.5}
                  proficiency={3.5}
                  management={3.5}
                />
              </div>
              <div className="star-item">
                <RatingItem
                  src={studentImage}
                  rating={3.5}
                  date="04 Oct, 2022"
                  responsibility={3.5}
                  behavior={3.5}
                  professionalism={3.5}
                  proficiency={3.5}
                  management={3.5}
                />
              </div>
              <div className="star-item">
                <RatingItem
                  src={studentImage}
                  rating={3.5}
                  date="04 Oct, 2022"
                  responsibility={3.5}
                  behavior={3.5}
                  professionalism={3.5}
                  proficiency={3.5}
                  management={3.5}
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
