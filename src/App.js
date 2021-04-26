import Form from './components/Form';
import Weather from './components/Weather';
import Alert from './components/Alert';
import { useSelector } from 'react-redux';

function App() {
  const errorMsg = useSelector((state) => state.alert);
  // console.log(errorMsg);

  return (
    <div className="App">
      <h1>weather-app</h1>
      <Form />
      <Weather />
      {errorMsg && <Alert />}
    </div>
  );
}

export default App;
