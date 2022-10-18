
function CurrentWeather ({ citiName, currentWeather }) {
  const { dt: time, temp: currentTemp, tempMax, tempMin, weather } = currentWeather;

  return (
    <div className="w-11/12 mt-4  sm:max-w-lg m-auto border border-gray-300/75 rounded-lg bg-gray-300/25 text-center text-gray-800 py-4 shadow-lg flex flex-col gap-4">
      <h1 className="text-lg ">{time} <span className="block text-4xl font-semi-bold"> {citiName}</span></h1>

      <div className="text-4xl">{currentTemp}º </div>

      <section className="text-xl">
         <div >{tempMax}º - {tempMin}º</div>
      </section>

      <div>{weather}</div>
    </div>
  );
}

export default CurrentWeather;
