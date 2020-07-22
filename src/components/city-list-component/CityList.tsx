import React from 'react';
import Chevron from '../chevron-component/Chevron';

interface ICityListProps {
  list: any;
}
const CityList: React.FC<ICityListProps> = ({ list }) => {
  return (
    <ul>
      <li key={list.id} className="p-list-styles">
        <span style={{ display: 'inline-block', paddingRight: 7 }}>
          <Chevron color="#595963" height="9" width="9" />
        </span>
        <p>
          <a>{list.city_list}</a>
        </p>
      </li>
    </ul>
  );
};

CityList.propTypes = {};

export default CityList;
