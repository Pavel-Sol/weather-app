import {useSelector} from 'react-redux'
import Loader from './Loader'

const Weather = () => {
  const data = useSelector(state => state.data)
  const loading = useSelector(state => state.loading)

  return (
    <div className="weather__wrap">
      {
        loading &&  <Loader/> 
      }
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
        : !loading && <h2>город не выбран</h2>
      }
    </div>
  );
};

export default Weather;
