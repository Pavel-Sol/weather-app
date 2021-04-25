import { GET_WEATHER, SHOW_LOADER, HIDE_LOADER } from './../types';

export const getWeather = (city) => {
  return async (dispatch) => {
    dispatch(showLoader());
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=38bd2a6dccee12ceb0fe1c7b9ecb81bd&lang=ru`,
    );

    const json = await res.json();
    dispatch({
      type: GET_WEATHER,
      payload: json,
    });

    dispatch(hideLoader());
  };
};

export const showLoader = () => {
  return { type: SHOW_LOADER };
};

export const hideLoader = () => {
  return { type: HIDE_LOADER };
};
