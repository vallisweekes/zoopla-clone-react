import React, { useState } from 'react';
import SearchBar from '../search-bar-component/SearchBar';

import Button from '../shared/button-component/Button';

import './form.styles.css';
import ToRentForm from '../to-rent-form-component/ToRentForm';
import ForSale from '../for-sale-form-component/ForSale';

let noMin = [
  {
    id: 1,
    value: 'No Min',
  },
];
let noMax = [
  {
    id: 1,
    value: 'No max',
  },
];
let property = [
  {
    id: 1,
    value: 'Show all',
  },
  {
    id: 2,
    value: 'House',
  },
  {
    id: 3,
    value: 'Flats',
  },
  {
    id: 4,
    value: 'Farms/land',
  },
];
let bedrooms = [
  {
    id: 1,
    value: 'No mins',
  },
  {
    id: 2,
    value: 'Studio+',
  },
  {
    id: 3,
    value: '1+',
  },
  {
    id: 4,
    value: '2+',
  },
  {
    id: 5,
    value: '3+',
  },
  {
    id: 6,
    value: '4+',
  },
  {
    id: 7,
    value: '5+',
  },
];

const Form = ({ propertyType, active }) => {
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  const setFormDisplay = () => {
    if (active.label === 'for sale') {
      return (
        <ForSale
          noMin={noMin}
          noMax={noMax}
          property={property}
          bedrooms={bedrooms}
          properType={propertyType}
          visible={visible}
          label={active.label}
        />
      );
    }

    if (active.label === 'to rent') {
      return (
        <ToRentForm
          noMin={noMin}
          noMax={noMax}
          property={property}
          bedrooms={bedrooms}
          properType={propertyType}
          visible={visible}
          label={active.label}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <form>
          <SearchBar
            isVisible={true}
            placeholder="e.g Oxford, NW3 or Waterloo Station"
          />
          {setFormDisplay()}
          <div className="footer-bottom-dropdown">
            {active.label === 'house prices' ? null : (
              <h3 onClick={handleVisibility}>
                {!visible ? 'Advanced search options' : 'Fewer search options'}
                <span style={{ width: 15, marginLeft: '10px' }}>
                  <img
                    className={!visible ? '' : 'chevron-rotate'}
                    style={{ width: '100%', cursor: 'pointer' }}
                    src="/chevron.svg"
                    alt="Chevron"
                  />
                </span>
              </h3>
            )}
            <Button content="Search" invert={false} />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
