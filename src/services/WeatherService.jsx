/* eslint-disable no-unused-vars */
import { data } from "autoprefixer";
import { DateTime } from "luxon";

// eslint-disable-next-line no-unused-vars
const API_KEY = "6c7a01479f96cff6199baf9fbcdc1469";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// eslint-disable-next-line no-unused-vars
const getWeatherData = (infoType, searchParams) => {
  // eslint-disable-next-line no-unused-vars
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  // console.log(url);

  return fetch(url).then((res) => res.json());
  // .then((data) => data);
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
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
    lon,
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

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = async () =>
    await getWeatherData("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(formatForecastWeather);
  console.log(formattedCurrentWeather);
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;
