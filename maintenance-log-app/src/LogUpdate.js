import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import CameraApp from './CameraApp'
import ImageAudioVideo from './ImageAudioVideo'



class LogUpdate extends Component {

    render(){

    // console.log('EquipmentDetails render this.props ',this.props)
    console.log(`this logs's id `, this.props.match.params.id)
    console.log('LogUpdate Component', this.props.log)

    const logInfo = this.props.log.find(thislog => thislog.id == this.props.match.params.id)
    // console.log('logInfo ', logInfo[0])
    return (
        <div>
          <h5>To update value, type into field and click submit</h5>  
          <form
                noValidate
                autoComplete="off"
                onSubmit={this.props.handleLogUpdateSubmit}
                onChange={this.props.handleChange}
                id={this.props.match.params.id}
            >
                <li>
                    {`model year: ${logInfo && logInfo.date}`}
                    <TextField fullWidth={true} type="text" name="date" placeholder="update service date"/></li>
                <li>
                    {`make: ${logInfo && logInfo.shop}`}
                    <TextField fullWidth={true} type="text" name="shop" placeholder="update shop" /></li>
                <li>
                    {`model: ${logInfo && logInfo.receipts}`}
                    <TextField fullWidth={true} type="text" name="receipts" placeholder="update receipts" /></li>
                <li>
                    {`trim: ${logInfo && logInfo.repair_name}`}
                    <TextField fullWidth={true} type="text" name="repair_name" placeholder="update repair name" /></li>
                <li>
                    {`cost: ${logInfo && logInfo.cost}`}
                    <TextField fullWidth={true} type="text" name="cost" placeholder="update cost" /></li>
                <li>
                    {`description: ${logInfo && logInfo.description}`}
                    <TextField fullWidth={true} type="text" name="description" placeholder="update description" /></li>  
                <li>
                    {`vehicle: ${logInfo && logInfo.vehicle}`}
                    <TextField fullWidth={true} type="text" name="vehicle" placeholder="update vehicle" /></li>
                
                

                {/* <CameraApp handleImageUrl={this.handleImageUrl}/>            */}
                <TextField type="submit"  />
            </form>
            <ImageAudioVideo />
        </div>
    )
    }
}
export default LogUpdate;