import React from 'react';
import './footer.styles.css';
import SocialMedia from '../shared/social-component/SocialMedia';
const Footer = () => {
  return (
    <div id="footer">
      <div>
        <footer className="footer">
          <section className="footer-top">
            <h3>Get more from Zoopla</h3>
            <ul className="footer-top-list">
              <li className="top-list-items css-1u9j331">
                <a href="/#">How much us my home worth</a>
              </li>
              <li className="top-list-items css-1u9j331">
                <a href="/#">Travel time search</a>
              </li>
              <li className="top-list-items css-1u9j331">
                <a href="/#">Find an agent</a>
              </li>
            </ul>
          </section>
          <ul className="footer-container">
            <li className="footer-container-wrap">
              <h3>Explore Zoopla</h3>
              <ul>
                <li>
                  <a href="/#">Help</a>
                </li>
                <li>
                  <a href="/#">For sale</a>
                </li>
                <li>
                  <a href="/#">New home</a>
                </li>
                <li>
                  <a href="/#">Property news</a>
                </li>

                <li>
                  <a href="/#">Contact us</a>
                </li>
                <li>
                  <a href="/#">For rent</a>
                </li>
                <li>
                  <a href="/#">Commercial</a>
                </li>
                <li>
                  <a href="/#">Guides</a>
                </li>

                <li>
                  <a href="/#">Sitemap</a>
                </li>
                <li>
                  <a href="/#">House prices</a>
                </li>
                <li>
                  <a href="/#">Overseas</a>
                </li>
                <li>
                  <a href="/#">Postcode finder</a>
                </li>

                <li>
                  <a href="/#">Privacy</a>
                </li>
                <li>
                  <a href="/#">Cookie policy</a>
                </li>
                <li>
                  <a href="/#">Terms of use</a>
                </li>
                <li>
                  <a href="/#">Slavery Statement</a>
                </li>
                <li>
                  <a href="/#">Treehouse</a>
                </li>
              </ul>
            </li>
            <li className="footer-container-wrap">
              <h3>Build your business</h3>
              <ul>
                <li>
                  <a href="/#">Agent & developers</a>
                </li>
                <li>
                  <a href="/#">Display advertising</a>
                </li>
                <li>
                  <a href="/#">Partnership</a>
                </li>
                <li>
                  <a href="/#">Useful tools</a>
                </li>

                <li>
                  <a href="/#">About us</a>
                </li>
                <li>
                  <a href="/#">Member T&Cs</a>
                </li>
                <li>
                  <a href="/#">Data feeds</a>
                </li>
                <li>
                  <a href="/#">Partnerships</a>
                </li>

                <li>
                  <a href="/#">API</a>
                </li>
                <li>
                  <a href="/#">Jobs</a>
                </li>
                <li>
                  <a href="/#">Tax strategy</a>
                </li>
              </ul>
              <SocialMedia />
            </li>
            <hr
              style={{
                color: '#dcdcef',
                width: '100%',
                maxWidth: 1200,
                margin: '0 auto',
              }}
            />
            <li className="footer-container-wrap margin-fix">
              <div className="container-wrap-flex">
                <a href="/#">Zoopla estimates</a>
                <a href="/#">Street index</a>
                <a href="/#">Popular areas</a>
                <div>© 2020 Zoopla Limited. All rights reserved.</div>
              </div>
              <p>
                Sold house prices provided by Land Registry/Registers of
                Scotland. © Crown copyright 2020.
              </p>
              <p>
                *Zoopla Limited is an appointed representative of uSwitch
                Limited which is authorised and regulated by the Financial
                Conduct Authority (FRN 312850) to provide this mortgage
                comparison service.
              </p>
              <p>
                **uSwitch Limited is authorised and regulated by the Financial
                Conduct Authority (FCA) under firm reference number 312850. The
                Home insurance comparison service is provided by Autonet
                Insurance Services Ltd, registered in England No. 3642372.
                Autonet Insurance Services Ltd has its registered office at Nile
                Street, Burslem, Stoke-on-Trent ST6 2BA United Kingdom. AutoNet
                Insurance Services Ltd is authorised and regulated by the
                Financial Conduct Authority (FCA) (Registration number: 308213).
              </p>
              <p>
                ***Based on a search within the London postcode areas (E, EC, N,
                NW, SE, SW, W, WC) on other UK online property portals. As of 11
                Mar 2019.
              </p>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
