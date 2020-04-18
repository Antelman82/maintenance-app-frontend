import React, { Component } from 'react';
import { Link } from "react-router-dom"
import CameraApp from './CameraApp'


class Logs extends Component {
  constructor(props){
    super()
  }

  render() {
    console.log('Log Component Render', this.props)
    console.log(this.props.match.params && this.props.match.params.id)
    let logDetails = []
    if(this.props.match.params && this.props.match.params.id !== 'all'){
    logDetails = this.props.match.params && this.props.props.logs.map((log, index) => {
      if (log.vehicle == this.props.match.params.id){
        return (
          <div key={index}>
              <li>{`date of service: ${log.date}`}</li>
              <li>{`shop: ${log.shop}`}</li>
              <li>{`receipts: ${log.receipts}`}</li>
              <li>{`repair name: ${log.repair_name}`}</li>
              <li>{`cost: ${log.cost}`}</li>
              <li>{`description: ${log.description}`}</li>
              <li>{`vehicle: ${log.vehicle}`}</li>
              <h6>{`entry_date: ${log.entry_date}`}</h6>
              <Link to={`/logupdate/${log.id}`}><button
                id={log.id}>Update</button></Link>
              <Link to={`/vehicledelete/${log.id}`}><button 
                id={log.id}>Remove</button>
              </Link>
              <li>==================================</li>
          </div>
        )
      }
    })}

    if(this.props.match.params && this.props.match.params.id === 'all'){
      logDetails = this.props.match.params && this.props.props.logs.map((log, index) => {
        return (
          <div key={index}>
              <li>{`date of service: ${log.date}`}</li>
              <li>{`shop: ${log.shop}`}</li>
              <li>{`receipts: ${log.receipts}`}</li>
              <li>{`repair name: ${log.repair_name}`}</li>
              <li>{`cost: ${log.cost}`}</li>
              <li>{`description: ${log.description}`}</li>
              <li>{`vehicle: ${log.vehicle}`}</li>
              <h6>{`entry_date: ${log.entry_date}`}</h6>
              <Link to={`/logupdate/${log.id}`}><button
                id={log.id}>Update</button></Link>
              <Link to={`/logdelete/${log.id}`}><button 
                id={log.id}>Remove</button>
              </Link>
              <li>==================================</li>
          </div>
        )
    })
    }

    console.log(logDetails)

    return (
        <div>
          <CameraApp/>
          {logDetails}
           <Link to="/logadd"><button>Create New Log</button></Link> 
        </div>
    )
  }
}


export default Logs;