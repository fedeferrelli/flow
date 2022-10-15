import { useState, useEffect } from 'react';

import apiCall from './api';
import CurrentWeather from './Components/CurrentWeather';

function App () {
  const [data, setData] = useState();
  const [currentPosition, setCurrentPosition] = useState();

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
      {typeof (data) !== 'undefined' ? <CurrentWeather currentWeather={data[0]}/> : 'Cargando data'}

    </div>
  );
}

export default App;
