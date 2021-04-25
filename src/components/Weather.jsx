import {useSelector} from 'react-redux'


const Weather = () => {
  const data = useSelector(state => state.data)
  console.log(data)

  return (
    <div className="weather__wrap">
      <h2>info about weather</h2>
    </div>
  );
};

export default Weather;
