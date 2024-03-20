import React from 'react';
import '../assets/css/birthdaydecoration.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link
const BirthdayDecorationPage = () => {
  return (
    <div className="decoration-page">
       
      <h1> Birthday Decoration Packages</h1>
      <h3>We provide u <span className='himik'>!</span></h3>

      <div className="decoration-package">
        <img
          className='gold-image'
          src="https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9396-1024x857.jpg"
          alt="Gold Package"
        />
        <h2>Gold Package</h2>

       <Link to="/goldenpackage/birthday"> <button className="view-details-button gold-button">View Details</button></Link>
      </div>

      <div className="decoration-package">
        <img
          className='premium-image'
          src="https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9408-1024x1024.jpg"
          alt="Premium Package"
        />
        <h2>Premium Package</h2>
       <Link to="/premiumpackage/birthday"> <button className="view-details-button premium-button">View Details</button></Link>
      </div>
    </div>
  );
};

export default BirthdayDecorationPage;
