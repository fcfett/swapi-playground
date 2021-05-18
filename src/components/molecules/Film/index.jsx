import React, { useState, useRef } from 'react';
import './style.scss';

import FilmThumb from '../FilmThumb';
import FilmContent from '../FilmContent';
import FocusHandler from '../../atoms/FocusHandler';

export default ({ data }) => {
  const [isActive, setActive] = useState(false);
  const [isVisited, setVisited] = useState(false);
  const { title, release_date } = data;
  const thumbRef = useRef();

  const toggleActive = (toggle) => {
    if (toggle) setVisited(true);
    setActive(toggle ? toggle : !isActive);
  };

  console.log(title, release_date, data);

  return (
    <li className={`card ${isActive ? 'active' : ''} ${isVisited ? 'visited' : ''}`}>
      <FocusHandler text={title} targetRef={thumbRef} />
      <FilmThumb date={release_date} alt={title} ref={thumbRef} onClick={() => toggleActive(true)} />
      <FilmContent data={data} isVisible={isActive} onClose={() => toggleActive(false)} />
    </li>
  );
};
