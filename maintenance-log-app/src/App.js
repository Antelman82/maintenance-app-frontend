import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavComponent from './Components/NavComponent';
import UserInfo from './UserInfo'
import Vehicles from './Vehicles'
import Logs from './Logs'
import axios from 'axios'

// const base_url = window.SERVER_ADDRESS
const base_url = 'http://localhost:8000/api/'
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      logged_in : localStorage.getItem('token') ? true : false,
      username : '',
      displayed_form : '',
      vehicles : [],
      logs : []
    }
  }

  componentDidMount(){
		if(this.state.logged_in){
      fetch(base_url + 'auth/user', {
        method : 'GET',
        headers : {
          Authorization : `Token ${localStorage.getItem('token')}`
        }
      })
      .then(res => res.json())
      .then(resp => {
        this.setState({ username : resp.username })
      })
      .catch(err => console.log(err))

      fetch(base_url + 'vehicles', {
        crossDomain : true,
        withCredentials : true,
        async : true,
        method : 'GET',
        headers : {
          Authorization :  `Token ${localStorage.getItem('token')}`
        }
      })
      .then(response => response.json())
      .then(vehicles => {
        this.setState({
          vehicles : vehicles
        })
      })
      .catch(error => {
        console.log(error)
      })

      fetch(base_url + 'logs', {
        crossDomain : true,
        withCredentials : true,
        async : true,
        method : 'GET',
        headers : {
          Authorization :  `Token ${localStorage.getItem('token')}`,
        }
      })
      .then(response => response.json())
      .then(logs => {
        this.setState({
          logs : logs
        })
      })
      .catch(error => {
        console.log(error)
      })

    }
  }

  display_form = (formName) => {
    this.setState({
        displayed_form : formName
    });
  }

  handleLoginChange = event => {
    this.setState({
        [event.target.name] : event.target.value
    })
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({logged_in : false, username : ''})
  }

  handleLogin = (e, data) => {
    e.preventDefault();
    // console.log(data)
    fetch(base_url + 'auth/login', {
      crossDomain : true,
      withCredentials : true,
      async : true,
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      // console.log(json.user)
      this.setState({
        logged_in : true,
        username : json.user.username
      })
    })
    .catch(error => {
      console.log(error)
    })
    this.setState({
      displayed_form : ''
    })
    
    fetch(base_url + 'vehicles', {
      crossDomain : true,
      withCredentials : true,
      async : true,
      method : 'GET',
      headers : {
        Authorization :  `Token ${localStorage.getItem('token')}`,
      }
    })
    .then(response => response.json())
    .then(vehicles => {
      this.setState({
        vehicles : vehicles
      })
    })
    .catch(error => {
      console.log(error)
    })

    fetch(base_url + 'logs', {
      crossDomain : true,
      withCredentials : true,
      async : true,
      method : 'GET',
      headers : {
        Authorization :  `Token ${localStorage.getItem('token')}`,
      }
    })
    .then(response => response.json())
    .then(logs => {
      this.setState({
        logs : logs
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  getAxiosVehicles() {
    console.log('token', localStorage.getItem('token'))
    let vehiclesUrl = `${base_url}vehicles`
    axios({
      method: 'GET',
      url: vehiclesUrl,
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
    .then(vehicles =>
      // this.setState({vehicles: vehicles.data})
      console.log('getAxiosVehicles', vehicles.data)
      )
  }
  

  render(){
    // console.log('base_url', base_url)
    // console.log(window.SERVER_ADDRESS)
    // console.log('this.state.vehicles', this.state.vehicles)
    // console.log(localStorage.getItem('token'))
    console.log('render this.state', this.state)
    // this.getAxiosVehicles()

    const { logged_in, username, displayed_form } = this.state;
		return (
			<div>
				<NavComponent
          logged_in = {logged_in}
          handleLogin = {this.handleLogin}
          handleLoginChange = {this.handleLoginChange}
          handleLogout = {this.handleLogout}
          username = {username}
          displayed_form = {displayed_form}
          display_form = {this.display_form}
				/>
				<h3>{this.state.logged_in ? `Hello ${this.state.username}` : 'Please log in'}</h3>
        <UserInfo />
        <Vehicles props={this.state}/>
        <Logs props={this.state}/>
			</div>
		)
  }
  
}

export default App;
