import React, { useEffect } from 'react';

import Form from '../form-component/Form';
import Tab from '../custom-tab-component/tab-component/Tab';
import './header.styles.css';
import CustomTab from '../custom-tab-component/CustomTab';

const HeaderHero = (props) => {
	const [active, setActive] = React.useState({ label: '' });

	useEffect(() => {
		setActive({
			label: 'for sale',
		});
	}, []);

	const handleTabActive = (tab) => {
		let tabLabel = tab.toLowerCase();
		if (tabLabel === active.label) setActive({ ...active });

		if (tabLabel !== active.label) setActive({ label: tabLabel, status: true });
	};
	return (
		<div id='hero'>
			<div className='home-hero'>
				<div className='home-hero-wrapper search'>
					<h1 className='heading'>We know what a home is really worth</h1>

					<div className='home-hero-content form'>
						<h3>Search properties for sale or to rent in the UK</h3>
						<CustomTab>
							<Tab label='For sale' active={active} handleActive={handleTabActive} />
							<Tab label='To rent' active={active} handleActive={handleTabActive} />
							<Tab label='House prices' active={active} handleActive={handleTabActive} />
						</CustomTab>
						<Form active={active} />
					</div>
				</div>
			</div>
		</div>
	);
};

HeaderHero.propTypes = {};

export default HeaderHero;
