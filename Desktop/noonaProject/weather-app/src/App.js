import { useEffect,useState } from 'react';
import './App.css';


// 1. 앱이 싱행되자마자 현재위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨상태정보가 들어간다.
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들어오는 동안 로딩스피너가 돈다.

function App() {
  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      
      console.log("현재위치",lat,lon)
    });
  }

  useEffect(()=>{
    getCurrentLocation();
  },[])

  return (
    <div className="App">
      hiii
    </div>
  );
}

export default App;
