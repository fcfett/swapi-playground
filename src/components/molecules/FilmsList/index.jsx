import React, { useContext } from 'react';
import './style.scss';

import Loader from '../../atoms/Loader';
import Toggle from '../../atoms/Toggle';
import Film from '../Film';
import { FilmsContext } from '../../../store/Films';
import { sortByKey } from '../../../utils/helpers';

export default () => {
  const { state, setState } = useContext(FilmsContext);
  const { data, loaded, sortBy } = state;
  const sortKeys = ['release_date', 'episode_id'];

  const toggleSort = () => {
    const key = sortBy === sortKeys[0] ? sortKeys[1] : sortKeys[0];
    setState({ sortBy: key, data: [] });
    setTimeout(() => {
      setState({ data: sortByKey(data, key) });
    });
  };

  const renderLoader = () =>
    !loaded && (
      <li>
        <Loader />
      </li>
    );

  const renderToggle = () =>
    loaded && (
      <li className="full">
        <Toggle
          id={'toggle-sort'}
          title="Sort By"
          leftLabel="Release"
          rightLabel="Episode"
          checked={sortBy === 'episode_id'}
          onChange={() => toggleSort()}
        />
      </li>
    );

  const renderFilms = (data) => loaded && data.map((item) => <Film key={`film-${item.release_date}`} data={item} />);

  return (
    <ul className="movies">
      {renderToggle()}
      {renderFilms(data)}
      {renderLoader()}
    </ul>
  );
};
