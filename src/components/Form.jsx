import { useDispatch, useSelector } from 'react-redux';
import {getWeather} from './../store/actions/weatherActions'

const Form = () => {
  const dispatch = useDispatch()

const fetchData = async (e) => {
  e.preventDefault()
  
  dispatch(getWeather())
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
