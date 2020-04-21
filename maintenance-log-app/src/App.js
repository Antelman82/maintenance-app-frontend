import React, { Component } from 'react';
import NavComponent from './NavComponent';
import UserInfo from './UserInfo'
import Vehicles from './Vehicles'
import VehicleUpdate from './VehicleUpdate'
import VehicleAdd from './VehicleAdd'
import VehicleConfirmDelete from './VehicleConfirmDelete'
import Home from './Home'
import Logs from './Logs'
import LogAdd from './LogAdd'
import LogUpdate from './LogUpdate'
import LogConfirmDelete from './LogConfirmDelete'
import RegisterUser from './RegisterUser'
import {Route, Link, Redirect, Switch, withRouter} from "react-router-dom"
// import { ReactS3Client } from './UploadToS3'
// import S3 from 'react-aws-s3';
// import AWSUpload from './AWSUpload'

const base_url = process.env.REACT_APP_BACKEND_APP_URL || 'http://localhost:8000/api/'
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      logged_in : localStorage.getItem('token') ? true : false,
      username : '',
      displayed_form : '',
      vehicles : [],
      logs : [],
      userInfo: [],
      model_year: '',
      make: '',
      model: '',
      trim: '',
      color: '',
      phone: '',
      email: '',
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

      fetch(base_url + 'users', {
        crossDomain : true,
        withCredentials : true,
        async : true,
        method : 'GET',
        headers : {
          Authorization :  `Token ${localStorage.getItem('token')}`,
        }
      })
      .then(response => response.json())
      .then(user => {
        this.setState({
          userInfo : user
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
    console.log(data)
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
      console.log(json.user)
      this.setState({
        logged_in : true,
        username : json.user.username,
        userInfo : json.user.id
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
        Authorization : `Token ${localStorage.getItem('token')}`,
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
        Authorization : `Token ${localStorage.getItem('token')}`,
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

    fetch(base_url + 'users', {
      crossDomain : true,
      withCredentials : true,
      async : true,
      method : 'GET',
      headers : {
        Authorization : `Token ${localStorage.getItem('token')}`,
      }
    })
    .then(response => response.json())
    .then(user => {
      this.setState({
        userInfo : user
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
 
  handleChange = (event) => {
    console.log('handleChange event.target.name ', event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  handleVehicleUpdateSubmit = event => {
    if(this.state.logged_in){
      event.preventDefault()
      console.log('handleVehicleUpdateSubmit')
      console.log('event.target.id ', event.target.id)

      //define data object that will be used for the put statement
      let data = {}
      //conditional logic that stats if the value isn't empty, set the data 
      //object key and assign it with the update value
      if (this.state.model_year) {data.model_year = this.state.model_year}
      if (this.state.make) {data.make = this.state.make}
      if (this.state.model) {data.model = this.state.model}
      if (this.state.trim) {data.trim = this.state.trim}
      if (this.state.color) {data.color = this.state.color}
      
      console.log('data ', data)
      fetch(`${base_url}vehicles/${event.target.id}/`, {
        crossDomain : true,
        withCredentials : true,
        async : true,
        method : 'PATCH',
        headers : {
          'Content-Type' : 'application/json',
          Authorization :  `Token ${localStorage.getItem('token')}`
        },
        body : JSON.stringify(data)
      })
      .then(response => response.json())
      .then(response => {
        console.log('updatedVehicle ', response)
        this.setState(prevState => ({
          model_year: '',
          make: '',
          model: '',
          trim: '',
          color: ''
        }))
      })
      .catch(error => {
        console.log(error)
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
      this.props.history.push(`/vehicles`)
    }
  }

  handleVehicleAddSubmit = event => {
    if(this.state.logged_in){
      event.preventDefault()
      console.log('handleVehicleAddSubmit ', event)
      let data = {
        model_year: this.state.model_year,
        make: this.state.make,
        model: this.state.model,
        year: this.state.year,
        color: this.state.color
      }
      fetch(base_url + 'vehicles', {
        crossDomain : true,
        withCredentials : true,
        async : true,
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
          Authorization :  `Token ${localStorage.getItem('token')}`,
        },
        body : JSON.stringify(data)
      })
      .then(response => response.json())
      .then(response => {
        console.log('newVehicle ', response)
        this.setState(prevState => ({
          model_year: '',
          make: '',
          model: '',
          trim: '',
          color: ''
        }))
      })
      // get vehicles again after update
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
      this.props.history.push(`/vehicles`)
    }
  }
    
  handleDeleteVehicle = event => {
    if(this.state.logged_in){
      event.preventDefault()
      console.log('handleDeleteVehicle ', event)
      fetch(`${base_url}vehicles/${event.target.id}/`, {
        crossDomain : true,
        withCredentials : true,
        async : true,
        method : 'DELETE',
        headers : {
          'Content-Type' : 'application/json',
          Authorization :  `Token ${localStorage.getItem('token')}`,
        }
      })
      .catch(error => {
        console.log(error)
      })
      // get vehicles again after update
      fetch(base_url + 'vehicles', {
        crossDomain : true,
        withCredentials : true,
        async : true,
        method : 'GET',
        headers : {
          Authorization : `Token ${localStorage.getItem('token')}`,
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
      this.props.history.push(`/vehicles`)
    }
  
  }
    
  handleUpload = () => {
    //do something
  
  }

  handleDelete = () => {
    //do something
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
			<div className="App">
          <header className='topnav'>
          <h1>Maintenance App</h1>
          <div className="login-container">
            <NavComponent
              logged_in = {logged_in}
              handleLogin = {this.handleLogin}
              handleLoginChange = {this.handleLoginChange}
              handleLogout = {this.handleLogout}
              username = {username}
              displayed_form = {displayed_form}
              display_form = {this.display_form}
            />
          </div>
          <h3>{this.state.logged_in ? `Welcome ${this.state.username}` : null}</h3>
        </header>
        
        <div className="App-body">
          <nav className="App-nav">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/user">User Details</Link></li>
              <li><Link to="/vehicles">Vehicles</Link></li>
              <li><Link to="/logs/all">All Logs</Link></li>
            </ul>
          </nav>
          <main className="App-content">
            <Switch>
              <Route
                path='/home'
                component={Home}
              />
              <Route
                path='/user'
                render={routerProps =>
                  <UserInfo
                    {...routerProps}
                    props={this.state.userInfo}
                  />
                }
              />
              <Route
                path='/vehicles'
                render={routerProps =>
                  <Vehicles
                    {...routerProps}
                    props={this.state}
                  />
                }
              />
              <Route
                path='/vehicleupdate/:id'
                render={routerProps =>
                  <VehicleUpdate
                    {...this.props}
                    {...routerProps}
                    vehicle={this.state.vehicles}
                    handleChange={this.handleChange}
                    handleVehicleUpdateSubmit={this.handleVehicleUpdateSubmit}
                  />
                }
              />
              <Route
                path='/vehicleadd'
                render={routerProps =>
                  <VehicleAdd
                    {...this.props}
                    {...routerProps}
                    vehicle={this.state.vehicles}
                    handleChange={this.handleChange}
                    handleVehicleAddSubmit={this.handleVehicleAddSubmit}
                  />
                }
              />
              <Route
                path='/vehicledelete/:id'
                render={routerProps =>
                  <VehicleConfirmDelete
                    {...this.props}
                    {...routerProps}
                    vehicle={this.state.vehicles}
                    handleChange={this.handleChange}
                    handleDeleteVehicle={this.handleDeleteVehicle}
                  />
                }
              />
              <Route
                path='/logs/:id'
                render={routerProps =>
                  <Logs
                    {...routerProps}
                    props={this.state}
                  />
                }
              />
              <Route
                path='/logadd'
                render={routerProps =>
                  <LogAdd
                    {...this.props}
                    {...routerProps}
                    log={this.state.logs}
                    handleChange={this.handleChange}
                    handleLogAddSubmit={this.handleLogAddSubmit}
                  />
                }
              />
              <Route
                path='/logupdate/:id'
                render={routerProps =>
                  <LogUpdate
                    {...this.props}
                    {...routerProps}
                    log={this.state.logs}
                    handleChange={this.handleChange}
                    handleLogUpdateSubmit={this.handleLogUpdateSubmit}
                  />
                }
              />
              <Route
                path='/logdelete/:id'
                render={routerProps =>
                  <LogConfirmDelete
                    {...this.props}
                    {...routerProps}
                    log={this.state.logs}
                    handleChange={this.handleChange}
                    handleDeleteLog={this.handleDeleteLog}
                  />
                }
              />
              <Route
                path='/signup'
                render={routerProps =>
                  <RegisterUser
                    {...routerProps}
                    handleLogin = {this.handleLogin}
                  />
                }
              />
              <Route path="/*" render={() => <Redirect to="/home" />} />
            </Switch>
            {/* <div>Testing S3 file uploads</div>
            <button onClick={this.handleUpload}>Upload File</button>
            <button onClick={this.handleDelete}>Delete File</button> */}
          </main>
          <aside className="App-sidebar">
            <h4>Vehicle Parts List</h4>
            <h5>tire size front</h5>
            <h5>Wiper sizes</h5>
            <h6>&nbsp;&nbsp; driver front:</h6>
            <h6>&nbsp;&nbsp; passenger front:</h6>
            <h6>&nbsp;&nbsp; rear:</h6>
            <h5>Bulbs:</h5>
            <h5>Filters:</h5>
            <h5>Battery:</h5>
          </aside>
        </div>
        
        <footer>© Antelman Enterprises, LLC</footer>
			</div>
		)
  }
  
}

export default withRouter(App);
