import { GET_WEATHER } from './../types';

export const getWeather = (city) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=38bd2a6dccee12ceb0fe1c7b9ecb81bd&lang=ru`,
    );

    const json = await res.json();
    dispatch({
      type: GET_WEATHER,
      payload: json,
    });
  };
};
