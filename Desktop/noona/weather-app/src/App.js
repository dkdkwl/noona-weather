import { useEffect,useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



// 1. 앱이 싱행되자마자 현재위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨상태정보가 들어간다.
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들어오는 동안 로딩스피너가 돈다.

function App() {

  const [weather, setWeather] = useState(null);
  const cities = ['paris','new york','tokyo','seoul'];
  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = 48.864716;
      let lon = 2.349014;
      
      getWeatherByCurrentLocation(lat,lon);
      // console.log("현재위치",lat,lon)
    });
  }

  const getWeatherByCurrentLocation = async (lat,lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5979fa073a92be4229a06661e8b3626d&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(()=>{
    getCurrentLocation();
  },[])

  return (
    <div  className='container'>
      <WeatherBox weather = {weather} />
      <WeatherButton cities = {cities} />
    </div>
  );
}

export default App;
