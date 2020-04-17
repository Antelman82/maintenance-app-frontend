import React, { Component } from 'react';


// const base_url = window.SERVER_ADDRESS
const base_url = 'http://localhost:8000/api/'

class Logs extends Component {
  constructor(props){
    super()
  }

  render() {
    // console.log('Log Component Render', this.props.props.logs[0])
    let logDetails = this.props.props.logs.map((log, index) => {
        return (
            <div key={index}>
                <li>{`entry_date: ${log.entry_date}`}</li>
                <li>{`date of service: ${log.date}`}</li>
                <li>{`shop: ${log.shop}`}</li>
                <li>{`receipts: ${log.receipts}`}</li>
                <li>{`repair name: ${log.repair_name}`}</li>
                <li>{`cost: ${log.cost}`}</li>
                <li>{`description: ${log.description}`}</li>
            </div>
        )
    })


    return (
        <div>
            -- Logs Component --
            {logDetails}
        </div>
    )
  }
}

export default Logs;