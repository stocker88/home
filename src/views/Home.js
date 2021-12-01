import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Blog from '../components/sections/Blog';
import TitleSplit from '../components/sections/TitleSplit';
import TitleSplit2 from '../components/sections/Title2Split';
import Testimonial from '../components/sections/Testimonial';


const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01"/>
       <FeaturesTiles  hasBgColor/>
      < topDivider hasBgColor/>
      <TitleSplit  />
      <FeaturesSplit hasBgColor invertMobile imageFill className="illustration-section-02" />
      <TitleSplit2  />
      <Blog hasBgColor/>
    </>
  );
}

export default Home;
