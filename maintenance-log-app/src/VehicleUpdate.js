import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";

class VehicleUpdate extends Component {

  render(){
    // console.log('EquipmentDetails render this.props ',this.props)
    console.log(`this vehicles's id `, this.props.match.params.id)
    console.log('VehicleUpdate Component', this.props.vehicle)

    const vehicleInfo = this.props.vehicle.find(thisvehicle => thisvehicle.id == this.props.match.params.id)
    // console.log('vehicleInfo ', vehicleInfo[0])
    return (
        <div>
          <h5>To update value, type into field and click submit</h5>  
          <form
                noValidate
                autoComplete="off"
                onSubmit={this.props.handleVehicleUpdateSubmit}
                onChange={this.props.handleChange}
                id={this.props.match.params.id}
            >
                <li>
                    {`model year: ${vehicleInfo && vehicleInfo.model_year}`}
                    <TextField fullWidth={true} type="text" name="model_year" placeholder="update model year"/></li>
                <li>
                    {`make: ${vehicleInfo && vehicleInfo.make}`}
                    <TextField fullWidth={true} type="text" name="make" placeholder="update make" /></li>
                <li>
                    {`model: ${vehicleInfo && vehicleInfo.model}`}
                    <TextField fullWidth={true} type="text" name="model" placeholder="update model" /></li>
                <li>
                    {`trim: ${vehicleInfo && vehicleInfo.trim}`}
                    <TextField fullWidth={true} type="text" name="trim" placeholder="update trim" /></li>
                <li>
                    {`color: ${vehicleInfo && vehicleInfo.color}`}
                    <TextField fullWidth={true} type="text" name="color" placeholder="update color" /></li>             
                <TextField type="submit"  />
            </form>
        </div>
    )
    }
}
export default VehicleUpdate;