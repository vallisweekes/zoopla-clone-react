import React from 'react';

const CheckBoxItem = ({ name }) => {
	return (
		<div className='checkbox-items'>
			<label className='container' htmlFor={name}>
				{name}
				<input type='checkbox' name={name} checked />
				<span className='checkmark'></span>
			</label>
		</div>
	);
};

export default CheckBoxItem;
