import React from 'react';

interface ITabProps {
  label: string;
  active: {
    label: string;
  };
  handleActive: (arg: string) => void;
}
const Tab: React.FC<ITabProps> = ({ label, active, handleActive }) => {
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
