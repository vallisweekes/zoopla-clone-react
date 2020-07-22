import React, { useEffect } from 'react';
import './nav-link.styles.css';

const NavLink = () => {
  return (
    <div className="navbar--links-main">
      <ul>
        <li className="nav--items-bottom">
          <a className="target-link">For Sale</a>
          <div
            id="first"
            className="nav--items-sub nav--item-double nav-adjust-left"
          >
            <ul>
              <li>UK property for sale</li>
              <li>UK commercial property for sale</li>
              <li>UK estate agents</li>
            </ul>
            <ul>
              <li>Travel time search</li>
              <li>Draw a map search</li>
              <li>Overseas property for sale</li>
            </ul>
          </div>
        </li>
        <li className="nav--items-bottom">
          <a className="target-link">To Rent</a>
          <div className="nav--items-sub nav--item-double nav-adjust-left">
            <ul>
              <li>UK property to rent</li>
              <li>UK commercial property to let</li>
              <li>UK letting agents</li>
            </ul>
            <ul>
              <li>Travel time search</li>
              <li>Draw a map search</li>
            </ul>
          </div>
        </li>
        <li className="nav--items-bottom">
          <a className="target-link">House prices</a>
          <div className="nav--items-sub nav--item-n-width nav-adjust-left">
            <ul>
              <li>UK house prices & values</li>
              <li>UK area stats</li>
              <li>Manage your home better</li>
            </ul>
          </div>
        </li>
        <li className="nav--items-bottom">
          <a className="target-link">New homes</a>
          <div className="nav--items-sub nav--item-double nav-adjust-left">
            <ul>
              <li>UK new homes for sale</li>
              <li>UK new build development</li>
            </ul>
            <ul>
              <li>Help to Buy</li>
              <li>Shared Ownership</li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                Retirement{' '}
                <span
                  id="notification"
                  className="notification"
                  style={{ direction: 'inline-block', marginLeft: 5 }}
                >
                  <a>New</a>
                </span>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav--items-bottom">
          <a className="target-link">Commercial</a>
          <div className="nav--items-sub nav--item-double nav-adjust-right">
            <ul>
              <li>UK commercial property to let</li>
            </ul>
            <ul>
              <li>UK commercial property for sale</li>
              <li>UK commercial agents</li>
              <li>Office space calculator</li>
            </ul>
          </div>
        </li>
        <li className="nav--items-bottom">
          <a className="target-link">Overseas</a>
          <div className="nav--items-sub nav-adjust-right nav--item-double">
            <ul>
              <li>Overseas property for sale</li>
              <li>Overseas agents</li>
              <li>Currency zone</li>
            </ul>
            <ul>
              <li>Property for Sale in Spain</li>
              <li>Property for Sale in France</li>
              <li>Property for Sale in Portugal</li>
              <li>Property for Sale in United States</li>
              <li>Property for Sale in Italy</li>
            </ul>
          </div>
        </li>
        <li className="nav--items-bottom">
          <a className="target-link">Find agents</a>
          <div className="nav--items-sub nav-adjust-right nav--item-expand">
            <ul>
              <li>
                <h3>I need an agent</h3>
              </li>
              <li>UK estate agents</li>
              <li>UK letting agent</li>
              <li>UK commercial agents</li>
              <li>Overseas agent</li>
              <li>Award winning agents</li>
              <li>Get agent valuation</li>
            </ul>
            <ul>
              <li>
                <h3>I need an agent</h3>
              </li>
              <li>List with Zoopla and build your business today</li>
              <li>
                <a>Find out more</a>
              </li>
              <li>I'm a Zoopla agent, I want to login to ZooplaPro</li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav--items-bottom">
          <a className="target-link">Discover</a>
          <div className="nav--items-sub nav-adjust-right nav--item-expand">
            <ul>
              <li>
                <h3>Latest property news</h3>
              </li>
              <li style={{ borderLeft: '2px solid #6a148e' }}>
                <p>
                  5 property-related takeaways from the Summer Economic Update
                </p>
                <span style={{ fontSize: '0.7rem', color: '#91919b' }}>
                  July 9, 2020
                </span>
              </li>

              <li style={{ borderLeft: '2px solid #6a148e' }}>
                <p>Stamp duty holiday explained: what it could mean for you</p>
                <span style={{ fontSize: '0.7rem', color: '#91919b' }}>
                  July 9, 2020
                </span>
              </li>

              <li style={{ borderLeft: '2px solid #6a148e' }}>
                <p>
                  Revealed: how lockdown has changed homehunters’ priorities
                </p>
                <span style={{ fontSize: '0.7rem', color: '#91919b' }}>
                  July 2, 2020
                </span>
              </li>

              <li>All property news</li>
            </ul>
            <ul>
              <li>
                <h3>Guides</h3>
              </li>
              <li>Property guides</li>
              <li>Moving guides for buyers</li>
              <li>Moving guides for renters</li>
              <li>Running Costs</li>
              <li>Treehouse</li>
            </ul>
            <ul>
              <li>
                <h3>Get it done</h3>
              </li>
              <li>Find an agent</li>
              <li>Save on your energy bills</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavLink;
