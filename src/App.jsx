import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeandLocation from "./components/TimeandLocation";
import TopButtons from "./components/TopButtons";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
  return (
    <div className="App">
      <div className="max-w-screen-md py-5 mx-auto mt-4 shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-600 rounded-2xl">
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
