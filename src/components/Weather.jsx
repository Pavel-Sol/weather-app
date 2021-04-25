import {useSelector} from 'react-redux'


const Weather = () => {
  const data = useSelector(state => state.data)

  return (
    <div className="weather__wrap">
      <h2>info about weather</h2>
      {
        data
        ? <div>
            <div> {data.name}</div>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/>
            <div>температура: {(data.main.temp - 273.15).toFixed()} &#8451;</div>
            <div>скорость ветра: {data.wind.speed} м/с</div>
            <div>влажность: {data.main.humidity}</div>
            <div>давление: {data.main.pressure}</div>
        </div>
        : <h2>город не выбран</h2>
      }
    </div>
  );
};

export default Weather;
