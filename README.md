# weather-app

![Weather-app](https://i.postimg.cc/bNF1q93P/Screenshot-2023-09-01-at-4-02-47-PM.png)

## Description

This was implemented this using REACT JS and Tailwind CSS.<br>The website is mobile responsive.<br>

This was supposed to be a full functioning weather app. Unfortunately, `Open Weather Map API` placed pricing on their `onecall` service. which is what i would use to generate the Hourly and Daily Forecast.

```js
const formattedForecastWeather = async () =>
//here nothing will be fetched cause the onecall service is not available for free users
    await getWeatherData("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(formatForecastWeather);
  console.log(formattedCurrentWeather);
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};
```

## [for more info on OpenWeatherMap API](https://openweathermap.org/api/one-call-3)

I would leave the fetch logic in the `WeatherService.jsx` file.

For now, Enjoy the UI of the application.

### Setup:

-- install node modules

```sh
npm install
```

- run dev server

```sh
npm run dev
```

#### magic word for 'permission denied'

```sh
sudo chmod +x node_modules/.bin/vite
```

-The project loads up in your browser🌟
