import React, { useContext, useEffect } from 'react';

import FilmsList from '../../molecules/FilmsList';
import { FilmsContext } from '../../../store/Films';
import { getFilms } from '../../../services/swapi';
import { sortByKey } from '../../../utils/helpers';

export default () => {
  const { state, setState } = useContext(FilmsContext);
  const { data } = state;

  useEffect(() => {
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
  }, []); //eslint-disable-line

  return (
    <main>
      <FilmsList />
    </main>
  );
};
