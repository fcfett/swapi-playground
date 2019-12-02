import React from 'react';

import Thumb from '../../molecules/Thumb';

export default () => (
  <main>
    <ul className="movies">
      <li className="card">
        <Thumb date="1977-05-25" alt="" />
      </li>
      <li className="card">
        <Thumb date="1980-05-17" alt="" />
      </li>
      <li className="card">
        <Thumb date="1983-05-25" alt="" />
      </li>
      <li className="card">
        <Thumb date="1999-05-19" alt="" />
      </li>
      <li className="card">
        <Thumb date="2002-05-16" alt="" />
      </li>
      <li className="card">
        <Thumb date="2005-05-19" alt="" />
      </li>
      <li className="card">
        <Thumb date="2015-12-11" alt="" />
      </li>
    </ul>
  </main>
);
