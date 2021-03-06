import React, { Component } from 'react';


class UserInfo extends Component {
  constructor(props){
    super()
  }

  render() {
    console.log('UserInfo Component Render', this.props)
      let userDetails = this.props.props && this.props.props.map((info, index) => {
        // console.log(vehicle)
        return (
          <div key={index}>
              <li>{`${info.username}`}</li>
              <li>{`${info.first_name} ${info.last_name}`}</li>
              <li>{`${info.email}`}</li>
              <li>{`${info.phone}`}</li>
              <li></li>
          </div>
        )
      })


    return (
      <div>
        UserInfo Component
        {userDetails}
      </div>
    )
  }
}

export default UserInfo;
