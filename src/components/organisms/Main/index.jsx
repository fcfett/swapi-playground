import React, { useState, useEffect } from 'react';

import Film from '../../molecules/Film';
import { getFilms } from '../../../services/swapi';

const INITIAL_STATE = {
  data: [],
  loaded: true
};

export default () => {
  const [state, setState] = useState(INITIAL_STATE);
  const updateState = (payload) => setState((state) => ({ ...state, ...payload }));

  useEffect(() => {
    fetchData();
  }, []); //eslint-disable-line

  const fetchData = () => {
    updateState({ loaded: false });
    getFilms()
      .then(({ data }) => {
        const films = (data && data.results) || [];
        console.log(films);
        updateState({ data: films });
      })
      .catch(console.error)
      .finally(() => {
        updateState({ loaded: true });
      });
  };

  const renderFilms = (data) => data.map((item) => <Film key={`film-${item.release_date}`} {...item} />);

  return (
    <main>
      <ul className="movies">{renderFilms(state.data)}</ul>
    </main>
  );
};
