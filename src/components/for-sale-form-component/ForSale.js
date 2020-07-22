import React from 'react';
import Select from '../shared/select-component/Select';
import SearchBar from '../search-bar-component/SearchBar';
import Checkbox from '../shared/checkbox-component/Checkbox';
const ForSale = ({
  noMin,
  noMax,
  property,
  bedrooms,
  dateAdded,
  sortBy,
  visible,
  label,
  distance,
}) => {
  return (
    <React.Fragment>
      <div className="search-top">
        <Select
          label="Min Price"
          name="min price"
          id="min-price"
          formType="minPriceForm"
          data={noMin}
          isVisible={true}
        />
        <Select
          label="Max Price"
          name="max price"
          id="max-price"
          formType="maxPriceForm"
          data={noMax}
          isVisible={true}
        />
        <Select
          label="Property Type"
          name="property type"
          id="property-type"
          formType="propertyTypeForm"
          data={property}
          isVisible={true}
        />
        <Select
          label="Bedrooms"
          name="bedrooms"
          id="bedrooms"
          formType="bedroomsForm"
          data={bedrooms}
          isVisible={true}
        />
        <Select
          label="Distance from location"
          name="distance from location"
          id="distance"
          formType="distancefromloaction"
          data={distance}
          isVisible={visible}
        />
        <Select
          label="Added"
          name="added"
          id="added"
          formType="added"
          data={dateAdded}
          isVisible={visible}
        />
        <Select
          label="Sort By"
          name="sort by"
          id="sort-by"
          formType="sortby"
          data={sortBy}
          isVisible={visible}
        />
      </div>
      <SearchBar
        isVisible={visible}
        placeholder="e.g Garden or Wooden"
        label="Keywords"
      />
      {visible ? <Checkbox label={label} /> : null}
    </React.Fragment>
  );
};

export default ForSale;
