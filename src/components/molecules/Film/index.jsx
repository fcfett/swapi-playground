import React, { useState } from 'react';
import Thumb from '../Thumb';

export default ({ date, alt }) => {
  const [isActive, setActive] = useState(false);
  const toggleActive = (toggle) => setActive(toggle ? toggle : !isActive);
  return (
    <li className={`card ${isActive ? 'active' : ''}`} onClick={() => toggleActive()}>
      <Thumb date={date} alt={alt} />
      <section className="content">{date}</section>
    </li>
  );
};
