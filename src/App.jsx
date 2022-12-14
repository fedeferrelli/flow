import { useState, useEffect } from 'react';

import apiCall from './api';
import Selector from './Components/Selector';
import CurrentWeather from './Components/CurrentWeather';
import Forecast from './Components/Forecast';
import Loading from './Components/Loading';
import PersonalInformation from './Components/PersonalInformation';

function App () {
  const [data, setData] = useState();
  const [currentPosition, setCurrentPosition] = useState();
  const [citiToShow, setCitiToShow] = useState('Tu ubicación');
  const [showLoading, setShowLoading] = useState(true);

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
      setShowLoading(false);
    };

    typeof (currentPosition) !== 'undefined' && getData();
  }, [currentPosition]);

  return (
    <div className="bg-main min-h-screen font-light">
      <PersonalInformation/>
      <div className="max-w-[1268px] m-auto">

      {showLoading
        ? <Loading citiToShow={citiToShow}/>
        : <>
        <Selector
            citiToShow={citiToShow}
            currentPosition={currentPosition}
            setCitiToShow={setCitiToShow}
            setData={setData}
            setShowLoading={setShowLoading}
          />
      <CurrentWeather citiName = {citiToShow} currentWeather={data[0]}/>
      <Forecast forecast={data.slice(1)}/>
      </>
        }
</div>
    </div>
  );
}

export default App;
