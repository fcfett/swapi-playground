import React from 'react';

const images = '../../../assets/images';

export default () => (
  <main>
    <ul className="movies">
      <li className="card">
        <img src={`${images}/1977-05-25.jpeg`} alt="" />
      </li>
      <li className="card">
        <img src={`${images}/1980-05-17.jpeg`} alt="" />
      </li>
      <li className="card">
        <img src={`${images}/1983-05-25.jpeg`} alt="" />
      </li>
      <li className="card">
        <img src={`${images}/1999-05-19.jpeg`} alt="" />
      </li>
      <li className="card">
        <img src={`${images}/2002-05-16.jpeg`} alt="" />
      </li>
      <li className="card">
        <img src={`${images}/2005-05-19.jpeg`} alt="" />
      </li>
      <li className="card">
        <img src={`${images}/2015-12-11.jpeg`} alt="" />
      </li>
    </ul>
  </main>
);
