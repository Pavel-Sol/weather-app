import Form from './components/Form';
import Weather from './components/Weather';
import Alert from './components/Alert';
import { useSelector } from 'react-redux';

function App() {
  const errorMsg = useSelector((state) => state.alert);

  return (
    <div className="App">
      <div className="container">
        <h1>weather-app</h1>
        <Form />
        <Weather />
        {errorMsg && <Alert />}
      </div>
    </div>
  );
}

export default App;
