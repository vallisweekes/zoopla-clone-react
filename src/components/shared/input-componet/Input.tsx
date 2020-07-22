import React from 'react';

interface IInputProps {
  placeholder?: string;
  inputtype: string;
}

const Input: React.FC<IInputProps> = ({ inputtype, placeholder }) => {
  let inputElement = null;

  switch (inputtype) {
    case 'input':
      inputElement = <input placeholder={placeholder} />;
      break;
    case 'textarea':
      inputElement = <textarea />;
      break;
    default:
      inputElement = <input placeholder={placeholder} />;
  }
  return (
    <div>
      {/* <label>{label}</label> */}
      {inputElement}
    </div>
  );
};

export default Input;
