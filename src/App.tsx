import Form from './components/Form';
import Weather from './components/Weather';
import Alert from './components/Alert';
import { useSelector } from 'react-redux';
import {RootStateType} from './store'
import { FC } from 'react';

const App: FC = () => {
  const errorMsg = useSelector((state: RootStateType) => state.alert);

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
