import React from 'react';
import Layout from './components/layout-component/Layout';
import HeaderHero from './components/header-hero-component/HeaderHero';
import Main from './components/main-content-component/Main';
import BasicBlock from './components/basic-block-component/BasicBlock';
import HomeValidation from './components/home-validation-component/HomeValidation';
import HomeExtraLinks from './components/home-extra-links-components/HomeExtraLinks';
import PropertyList from './components/property-list-component/PropertyList';
import BlogBlock from './components/blog-block-component/BlogBlock';
import BasicCard from './components/basic-card-component/BasicCard';
import BasicCard2 from './components/basic-card-component/BasicCard2';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Layout>
        <HeaderHero />
        <Main>
          <BasicBlock>
            <HomeValidation />
          </BasicBlock>
          <BasicBlock>
            <HomeExtraLinks />
          </BasicBlock>
          <PropertyList />
          <BlogBlock heading="Keep up to date with the latest property news">
            <BasicCard />
          </BlogBlock>
          <BlogBlock heading="Get the know-how with our property guides">
            <BasicCard2 />
          </BlogBlock>
        </Main>
      </Layout>
    </React.Fragment>
  );
};

export default App;
