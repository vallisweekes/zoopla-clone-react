import React from 'react';

const Tab = ({ label, active, handleActive }) => {
  return (
    <li>
      <span
        className={
          active.label === label.toLowerCase() ? 'tabs tab-active' : 'tab'
        }
        onClick={() => handleActive(label)}
      >
        {label}
      </span>
    </li>
  );
};

export default Tab;
