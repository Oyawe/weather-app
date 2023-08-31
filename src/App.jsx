import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeandLocation from "./components/TimeandLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/WeatherService";
// import getWeatherData from "./services/WeatherService";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
  const fetchWeather = async () => {
    // eslint-disable-next-line no-unused-vars
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  };
  fetchWeather();
  return (
    <div className="App">
      <div className="mx-auto max-w-screen-md mt-4 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons />
        <Inputs />

        <TimeandLocation />
        <TemperatureAndDetails />
        <Forecast title={"hourly forecast"} />
        <Forecast title={"daily forecast"} />
      </div>
    </div>
  );
}

export default App;
