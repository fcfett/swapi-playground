import React from 'react';
import SvgDefs from '../../components/molecules/SvgDefs';
import Icon from '../../components/atoms/Icon';
import './style.css';

export default () => (
  <div className="App">
    <SvgDefs />
    <header className="App-header">
      <Icon name="logo-fill" />
    </header>
    <main></main>
    <footer>
      made with <strong className="sith">force</strong> by&nbsp;
      <a className="App-link" href="https://www.linkedin.com/in/fcfett/" target="_blank" rel="noopener noreferrer">
        <strong>@fcfett</strong>
      </a>
    </footer>
  </div>
);
