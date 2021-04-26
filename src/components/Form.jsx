import { useDispatch} from 'react-redux';
import {getWeather} from './../store/actions/weatherActions'
import {useState} from 'react'

const Form = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')

const submitHandler = async (e) => {
  e.preventDefault()
  dispatch(getWeather(city))
}

const changeHandler = (e) => {
  setCity(e.currentTarget.value)
}

  return (
    <div className="form__wrap">
      <form onSubmit={submitHandler}>
        <input required onChange={changeHandler} type="text" />
        <button>узнать погоду</button>
      </form>
    </div>
  );
};

export default Form;
