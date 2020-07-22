import React from 'react';
import './side-bar-links.styles.css';
const SideBarLinks = () => {
	return (
		<div className='sidebar-links'>
			<div className='sidebar-links-content'>
				<ul className='sidebar-links-inner'>
					<li className='sidebar-links-item'>
						<a>For sale</a>
						<span>
							<img src='chevron.svg' />
						</span>
					</li>
					<li className='sidebar-links-item'>
						<a>To rent</a>
						<span>
							<img src='chevron.svg' />
						</span>
					</li>
					<li className='sidebar-links-item'>
						<a>House prices</a>
						<span>
							<img src='chevron.svg' />
						</span>
					</li>
					<li className='sidebar-links-item'>
						<a>New homes</a>
						<span>
							<img src='chevron.svg' />
						</span>
					</li>
					<li className='sidebar-links-item'>
						<a>Commercial</a>
						<span>
							<img src='chevron.svg' />
						</span>
					</li>
					<li className='sidebar-links-item'>
						<a>Overseas</a>
						<span>
							<img src='chevron.svg' />
						</span>
					</li>
					<li className='sidebar-links-item'>
						<a>Find agents</a>
						<span>
							<img src='chevron.svg' />
						</span>
					</li>
					<li className='sidebar-links-item'>
						<a>Discover</a>
						<span>
							<img src='chevron.svg' />
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBarLinks;
