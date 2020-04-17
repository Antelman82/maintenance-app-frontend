import React, { Component } from 'react';
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
      logs : [],
      userInfo: []
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
          <h3>{this.state.logged_in ? `Hello ${this.state.username}` : 'Please log in'}</h3>
        </header>
        
        <div className="App-body">
          <nav className="App-nav">App Nav</nav>
          <main className="App-content">App Content
            <UserInfo props={this.state.userInfo}/>
            <Vehicles props={this.state}/>
            <Logs props={this.state}/>
          </main>
          <aside className="App-sidebar">Aside
            <h4>Vehicle Common Parts List</h4>
          </aside>
        </div>
        
        <footer>© Antelman Enterprises, LLC</footer>
			</div>
		)
  }
  
}

export default App;
