import React from 'react';
import './Aboutpage.css'; // Import the CSS file for styling
import Navbar from '../General/Navbar';
import feedbackImage from '../Images/feedback.png'
import logoImage from '../Images/logor.png'

const Aboutpage = () => {
  return (
    <>
        <Navbar />
        <img className='about-page-logo-image' src= {logoImage} />
        <div className="about-container">
            <div className="left-section">
                <h2>About</h2>
                <p className='u-section'>
                    Arvamus is a educational institution feedback system where the users can give feedbacks
                    about the teachers and staffs. The feedbacks are private,
                    other users cannot see the received reviews of a teacher/staff. There are two types of feedbacks. 
                    They are:
                </p>
                <ul className='type-list'>
                <li>Reviews</li>
                <li>Ratings</li>
                </ul>
                <div className="p-section">
                <h3 className='p-heading'>Reviews</h3>
                <p>Reviews are the descriptive feedbacks in text about what the reviewer thinks about the teacher/staff. 
                   Users have the option to keep their review public or private. 
                </p>
                </div>
                <div className="p-section">
                <h3 className='p-heading'>Ratings</h3>
                <p>Ratings are the scores for a personnel in different categories. Ratings are always public.</p>
                </div>
            </div>
            <div className="right-section">
                <img src= {feedbackImage} alt="Profile" />
            </div>
        </div>
    </>
  );
};

export default Aboutpage;
