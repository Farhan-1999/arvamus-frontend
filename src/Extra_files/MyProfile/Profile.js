import React from 'react';
import StarRating from '../Dashborad/StarRating';
import NotificationBell from './NotificationBell';
// import './Profile.css';

function Profile(props) {
  return (
    <div className="profile">
      <img src={props.picture} alt="Profile Picture" className="profile-pic" />
      <div className="labels">
        <label htmlFor="name">{props.name}</label>
        <label htmlFor="email">{props.regno}</label>
      </div>
      <div className='profile-review-rating-container'>
            <div className="profile-teacher-review-block">
            <p className="profile-teacher-large-text">Overall Impression</p>
            <div className="profile-teacher-small-text">{props.impression}</div>
            </div>
            <div className="profile-teacher-review-block">
            <p className="profile-teacher-large-text">Overall rating</p>
            <StarRating className = 'teacher-rating' rating={props.rating} />
            </div>
        </div>
      <NotificationBell />
    </div>
  );
}

export default Profile;