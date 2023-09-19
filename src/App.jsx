import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import WeatherCard from './Components/WeatherCard';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const defaultCity = 'karachi';

  useEffect(() => {
    callApi(defaultCity)
  }, []);

  let [weatherData, setWeatherData] = useState({});
  let [searchInput, setSearchInput] = useState(defaultCity);

  const callApi = async (cityName) => {

    try {
      // console.log(cityName, 'cityName');
      let data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=860f5f72aadb51893bb404ed8696dfb2`
      );
      
      // console.log(data, 'data');
      setWeatherData(data.data)
    } catch (err) {
      alert(err, 'error');
    };
  };


  let handleWeatherApi = e => {
    e.preventDefault()
    // console.log(searchInput, "searchInput");
    callApi(searchInput);
  };

  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // 860f5f72aadb51893bb404ed8696dfb2


  return (
    <div className='h-[100%]'>
      <div className='flex mt-5'>
        <Header />
        <form onSubmit={handleWeatherApi} className=' w-[50%] text-right pr-[2%] '>
          <input className='border border-black rounded-xl p-2 ' type="text" placeholder='Enter the City Name' onChange={e => { setSearchInput(e.target.value) }} />
        </form>
      </div>

      <WeatherCard location={weatherData?.name + `, ${weatherData?.sys?.country}`} temperature={weatherData?.main?.temp} minTemp={weatherData?.main?.temp_min} maxTemp={weatherData?.main?.temp_max} pressure={weatherData?.main?.pressure} humidity={weatherData?.main?.humidity} wind={weatherData?.wind?.speed} iconCode={weatherData.weather?.[0]?.icon} description={weatherData.weather?.[0]?.description}  sunrisetimeprops={weatherData?.sys?.sunrise} sunsetprops={weatherData?.sys?.sunset}/>

    </div>
  );
};

export default App
