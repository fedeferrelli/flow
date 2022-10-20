export const dayStringToShow = (index, day) => {
  if (index === 0) return 'mañana';
  else if (index === 1) return 'pasado mañana';
  else return day;
};

function ForecastDayByDay ({ dayData, index }) {
  const { dt: time, temp: currentTemp, tempMax, tempMin, weather } = dayData;

  return (

    <section className="w-full sm:min-w-[220px] m-auto border border-gray-800/25 rounded-lg bg-secondary text-center text-text_main py-4 flex flex-col gap-4">
      <div>
          {dayStringToShow(index, time)}
      </div>

      <div className="text-4xl font-normal">{currentTemp}º </div>

      <section className="text-xl">
         <div >{tempMax}º - {tempMin}º</div>
      </section>

      <div>{weather}</div>

    </section>

  );
}

export default ForecastDayByDay;
