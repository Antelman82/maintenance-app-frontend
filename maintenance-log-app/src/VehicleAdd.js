import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";

class VehicleAdd extends Component {

  render(){
    console.log('VehicleAdd render this.props ',this.props)

    return (
        <div>
          <h5>To add new vehicle, type into field and click submit</h5>  
          <form
                noValidate
                autoComplete="off"
                onSubmit={this.props.handleVehicleAddSubmit}
                onChange={this.props.handleChange}
            >
                <li><TextField fullWidth={true} type="text" name="model_year" placeholder="model_year" /></li>
                <li><TextField fullWidth={true} type="text" name="make" placeholder="make" /></li>
                <li><TextField fullWidth={true} type="text" name="model" placeholder="model" /></li>
                <li><TextField fullWidth={true} type="text" name="trim" placeholder="trim" /></li>
                <li><TextField fullWidth={true} type="text" name="color" placeholder="color" /></li>             
                <TextField type="submit" />
            </form>
        </div>
    )
    }
}
export default VehicleAdd;