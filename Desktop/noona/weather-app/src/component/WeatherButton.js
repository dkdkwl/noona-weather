import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {
    console.log("cities",cities)
  return (
    <div>
        <Button variant="warning" >Warning</Button>{' '}
            {cities.map((items)=>{
                return(<Button variant="warning">{items}</Button>)
                
            })}
    </div>
  )
}

export default WeatherButton