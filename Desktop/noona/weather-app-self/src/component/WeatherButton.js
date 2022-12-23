import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity,city}) => {
  return (
    <div>
        <Button className={city === '' ? 'active' : ''} onClick={()=>{setCity('');}} variant="warning" >currentLocation</Button>
        {
            cities.map((items,i)=>{
                return(<Button className={cities[i] === city ? 'active' : ''} onClick={()=>{ setCity(items); }} key={i} variant="warning" >{items}</Button>)
            })
        }
    </div>
  )
}

export default WeatherButton