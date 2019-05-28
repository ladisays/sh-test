import React from 'react';
import './index.css';

export default ({ items }) => {
  return (
    <div className="homecards">
      {
        items.length ?
          items.map(item => (
            <div key={item.id} className="homecard">
              <figure className="homecard-image">
                <img src={item.photoUrls.homecard} alt={item.title} />
              </figure>
              <div className="homecard-content">
                <div className="homecard-detail">
                  <p className="homecard-title">{item.title}</p>
                  <div className="homecard-price">
                    <span>{item.pricePerMonth}{item.currencySymbol}</span>
                  </div>
                </div>
                <div className="homecard-actions">
                  <button className="btn-secondary">More details</button>
                  <button className="btn-primary">Book now!</button>
                </div>
              </div>
            </div>
          ))
          :
          <div>There are no homes available</div>
      }
    </div>
  );
}
