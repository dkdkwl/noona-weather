import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity}) => {
  return (
    <div>
        <Button variant="warning" >Warning</Button>{' '}
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