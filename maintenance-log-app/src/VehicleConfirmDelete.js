import React, {Component} from 'react';
import { Link } from "react-router-dom"

class VehicleConfirmDelete extends Component {

  render(){
    console.log('VehicleConfirmDelete render this.props ',this.props)

    const vehicleInfo = this.props.vehicle.find(thisvehicle => thisvehicle.id == this.props.match.params.id)

    return (
        <div>
          <div className='padding-left'>
            <h4>{`${vehicleInfo && vehicleInfo.model_year} ${vehicleInfo && vehicleInfo.make} ${vehicleInfo && vehicleInfo.model}`}</h4>
            <div>{`trim: ${vehicleInfo && vehicleInfo.trim}`}</div>
            <div>{`color: ${vehicleInfo && vehicleInfo.color}`}</div>          
          </div>
          <p><button onClick={this.props.handleDeleteVehicle} id={vehicleInfo && vehicleInfo.id}>Confirm Delete</button></p>
          <Link to={`/vehicles`}><p><button>Cancel</button></p></Link>

        </div>
    )
  }
}
export default VehicleConfirmDelete
;