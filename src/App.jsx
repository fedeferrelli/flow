import { useState, useEffect } from 'react';

import apiCall from './api';

function App () {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const dataApi = await apiCall.fetch({ lat: 35, lon: 26 });

      setData(dataApi);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Flow Challenge</h1>
      <p>Fede Mazza</p>
      {typeof (data) !== 'undefined' && data[0].dt}
    </div>
  );
}

export default App;
