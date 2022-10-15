
function CurrentWeather ({ currentWeather }) {
  return (
    <div>
      <h1>Tiempo actual en</h1>

      <section>
      {Object.keys(currentWeather).map(e => (
  <div key={e}> {e}: {currentWeather[e]}  </div>
      ))}

      </section>

    </div>
  );
}

export default CurrentWeather;
