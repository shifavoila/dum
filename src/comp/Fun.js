import React, { useState } from 'react'

const Fun = () => {
    const [car, setCar] = useState({
        brand: 'bmw',
        color: 'red',
        price: 25789880
    })

    const updateCar = () => {
        setCar((prev) => {
            return {...prev, color: "blue"}
        })
    }
  return (
    <div>
        <h1>Car is: {car.brand}</h1>
        <p>Color: {car.color}</p>
        <p>Price: {car.price}</p>

        <button onClick={updateCar}>Update</button>
    </div>
  )
}

export default Fun