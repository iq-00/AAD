// src/GoldenPackage.js
import React from 'react';
import '../assets/css/bgold.css';
import { Link } from 'react-router-dom';
const cakesData = [
  {
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBmb3Jlc3QlMjBjYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    name: 'Black Forest',
  },
  {
    image: 'https://www.fnp.com/images/pr/x/v20221221172007/decorated-chocolate-truffle-cake-half-kg_1.jpg',
    name: 'Choco trufle',
  },
  {
    image: 'https://www.fnp.com/images/pr/x/v20221214202651/chocolate-walnut-truffle-half-kg_1.jpg',
    name: 'Walnut trufle',
  },
  {
    image: 'https://bakewithshivesh.com/wp-content/uploads/2021/11/IMG_3947-scaled.jpg',
    name: 'White forest',
  },
  {
    image: 'https://buttermilkbysam.com/wp-content/uploads/2021/06/blueberry-cake-10.jpg',
    name: 'Bluberry layer cake',
  },
  {
    image: 'https://assets.winni.in/product/primary/2022/9/74479.jpeg?dpr=1&w=400',
    name: 'Red velvet cake',
  },
];

function GoldenPackageBirthday() {
  return (
    <div className="golden-package">
      <h1 className="package-title">Golden Package for birthday</h1>
      <img
        src="https://www.vivaahcelebrations.com/wp-content/uploads/2020/08/IMG_9396-1024x857.jpg"
        alt="Golden Package"
        className="golden-image"
      />
      <section className="package-description">
        <h2 className="section-title">Description</h2>
        <p className='zoro'>
          Dream Maker is a leading event management company that has successfully
          organized numerous events. Our experts can help you choose the best options
          for your event, including venue selection, decor, catering, and photography.
        </p>
      </section>

      <section className="package-includes">
        <h2 className="section-title">Golden Package Includes</h2>
        <ul className="includes-list">
          <li>1500 Balloons (Cake Table, Gate, backdrop, and entire area)</li>
          <li>Theme Base Cut Outs (any theme, any picture)</li>
          <li>Any Two Of The Following Games:</li>
          <ul className="games-list">
            <li> Magic Show</li>
            <li>Puppet Show</li>
            <li>Nail Artist</li>
            <li>Game Coordinator</li>
            <li>Sketch Artist</li>
            <li>Live Character/Joker</li>
            <li>Balloon Art</li>
            <li>Hoopla With 100 Gifts</li>
            <li>Break The Pyramid</li>
            <li>Name Beat</li>
          </ul>
          <li>10 Masks</li>
          <li>10 Hooters</li>
          <li>Happy birthday Banner</li>
          <li>Party Popper</li>
          <li>Loot Bag</li>
          <li>One surprise gift</li>
          <li>Free: Tattoo Maker or 6/6 Backdrop with pictures</li>
        </ul>
        <h3 className='tamount'>Total Amount – JUST RS 11999 </h3> 
       <Link to="/birthdayform">< button className='purchasee'>Purchase ₹14999</button></Link> 
        <p className='bitto'>  Birthday event organizers tailor celebrations with personalized themes, decorations, and entertainment to make the day uniquely special for the guest of honor, ensuring a memorable and heartwarming experience for all.</p>
        <p className='kitto'><b>NOTE:</b>
Customer needs to make a booking from our website
After going to the work area with some measurements then only the exact price can be given.
</p>
       
      </section>
      <section className="cakes-section">
        <h2 className="section-title">Cakes We Have !</h2>
        <div className="cakes-images">
          {cakesData.map((cake, index) => (
            <div className="cake-imagej" key={index}>
              <img
                src={cake.image}
                alt={cake.name}
                className="cake-img"
                // Add a class for specific styling and hover effect
              />
              <div className="cake-text">{cake.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GoldenPackageBirthday;
