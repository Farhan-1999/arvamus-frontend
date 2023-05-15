import React, { useEffect, useState } from 'react';
import './Startpage.css';
import logoImage from '../Images/logor.png'

const Startpage = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to the next page after 2 seconds
      // Replace 'next-page' with the path or URL of your next page
      window.location.href = './login';
    }, 3000);

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);

  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  };

  return (
    <div className={`animated-page ${animationComplete ? 'animation-complete' : ''}`}>
      <img className="animated-image" src= {logoImage} alt="Animated Image" />
      <p className="animated-text" onAnimationEnd={handleAnimationEnd}>
        Arvamus
      </p>
    </div>
  );
};

export default Startpage;
