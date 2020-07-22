import React, { useState } from 'react';
import SearchBar from '../search-bar-component/SearchBar';

import Button from '../shared/button-component/Button';
import ToRentForm from '../to-rent-form-component/ToRentForm';
import ForSale from '../for-sale-form-component/ForSale';

import {
  noMax,
  noMin,
  distance,
  dateAdded,
  property,
  bedrooms,
  sortBy,
} from '../../db/formdate';
import './form.styles.css';

interface IFormProps {
  propertyType?: any;
  active: {
    label: string;
  };
}
const Form: React.FC<IFormProps> = ({ active }) => {
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
          distance={distance}
          sortBy={sortBy}
          visible={visible}
          label={active.label}
          dateAdded={dateAdded}
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
          distance={distance}
          dateAdded={dateAdded}
          sortBy={sortBy}
          visible={visible}
          label={active.label}
        />
      );
    } else {
      return null;
    }
  };
  const setPlaceholder = (): string => {
    if (active.label === 'for sale' || active.label === 'to rent') {
      return 'e.g Oxford, NW3 or Waterloo Station';
    } else {
      return 'e.g. Acacia Avenue or TW19 5NW';
    }
  };
  return (
    <React.Fragment>
      <div className="form-container">
        <form>
          <SearchBar isVisible={true} placeholder={setPlaceholder()} />
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
