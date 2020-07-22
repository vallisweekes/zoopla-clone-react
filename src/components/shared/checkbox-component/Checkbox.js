import React from 'react';
import './checkbox.styles.css';
import CheckBoxItem from '../checkbox-item-component/CheckBoxItem';

const Checkbox = ({ label }) => {
	return (
		<div className='checkbox-container'>
			<fieldset>
				<legend>Include</legend>
				<div className='checkbox-content'>
					{label === 'for sale' ? (
						<React.Fragment>
							<CheckBoxItem name='New homes' />
							<CheckBoxItem name='Retirement homes' />
							<CheckBoxItem name='Shared ownership' />
							<CheckBoxItem name='Auction' />
							<CheckBoxItem name='Under offer or sold STC' />
						</React.Fragment>
					) : (
						<React.Fragment>
							<CheckBoxItem name='Shared accommodation' />
							<CheckBoxItem name='Let or let agreed' />
						</React.Fragment>
					)}
				</div>
			</fieldset>
		</div>
	);
};

Checkbox.propTypes = {};

export default Checkbox;
