import React, { useEffect } from 'react';
import SectionHeader from '../section-header-component/SectionHeader';

import CardContainer from '../card-container-component/CardContainer';
import CustomTab from '../custom-tab-component/CustomTab';
import Tab from '../custom-tab-component/tab-component/Tab';
import './property.styles.css';

const PropertyList = () => {
  const [active, setActive] = React.useState<{ label: string }>({ label: '' });

  useEffect(() => {
    setActive({
      label: 'for sale',
    });
  }, []);

  const handleTabActive = (tab: string) => {
    let tabLabel = tab.toLowerCase();
    if (tabLabel === active.label) setActive({ ...active });

    if (tabLabel !== active.label) setActive({ label: tabLabel });
  };
  return (
    <div className="properties-list-section">
      <div className="properties-list-inner">
        <div className="p-top-list">
          <SectionHeader>
            <h3>Browse properties by city or town in the UK</h3>
          </SectionHeader>
          <CustomTab>
            <Tab
              label="For sale"
              active={active}
              handleActive={handleTabActive}
            />
            <Tab
              label="To rent"
              active={active}
              handleActive={handleTabActive}
            />
          </CustomTab>
        </div>
        <div>
          <CardContainer active={active.label} />
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
