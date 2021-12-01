import React from 'react';
// import sections

import Header from '../components/layout/Header';
import Attribution from '../components/sections/blog_articles/Attribution';
import Footer from '../components/layout/Footer';

const AttributionBlog = () => {

  return (
    <>
      <Header />
      <Attribution  hasBgColor/>
      <Footer style={{backgroundColor:'#01CAFF'}}/>
    </>
  );
}

export default AttributionBlog;
