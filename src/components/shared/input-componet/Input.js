import React from 'react';

const Input = (props, { label, placeholder }) => {
	let inputElement = null;

	switch (props.inputtype) {
		case 'input':
			inputElement = <input placeholder={placeholder} {...props} />;
			break;
		case 'textarea':
			inputElement = <textarea {...props} />;
			break;
		default:
			inputElement = <input placeholder={placeholder} {...props} />;
	}
	return (
		<div>
			<label>{label}</label>
			{inputElement}
		</div>
	);
};

export default Input;
