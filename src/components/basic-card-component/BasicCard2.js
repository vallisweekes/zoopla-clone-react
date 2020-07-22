import React from 'react';
import './basic-card.styles.css';
import results from '../../db/blog.json';

const BasicCard = () => {
  return (
    <div className="basic-card-container">
      <ul className="basic-card-grid">
        {results.results
          .filter((blog) => blog.type === 'property guides')
          .map((b, i) => (
            <li key={b.id} className="card-grid-item">
              <a>
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

export default BasicCard;
