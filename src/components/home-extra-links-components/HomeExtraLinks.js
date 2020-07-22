import React from 'react';
import Train from '../train-component/Train';
import Pencil from '../pencil-component/Pencil';
import AnchorLinks from '../shared/anchor-links/AnchorLinks';
import './home-extra.styles.css';

const HomeExtraLinks = () => {
	return (
		<div className='extra-links'>
			<div className='extra-link-content'>
				<div className='extra-link-content-inner first'>
					<Train />
					<p>Search for homes based on how far you want to travel</p>
					<AnchorLinks>Search by travel time</AnchorLinks>
				</div>
			</div>
			<div className='extra-link-content'>
				<div className='extra-link-content-inner'>
					<Pencil />
					<p>Draw your own boundaries of where you'd like to buy or rent</p>
					<AnchorLinks>Draw your search</AnchorLinks>
				</div>
			</div>
		</div>
	);
};

HomeExtraLinks.propTypes = {};

export default HomeExtraLinks;
