import React from 'react';
import CheckBoxItem from '../checkbox-item-component/CheckBoxItem';

import './checkbox.styles.css';

interface ICheckboxProps {
  label: string;
}
const Checkbox: React.FC<ICheckboxProps> = ({ label }) => {
  return (
    <div className="checkbox-container">
      <fieldset>
        <legend>Include</legend>
        <div className="checkbox-content">
          {label === 'for sale' ? (
            <React.Fragment>
              <CheckBoxItem name="New homes" />
              <CheckBoxItem name="Retirement homes" />
              <CheckBoxItem name="Shared ownership" />
              <CheckBoxItem name="Auction" />
              <CheckBoxItem name="Under offer or sold STC" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <CheckBoxItem name="Shared accommodation" />
              <CheckBoxItem name="Let or let agreed" />
            </React.Fragment>
          )}
        </div>
      </fieldset>
    </div>
  );
};

export default Checkbox;
