import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity}) => {
  return (
    <div>
        <Button onClick={()=>{setCity('');}} variant="warning" >currentLocation</Button>
        {
            cities.map((items,i)=>{
                return(<Button onClick={()=>{
                    setCity(items);
                }} key={i} variant="warning" >{items}</Button>)
            })
        }
    </div>
  )
}

export default WeatherButton