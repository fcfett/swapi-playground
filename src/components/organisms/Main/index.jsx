import React, { useContext, useEffect } from 'react';

import Loader from '../../atoms/Loader';
import Film from '../../molecules/Film';
import { FilmsContext } from '../../../store/Films';
import { getFilms } from '../../../services/swapi';
import { sortByKey } from '../../../utils/helpers';

export default () => {
  const { state, setState } = useContext(FilmsContext);
  const { data, loaded /*,sortBy*/ } = state;

  const fetchData = () => {
    if (data.length === 0) {
      setState({ loaded: false });
      getFilms()
        .then(({ data }) => {
          const films = (data && data.results) || [];
          const key = 'release_date';
          setState({ data: sortByKey(films, key), sortBy: key });
        })
        .catch(console.error)
        .finally(() => {
          setState({ loaded: true });
        });
    }
  };

  const renderFilms = (data) => data.map((item) => <Film key={`film-${item.release_date}`} {...item} />);

  useEffect(() => {
    fetchData();
  }, []); //eslint-disable-line

  return (
    <main>
      <ul className="movies">
        {loaded && renderFilms(data)}
        {!loaded && (
          <li>
            <Loader />
          </li>
        )}
      </ul>
    </main>
  );
};
