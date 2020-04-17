import React, { Component } from 'react';
import Logs from './Logs'
import { Link } from "react-router-dom"

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
                <li>{`${vehicle && vehicle.model_year} ${vehicle && vehicle.make} ${vehicle && vehicle.model}`}</li>
                <li>{`trim: ${vehicle && vehicle.trim}`}</li>
                <li>{`color: ${vehicle && vehicle.color}`}</li>
                <Link to={`vehicleupdate/${vehicle && vehicle.id}`}><button
                    id={vehicle && vehicle.id}>Update</button></Link>
                <Link to={`/vehicledelete/${vehicle && vehicle.id}`}><button 
                    id={vehicle && vehicle.id}>Remove</button>
                </Link>
                <li>==========================================</li>
            </div>
        )
    })

    return (
        <div>
            {vehicleDetails}
            <Link to="/vehicleadd"><button>Create New Vehicle</button></Link>
        </div>
    )
  }
}

export default Vehicles;