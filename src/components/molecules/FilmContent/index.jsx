import React, { useState, useRef, useEffect } from 'react';
import './style.scss';

import Icon from '../../atoms/Icon';
import useKeyPress from '../../../hooks/useKeyPress';
import { getRomanNumber } from '../../../utils/helpers';

export default ({ data, isVisible, onClose }) => {
  const [scrolling, setScrolling] = useState();
  const EscKeyPress = useKeyPress('Escape');
  const introRef = useRef();

  useEffect(() => {
    triggerCrawling();
  }, [isVisible]); // eslint-disable-line

  useEffect(() => {
    if (isVisible && EscKeyPress) onClose();
  }, [EscKeyPress]); // eslint-disable-line

  const triggerCrawling = () => {
    const introEl = introRef.current;
    clearInterval(scrolling);
    if (isVisible) {
      introEl.scrollTop = 0;
      const interval = setInterval(() => {
        introEl.scrollTop += 2;
        const { offsetHeight, scrollTop, scrollHeight } = introEl;
        if (offsetHeight + scrollTop === scrollHeight) {
          clearInterval(interval);
          setScrolling(null);
        }
      }, 40);
      setScrolling(interval);
    }
  };

  const { title, episode_id, opening_crawl, director, producer, release_date, ...rest } = data;
  const { characters, planets, starships, vehicles, species } = rest;

  const renderQuantifiers = () =>
    Object.entries({ characters, planets, starships, vehicles, species }).map(([key, arrValues]) => (
      <li key={`${release_date}-${key}`}>
        <h2>{arrValues.length}</h2>
        <span>{key}</span>
      </li>
    ));

  return (
    <section className="content">
      <button className="btn-close" title="Close" onClick={onClose}>
        <Icon name="close" height={32} width={32} />
      </button>
      <article className="intro">
        <section className="crawler" ref={introRef}>
          <p className="text">{`${opening_crawl}`}</p>
        </section>
        <button
          className={`btn-replay ${!scrolling ? 'visible' : ''}`}
          title="Replay"
          onClick={() => triggerCrawling()}
        >
          <Icon name="reload" width={60} height={60} />
        </button>
      </article>
      <article className="info">
        <h2>Episode {getRomanNumber(episode_id)}</h2>
        <h1>{title}</h1>
        <p>{release_date}</p>
        <p>Directed by {director}</p>
        <p>Produced by {producer}</p>
        <ul>{renderQuantifiers()}</ul>
      </article>
    </section>
  );
};
