// eslint-disable-next-line no-unused-vars
const API_KEY = "6c7a01479f96cff6199baf9fbcdc1469";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// eslint-disable-next-line no-unused-vars
const getWeatherData = (infoType, searchParams) => {
  // eslint-disable-next-line no-unused-vars
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  //   console.log(url);

  return fetch(url).then((res) => res.json());
  // .then((data) => data);
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, long },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    long,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

export default getFormattedWeatherData;
