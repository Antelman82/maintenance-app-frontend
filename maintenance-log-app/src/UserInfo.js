import React, { Component } from 'react';


// const base_url = window.SERVER_ADDRESS
const base_url = 'http://localhost:8000/api/'

class UserInfo extends Component {
  constructor(props){
    super()
  }

  render() {
		return (
			<div>
                UserInfo Component
			</div>
		)
  }
}

export default UserInfo;
