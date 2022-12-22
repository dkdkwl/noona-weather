import { useState,useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";


// 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨상태정보가 들어간다.
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들어오는 동안 로딩스피너가 돈다.

function App() {
  const [weather,setWeather] = useState(null);
  const [city,setCity] = useState('');
  const [loding,setLoding] = useState(false);
  const cities = ['hanoi','paris','new york','seoul'];
  const getCurrentLocation = ()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon);
    });
  }

  const getWeatherByCurrentLocation = async (lat,lon)=>{
    setLoding(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5979fa073a92be4229a06661e8b3626d`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data",data);
    setWeather(data);
    setLoding(false);
  }

  const getWeatherByCity  = async ()=>{
    setLoding(true);    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5979fa073a92be4229a06661e8b3626d`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data",data);
    setWeather(data);
    setLoding(false);
  }

  useEffect(()=>{
    if(city == ''){
      getCurrentLocation();
    }else{
      getWeatherByCity();
    }
  },[city])


  return (
    <div>
      {
        loding ? (
          <div className='container'>
            <ClipLoader size={150} color={"#123abc"} loading={loding}/>
          </div>
        ) : (
          <div className='container'>
            <WeatherBox weather={weather} cities={cities}/>
            <WeatherButton cities={cities} setCity={setCity}/>
          </div>
        )
      }
    </div>
  );
}


export default App;
