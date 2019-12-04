import React, { useState, useEffect, createContext } from 'react';
import { getLocalStorageObject, setLocalStorageObject } from '../../utils/helpers';

const LOCAL_STORAGE_ID = 'swapi-data';
const INITIAL_STATE = {
  data: [],
  loaded: true,
  sortBy: null
};

const getLocalStorageState = () => {
  const lsState = getLocalStorageObject(LOCAL_STORAGE_ID);
  return !lsState ? INITIAL_STATE : lsState;
};

const setLocalStorageState = (state) => setLocalStorageObject(LOCAL_STORAGE_ID, state);

export const FilmsContext = createContext();
export const FilmsProvider = ({ children }) => {
  const [state, setState] = useState(getLocalStorageState());
  const updateState = (payload) => setState((state) => ({ ...state, ...payload }));

  const providerValue = {
    state,
    setState: updateState
  };

  useEffect(() => {
    setLocalStorageState(state);
  }, [state]);

  return <FilmsContext.Provider value={providerValue}>{children}</FilmsContext.Provider>;
};

export default {
  FilmsContext,
  FilmsProvider
};
