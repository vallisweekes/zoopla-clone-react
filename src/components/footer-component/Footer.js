import React from 'react';
import './footer.styles.css';
import SocialMedia from '../shared/social-component/SocialMedia';
const Footer = () => {
	return (
		<div id='footer'>
			<div>
				<footer className='footer'>
					<section className='footer-top'>
						<h3>Get more from Zoopla</h3>
						<ul className='footer-top-list'>
							<li className='top-list-items css-1u9j331'>
								<a>How much us my home worth</a>
							</li>
							<li className='top-list-items css-1u9j331'>
								<a>Travel time search</a>
							</li>
							<li className='top-list-items css-1u9j331'>
								<a>Find an agent</a>
							</li>
						</ul>
					</section>
					<ul className='footer-container'>
						<li className='footer-container-wrap'>
							<h3>Explore Zoopla</h3>
							<ul>
								<li>
									<a>Help</a>
								</li>
								<li>
									<a>For sale</a>
								</li>
								<li>
									<a>New home</a>
								</li>
								<li>
									<a>Property news</a>
								</li>

								<li>
									<a>Contact us</a>
								</li>
								<li>
									<a>For rent</a>
								</li>
								<li>
									<a>Commercial</a>
								</li>
								<li>
									<a>Guides</a>
								</li>

								<li>
									<a>Sitemap</a>
								</li>
								<li>
									<a>House prices</a>
								</li>
								<li>
									<a>Overseas</a>
								</li>
								<li>
									<a>Postcode finder</a>
								</li>

								<li>
									<a>Privacy</a>
								</li>
								<li>
									<a>Cookie policy</a>
								</li>
								<li>
									<a>Terms of use</a>
								</li>
								<li>
									<a>Slavery Statement</a>
								</li>
								<li>
									<a>Treehouse</a>
								</li>
							</ul>
						</li>
						<li className='footer-container-wrap'>
							<h3>Build your business</h3>
							<ul>
								<li>
									<a>Agent & developers</a>
								</li>
								<li>
									<a>Display advertising</a>
								</li>
								<li>
									<a>Partnership</a>
								</li>
								<li>
									<a>Useful tools</a>
								</li>

								<li>
									<a>About us</a>
								</li>
								<li>
									<a>Member T&Cs</a>
								</li>
								<li>
									<a>Data feeds</a>
								</li>
								<li>
									<a>Partnerships</a>
								</li>

								<li>
									<a>API</a>
								</li>
								<li>
									<a>Jobs</a>
								</li>
								<li>
									<a>Tax strategy</a>
								</li>
							</ul>
							<SocialMedia />
						</li>
						<hr style={{ color: '#dcdcef', width: '100%', maxWidth: 1200, margin: '0 auto' }} />
						<li className='footer-container-wrap margin-fix'>
							<div className='container-wrap-flex'>
								<a>Zoopla estimates</a>
								<a>Street index</a>
								<a>Popular areas</a>
								<div>© 2020 Zoopla Limited. All rights reserved.</div>
							</div>
							<p>Sold house prices provided by Land Registry/Registers of Scotland. © Crown copyright 2020.</p>
							<p>*Zoopla Limited is an appointed representative of uSwitch Limited which is authorised and regulated by the Financial Conduct Authority (FRN 312850) to provide this mortgage comparison service.</p>
							<p>
								**uSwitch Limited is authorised and regulated by the Financial Conduct Authority (FCA) under firm reference number 312850. The Home insurance comparison service is provided by Autonet Insurance Services Ltd, registered in England No. 3642372. Autonet Insurance Services Ltd has its registered office at Nile Street, Burslem, Stoke-on-Trent ST6 2BA United Kingdom. AutoNet Insurance
								Services Ltd is authorised and regulated by the Financial Conduct Authority (FCA) (Registration number: 308213).
							</p>
							<p>***Based on a search within the London postcode areas (E, EC, N, NW, SE, SW, W, WC) on other UK online property portals. As of 11 Mar 2019.</p>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
