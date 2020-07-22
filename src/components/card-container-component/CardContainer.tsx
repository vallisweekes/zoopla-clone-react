import React, { useEffect } from 'react';
import CityPropertyCard from '../city-card-component/CityPropertyCard';
import results from '../../db/cityProperties.json';
import './card-container.styles.css';

interface ICardContainerProps {
  active: string;
}

type City = {
  id: number;
  image: string;
  heading: string;
  city_list: string[];
  additional: string;
  status: string;
};
const CardContainer: React.FC<ICardContainerProps> = ({ active }) => {
  const [filteredProperties, setFilteredProperties] = React.useState<City[]>(
    []
  );
  // const [selectedFooter, setSelectedFooter] = React.useState(1);

  useEffect(() => {
    const setPropView = () => {
      return results.results.filter((city: City) => city.status === active);
    };
    setFilteredProperties(setPropView());
  }, [active]);

  return (
    <div className="card-container">
      {filteredProperties &&
        filteredProperties.map((city: City) => (
          <CityPropertyCard key={city.id} city={city} />
        ))}
    </div>
  );
};

export default CardContainer;
