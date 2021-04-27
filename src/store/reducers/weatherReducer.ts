import { GET_WEATHER, SHOW_LOADER, HIDE_LOADER, SET_ALERT } from '../types';
import { WeatherStateType, WeatherActionType } from '../types';

const defaultState: WeatherStateType = {
  data: null,
  loading: false,
  alert: '',
};

export const weatherReducer = (state = defaultState, action: WeatherActionType): WeatherStateType => {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, data: action.payload };

    case SHOW_LOADER:
      return { ...state, loading: true };

    case HIDE_LOADER:
      return { ...state, loading: false };

    case SET_ALERT:
      return { ...state, alert: action.payload };

    default:
      return state;
  }
};
