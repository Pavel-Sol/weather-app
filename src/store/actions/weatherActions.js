import { getWeatherAC } from './../reducers/weatherReducer';

export const getWeather = () => {
  return async (dispatch) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=саратов,ru&appid=38bd2a6dccee12ceb0fe1c7b9ecb81bd&lang=ru`,
    );

    const json = await res.json();
    dispatch(getWeatherAC(json));
  };
};
