import { useState, useEffect } from 'react';

import apiCall from './api';
import CurrentWeather from './Components/CurrentWeather';
import Forecast from './Components/Forecast';
import Selector from './Components/Selector';

function App () {
  const [data, setData] = useState();
  const [currentPosition, setCurrentPosition] = useState();
  const [citiToShow, setCitiToShow] = useState('Tu ubicación');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const current = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };

      setCurrentPosition(current);
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const dataApi = await apiCall.fetch(currentPosition);

      setData(dataApi);
    };

    typeof (currentPosition) !== 'undefined' && getData();
  }, [currentPosition]);

  return (
    <div>
      <h1>Flow Challenge</h1>
      <p>Fede Mazza</p>
      {typeof (data) !== 'undefined'
        ? <>
        <Selector
            citiToShow={citiToShow}
            currentPosition={currentPosition}
            setCitiToShow={setCitiToShow}
            setData={setData}
          />
      <CurrentWeather currentWeather={data[0]}/>
      <Forecast forecast={data.slice(1)}/>
      </>
        : 'Cargando data'}

    </div>
  );
}

export default App;
