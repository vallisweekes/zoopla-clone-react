import React from 'react';
import results from '../../db/blog.json';
import './basic-card.styles.css';

const BasicCard = () => {
  return (
    <div className="basic-card-container">
      <ul className="basic-card-grid">
        {results.results
          .filter((blog) => blog.type === 'property news')
          .map((b) => (
            <li key={b.id} className="card-grid-item">
              <a href="/">
                <span className="basic-card-img">
                  <img src={b.image} alt={b.heading} />
                </span>
                <span>
                  <h3>{b.heading}</h3>
                </span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

BasicCard.propTypes = {};

export default BasicCard;
