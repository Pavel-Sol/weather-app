import { useDispatch} from 'react-redux';
import {getWeather} from '../store/actions/weatherActions'
import React, {FC, useState} from 'react'


const Form: FC = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')

const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  dispatch(getWeather(city))
  setCity('')
}

const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  setCity(event.currentTarget.value)
}

  return (
    <div className="form__wrap">
      <form onSubmit={submitHandler}>
        <input className='form__input' required onChange={changeHandler} type="text" value={city}/>
        <button type="submit" className='form__btn btn'>узнать погоду</button>
      </form>
    </div>
  );
};

export default Form;
