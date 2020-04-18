import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";

class LogAdd extends Component {

  render(){
    console.log('LogAdd render this.props ',this.props)

    return (
        <div>
          <h5>To add new log entry, type into field and click submit</h5>  
          <form
                noValidate
                autoComplete="off"
                onSubmit={this.props.handleLogAddSubmit}
                onChange={this.props.handleChange}
            >
                <li><TextField fullWidth={true} type="text" name="date" placeholder="date of service" /></li>
                <li><TextField fullWidth={true} type="text" name="shop" placeholder="place service was performed" /></li>
                <li><TextField fullWidth={true} type="text" name="receipts" placeholder="documentation" /></li>
                <li><TextField fullWidth={true} type="text" name="repair_name" placeholder="repair_name" /></li>
                <li><TextField fullWidth={true} type="text" name="cost" placeholder="cost ($10.00)" /></li>
                <li><TextField fullWidth={true} type="text" name="description" placeholder="description of service" /></li>     
                <li><TextField fullWidth={true} type="text" name="vehicle" placeholder="vehicle" /></li>
                <TextField type="submit" />
            </form>
        </div>
    )
    }
}
export default LogAdd;