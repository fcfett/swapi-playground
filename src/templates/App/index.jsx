import React from 'react';
import './style.scss';

import Store from '../../store';
import SvgDefs from '../../components/molecules/SvgDefs';
import Header from '../../components/organisms/Header';
import Main from '../../components/organisms/Main';
import Footer from '../../components/organisms/Footer';

export default () => (
  <div className="App">
    <Store>
      <SvgDefs />
      <Header />
      <Main />
      <Footer />
    </Store>
  </div>
);
