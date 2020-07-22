import React from 'react';
import './select.styles.css';

const Select = ({ label, name, id, formType, data, isVisible }) => (
	<div id='select' className={!isVisible ? 'select-container visible' : 'select-container'}>
		<label htmlFor={name}>{label}</label>
		<span className='ui-form__select-wrap'>
			<select name={name} id={id} form={formType}>
				{data &&
					data.map((data) => (
						<option key={data.id} value={data.value}>
							{data.value}
						</option>
					))}
			</select>
		</span>
	</div>
);

export default Select;
