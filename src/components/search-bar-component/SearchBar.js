import React from 'react';
import SearchIcon from '../search-icon-component/SearchIcon';
import Input from '../shared/input-componet/Input';
import './search-bar.styles.css';

const SearchBar = ({ isVisible, placeholder, label }) => {
  return (
    <React.Fragment>
      {label ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <label className={isVisible ? 'search-bar-label' : 'isVisible'}>
            {label}
          </label>
          <span className={isVisible ? '' : 'isVisible'}>
            <a href="/#">What is this?</a>
          </span>
        </div>
      ) : null}
      <div className={isVisible ? 'search-bar' : 'search-bar isVisible'}>
        <SearchIcon />
        <span>
          <Input inputtype="input" placeholder={placeholder} />
          {/* <input /> */}
        </span>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
