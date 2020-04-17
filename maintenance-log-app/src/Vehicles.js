import React, { Component } from 'react';
import Logs from './Logs'


// const base_url = window.SERVER_ADDRESS
const base_url = 'http://localhost:8000/api/'

class Vehicles extends Component {
  constructor(props){
    super()
  }

  render() {
    // console.log('Vehicle Component Render', this.props.props.vehicles[0])
    let vehicleDetails = this.props.props.vehicles.map((vehicle, index) => {
        // console.log(vehicle)
        return (
            <div key={index}>
                <li>{`${vehicle.model_year} ${vehicle.make} ${vehicle.model}`}</li>
                <li>{`trim: ${vehicle.trim}`}</li>
                <li>{`color: ${vehicle.color}`}</li>
                <li></li>
            </div>

        )
            
    })


    return (
        <div>
            <li></li>
            -- Vehicles Component --
            {vehicleDetails}
        </div>
    )
  }
}

export default Vehicles;