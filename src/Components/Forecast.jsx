import ForecastDayByDay from './ForecastDayByDay';

function Forecast ({ forecast }) {
  return (
    <div className="mt-4 sm:flex sm:flex-row sm:flex-wrap justify-evenly w-11/12 m-auto sm:w-auto overflow-auto whitespace-nowrap">

      {forecast.map((day, i) => (
        <div key={day.dt} className="w-1/2 inline-block rounded-lg mr-3 align-middle overflow-hidden text-gray-800 whitespace-normal sm:flex sm:w-auto">
        <ForecastDayByDay dayData={day} index={i}/>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
