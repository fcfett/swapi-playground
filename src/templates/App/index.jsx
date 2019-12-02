import React from 'react';
import './style.scss';

import SvgDefs from '../../components/molecules/SvgDefs';
import Header from '../../components/organisms/Header';
import Main from '../../components/organisms/Main';
import Footer from '../../components/organisms/Footer';

export default () => (
  <div className="App">
    <SvgDefs />
    <Header />
    <Main />
    <Footer />
  </div>
);
