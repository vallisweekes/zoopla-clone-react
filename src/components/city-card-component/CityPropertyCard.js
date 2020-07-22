import React from 'react';

import Chevron from '../chevron-component/Chevron';
import './card.styles.css';

const CityPropertyCard = ({ city, list, settings }) => {
  const { id, image, heading, city_list, additional } = city;

  return (
    <section>
      <div className="card">
        <div key={id} className="card-img-holder">
          <img src={image} alt={heading} />
          <h3>{heading}</h3>
        </div>

        <ul>
          {city_list.map((list, i) => (
            <li key={i} className={`p-list-styles ${additional} `}>
              <span style={{ display: 'inline-block', paddingRight: 7 }}>
                <Chevron color="#595963" height="9" width="9" />
              </span>
              <p>
                <a>{list}</a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CityPropertyCard;
