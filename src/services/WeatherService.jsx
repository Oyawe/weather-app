// eslint-disable-next-line no-unused-vars
const API_KEY = "6c7a01479f96cff6199baf9fbcdc1469";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// eslint-disable-next-line no-unused-vars
const getWeatherData = (infoType, searchParams) => {
  // eslint-disable-next-line no-unused-vars
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default getWeatherData;
