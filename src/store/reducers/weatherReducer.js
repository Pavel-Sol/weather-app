import { GET_WEATHER, SHOW_LOADER, HIDE_LOADER } from './../types';

const defaultState = {
  data: null,
  loading: false,
};

export const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, data: action.payload };

    case SHOW_LOADER:
      return { ...state, loading: true };

    case HIDE_LOADER:
      return { ...state, loading: false };

    default:
      return state;
  }
};
