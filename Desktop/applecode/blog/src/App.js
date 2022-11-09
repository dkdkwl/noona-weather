/*eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [logo,setLogo] = useState('ReactBlog');
  let [따봉,따봉변경] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>

      <button onClick={
        ()=>{
          let copy2 = [...글제목];
          copy2.sort();
          글제목변경(copy2);
        }}>가나다순정렬</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천'
          글제목변경(copy);
        }}>글제목변경</button>

      <div className='list'>
        <h4>{글제목[0]}<span onClick={()=>{ 따봉변경(따봉+1);}}>🤣</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;