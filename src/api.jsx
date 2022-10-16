export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getTemperature = (tempLong) => {
  return Math.round(tempLong * 10) / 10;
};

const apiCall = {
  fetch: async (city) => {
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&units=metric&lang=es&appid=${API_KEY}`
    );

    const response = await request.json();

    const dataWeather = [];

    dataWeather.push({
      dt: new Date(response.current.dt * 1000).toLocaleDateString('ES-ar', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }),
      temp: getTemperature(response.current.temp),
      tempMax: getTemperature(response.daily[0].temp.max),
      tempMin: getTemperature(response.daily[0].temp.min),
      weather: capitalize(response.current.weather[0].description)
    });

    response.daily.slice(1, 6).map((e) => {
      dataWeather.push({
        dt: new Date(e.dt * 1000).toLocaleDateString('ES-ar', {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        }),
        temp: getTemperature(e.temp.day),
        tempMax: getTemperature(e.temp.max),
        tempMin: getTemperature(e.temp.min),
        weather: capitalize(e.weather[0].description)
      });
    });

    return dataWeather;
  }
};

export default apiCall;
