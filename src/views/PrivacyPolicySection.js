import React from 'react';
// import sections

import Header from '../components/layout/Header';
import PrivacyPolicy from '../components/sections/PrivacyPolicy';
import Footer from '../components/layout/Footer';

const AttributionBlog = () => {

  return (
    <>
      <Header />
      <PrivacyPolicy  hasBgColor/>
      <Footer style={{backgroundColor:'#01CAFF'}}/>
    </>
  );
}

export default AttributionBlog;
