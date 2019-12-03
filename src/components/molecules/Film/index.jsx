import React, { useState, useRef, useEffect } from 'react';
import './style.scss';

import Thumb from '../Thumb';
import Icon from '../../atoms/Icon';

export default ({ date, alt }) => {
  const [isActive, setActive] = useState(false);
  const [scrolling, setScrolling] = useState();

  const toggleActive = (toggle) => {
    console.warn('toggleActive', toggle);
    setActive(toggle ? toggle : !isActive);
  };

  const introRef = useRef();
  useEffect(() => {
    triggerCrawling();
  }, [isActive]); // eslint-disable-line

  const triggerCrawling = () => {
    const introEl = introRef.current;
    clearInterval(scrolling);
    if (isActive) {
      introEl.scrollTop = 0;
      const interval = setInterval(() => {
        introEl.scrollTop += 2;
        const { offsetHeight, scrollTop, scrollHeight } = introEl;
        console.warn(`scrolling ${scrollTop} of ${scrollHeight - offsetHeight}`);
        if (offsetHeight + scrollTop === scrollHeight) {
          console.warn('clearInterval');
          clearInterval(interval);
          setScrolling(null);
        }
      }, 40);
      setScrolling(interval);
    }
  };

  return (
    <li className={`card ${isActive ? 'active' : ''}`}>
      <Thumb date={date} alt={alt} onClick={() => toggleActive(true)} />
      <section className="content">
        <button className="btn-close" onClick={() => toggleActive(false)}>
          <Icon name="close" height={32} width={32} />
        </button>
        <article className="intro">
          <section className="crawler" ref={introRef}>
            <p className="text">{`It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first
          victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal
          secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough
          power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia
          races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and
          restore\r\nfreedom to the galaxy....`}</p>
          </section>
          <button className={`btn-replay ${(!scrolling && 'visible') || ''}`} onClick={() => triggerCrawling()}>
            <Icon name="reload" width={60} height={60} />
          </button>
        </article>
        <article className="info">
          <h2>Episode I</h2>
          <h1>A New Hope</h1>
          <p>{date}</p>
          <p>Directed by George Lucas</p>
          <p>Produced by Gary Kurtz, Rick McCallum</p>
          <ul>
            <li>
              <h2>3</h2>
              <span>planets</span>
            </li>
            <li>
              <h2>5</h2>
              <span>species</span>
            </li>
            <li>
              <h2>18</h2>
              <span>characters</span>
            </li>
            <li>
              <h2>4</h2>
              <span>vehicles</span>
            </li>
            <li>
              <h2>8</h2>
              <span>starships</span>
            </li>
          </ul>
        </article>
      </section>
    </li>
  );
};
