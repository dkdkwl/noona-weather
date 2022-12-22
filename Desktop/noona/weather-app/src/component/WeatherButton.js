import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity}) => {
  return (
    <div>
        <Button
        onClick={()=>{setCity('')}} variant="warning" >current Location</Button>
            {cities.map((items,i)=>{
                return(<Button key={i} variant="warning"
                onClick={()=>{
                    setCity(items)
                }}>
                    {items}
                </Button>)
            })}
    </div>
  )
}

export default WeatherButton