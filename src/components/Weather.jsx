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
        ? <div className="weather__body">
            <div className='weather__city'> {data.name}</div>
            <div className="weather__list">
              <div className="weather__item">
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/>
              </div>
              <div className='weather__item'>
                  <p className='heading'>temp</p>
                  <p className='desc'>{(data.main.temp - 273.15).toFixed()} &#8451;</p>
              </div>
              <div className='weather__item'>
                  <p className='heading'>wind</p>
                  <p className='desc'>{data.wind.speed} м/с</p>
              </div>
              <div className='weather__item'>
                  <p className='heading'>humidity</p>
                  <p className='desc'>{data.main.humidity}</p>
              </div>
              <div className='weather__item'>
                  <p className='heading'>pressure</p>
                  <p className='desc'>{data.main.pressure}</p>
              </div>
            </div>
        </div>
        : !loading && <h2>город не выбран</h2>
      }
    </div>
  );
};

export default Weather;
