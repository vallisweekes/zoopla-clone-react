import React from 'react';

import './social-media.styles.css';

const SocialMedia = () => {
	return (
		<ul className='social-media-content'>
			<li className='footer-social'>
				<img style={{ width: '100%' }} src='/facebook.svg' />
			</li>
			<li className='footer-social'>
				<img style={{ width: '100%' }} src='/twitter.svg' />
			</li>
			<li className='footer-social'>
				<img style={{ width: '100%' }} src='/linkedin.svg' />
			</li>
			<li className='footer-social'>
				<img style={{ width: '100%' }} src='/instagram.svg' />
			</li>
			<li className='footer-social'>
				<img style={{ width: '100%' }} src='/youtube.svg' />
			</li>
			<li className='footer-social'>
				<img style={{ width: '100%' }} src='/pintrest.svg' />
			</li>
		</ul>
	);
};

export default SocialMedia;
