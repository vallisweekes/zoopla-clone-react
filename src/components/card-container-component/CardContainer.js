import React, { useEffect } from 'react';
import CityPropertyCard from '../city-card-component/CityPropertyCard';
import results from '../../db/cityProperties.json';
import './card-container.styles.css';
const setting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 320,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true },
    },
  ],
};

const CardContainer = ({ active }) => {
  const [filteredProperties, setFilteredProperties] = React.useState([]);
  // const [selectedFooter, setSelectedFooter] = React.useState(1);

  useEffect(() => {
    const setPropView = () => {
      return results.results.filter((city) => city.status === active);
    };
    setFilteredProperties(setPropView());
  }, [active]);

  return (
    <div className="card-container">
      {filteredProperties &&
        filteredProperties.map((city) => (
          <CityPropertyCard settings={setting} key={city.id} city={city} />
        ))}
    </div>
  );
};

export default CardContainer;
