import React from 'react';
import './home-validation.styles.css';
import Button from '../shared/button-component/Button';

const HomeValidation = () => {
	return (
		<div className='home-validation'>
			<div className='home-validation-img'></div>
			<div className='home-validation-content'>
				<div className='home-validation-content-wrap'>
					<h3>How much is your home worth</h3>
					<p>Our specially-selected local experts can value your home for free - with no strings attached.</p>
				</div>
				<Button invert={true} content='Get your home valuation' />
			</div>
		</div>
	);
};

HomeValidation.propTypes = {};

export default HomeValidation;
