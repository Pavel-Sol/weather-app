import { useDispatch, useSelector } from 'react-redux';
import {getWeatherAC} from './../store/reducers/weatherReducer'

const Form = () => {
  const dispath = useDispatch()

const fetchData = async (e) => {
  e.preventDefault()

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=саратов,ru&appid=38bd2a6dccee12ceb0fe1c7b9ecb81bd&lang=ru`);

  const json = await res.json();
  dispath(getWeatherAC(json))
  

}


  return (
    <div className="form__wrap">
      <form>
        <input type="text" />
        <button onClick={(e) => fetchData(e)}>узнать погоду</button>
      </form>
    </div>
  );
};

export default Form;
