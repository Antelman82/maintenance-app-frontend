import React, { Component } from 'react';


class Logs extends Component {
  constructor(props){
    super()
  }

  render() {
    console.log('Log Component Render', this.props)
    console.log(this.props.match.params && this.props.match.params.id)
    let logDetails = []
    if(this.props.match.params.id !== 'all'){
    logDetails = this.props.props.logs.map((log, index) => {
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
                <li>==================================</li>
            </div>
          )
        }
    })}

    if(this.props.match.params.id === 'all'){
      logDetails = this.props.props.logs.map((log, index) => {
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
              <li>==================================</li>
          </div>
        )
    })
    }

    console.log(logDetails)

    return (
        <div>
            {logDetails}
        </div>
    )
  }
}

export default Logs;