import { GET_WEATHER, SHOW_LOADER, HIDE_LOADER, SET_ALERT, } from '../types';
import {ShowLoaderActionType, HideLoaderActionType,
   SetAlertActionType, WeatherActionType,
    WeatherErrorType, WeatherDataType} from '../types';

import { RootStateType } from '../index';
import { ThunkAction } from 'redux-thunk';

export const getWeather = (city: string): ThunkAction<void, RootStateType, null, WeatherActionType> => {
  return async (dispatch) => {
    dispatch(showLoader());

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=38bd2a6dccee12ceb0fe1c7b9ecb81bd&lang=ru`,
      );

      if (!res.ok) {
        const resData: WeatherErrorType = await res.json();
        throw new Error(resData.message);
      }

      const json: WeatherDataType = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: json,
      });
    } catch (error) {
      dispatch(setAlert(error.message));
    }

    dispatch(hideLoader());
  };
};

export const showLoader = (): ShowLoaderActionType => {
  return { type: SHOW_LOADER };
};

export const hideLoader = (): HideLoaderActionType => {
  return { type: HIDE_LOADER };
};

export const setAlert = (errorMsg: string): SetAlertActionType => {
  return {
    type: SET_ALERT,
    payload: errorMsg,
  };
};
