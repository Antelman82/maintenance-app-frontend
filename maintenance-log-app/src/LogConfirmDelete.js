import React, {Component} from 'react';
import { Link } from "react-router-dom"

class LogConfirmDelete extends Component {

  render(){
    console.log('LogConfirmDelete render this.props ',this.props)

    const logInfo = this.props.log.find(thislog => thislog.id == this.props.match.params.id)

    return (
        <div>
          <div className='padding-left'>
            <h4>{`date of service: ${logInfo && logInfo.date}`}</h4>
            <div>{`shop: ${logInfo && logInfo.shop}`}</div>
            <div>{`receipts: ${logInfo && logInfo.receipts}`}</div>   
            <div>{`repair name: ${logInfo && logInfo.repair_name}`}</div>
            <div>{`cost: ${logInfo && logInfo.cost}`}</div>
            <div>{`description: ${logInfo && logInfo.description}`}</div>
            <div>{`vehicle: ${logInfo && logInfo.vehicle}`}</div>       
          </div>
          <p><button onClick={this.props.handleDeletelog} id={logInfo && logInfo.id}>Confirm Delete</button></p>
          <Link to={`/logs/${logInfo.id}`}><p><button>Cancel</button></p></Link>

        </div>
    )
  }
}
export default LogConfirmDelete