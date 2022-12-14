
function CurrentWeather ({ citiName, currentWeather }) {
  const { dt: time, temp: currentTemp, tempMax, tempMin, weather } = currentWeather;

  return (
    <div className="w-11/12 mt-4  sm:max-w-lg m-auto border border-gray-800/25 rounded-lg bg-secondary text-center text-text_main py-4 shadow-lg flex flex-col gap-4">
      <h1 className="text-lg ">{time} <span className="block text-4xl font-bold"> {citiName}</span></h1>

      <div className="text-4xl font-bold"> {currentTemp}<span className="ml-1 font-thin">º</span> </div>

      <section className="text-xl">
         <div >{tempMax}º - {tempMin}º</div>
      </section>

      <div>{weather}</div>
    </div>
  );
}

export default CurrentWeather;
