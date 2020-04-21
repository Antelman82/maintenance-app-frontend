import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {Row} from 'reactstrap';
const required = (val) => val && val.length;
const minLength = (len, val) => !(val) || (val.length < len);
const maxLength = (len, val) => (val.length > len);
const isEqual = (p1, p2) => p1 === p2

const base_url = process.env.REACT_APP_BACKEND_APP_URL || 'http://localhost:8000/api/'

class RegisterUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            first_name : '',
            last_name : '',
            username : '',
            password : '',
            password2 : '',
            display_first_name : false,
            display_last_name : false,
            display_username : false,
            display_password : false,
            display_password2 : false,
            email: '',
            phone: '' 
        }
    }
    getErrors = (name, value) => {
        let errors = [];
        if(!required(value)){
            errors.push('This value is required')
        }
        if(minLength(3, value)){
            errors.push('Greater than 3 characters required')
        }
        if(maxLength(20, value)){
            errors.push('Cannot be more than 25 characters')
        }
        if(name === 'password2' && !isEqual(this.state.password, value)){
            errors.push('Passwords should be the same')
        }
        const property = 'display_' + name
        if(errors.length === 0){
            this.state[property] = false
        }
        if(this.state[property]){
            return (<div>{errors.map((error,index) => <Row key={index} style={{color : 'red'}}>{error}</Row>)}</div>)        
        }
    }
    isValid = () => {
        let valid = true;
        Object.values(this.state).forEach((val) => {
                if(val === true){
                    valid = false
                    return valid
                }
        })
        return valid;
    }

    clearForm = () => {
        this.setState({
                first_name : '',
                last_name : '',
                username : '',
                password : '',
                password2 : '',
                display_first_name : false,
                display_last_name : false,
                display_username : false,
                display_password : false,
                display_password2 : false,
                email: '',
                phone: ''
        })
    }
    sendRegistration = e => {
        e.preventDefault()
        const {username, password, email} = this.state
        if(this.isValid()){
            console.log('sendRegistration ', this.state)
            let data = {
                username: username,
                password: password,
                email: email
            }
            console.log('data', data)
            fetch(base_url + 'auth/register', {
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
                console.log('json' , json)
                localStorage.setItem('token', json.token)
                this.props.handleLogin(e, {
                    username : this.state.username, 
                    password : this.state.password
                })
            })
            .catch(error => {
                console.log(error)
            })
            this.props.history.push('/home')
            // this.clearForm()
        }                
    }
    
    changeHandler = (event) => {
        event.preventDefault()
            var stateObject = function() {
              var returnObj = {};
              returnObj['display_' + event.target.name] = true;
                 return returnObj;
            }();
        
            this.setState( stateObject );    
            this.setState({
                [event.target.name] : event.target.value,
            })
        }
        
    render() {
        return (
            <div >
                <form onSubmit={this.sendRegistration} noValidate>
                    <div>
                        <label htmlFor="first_name"> First name </label>
                        <input className='input' type="text" id="first_name" name="first_name" value={this.state.first_name} onChange={this.changeHandler}  />
                        {this.getErrors('first_name', this.state.first_name)}
                    </div>
                    <div>
                        <label htmlFor="last_name"> Last name </label>
                        <input className='input' type="text" id="last_name" name="last_name" value={this.state.last_name} onChange={this.changeHandler}  />
                        {this.getErrors('last_name', this.state.last_name)}
                    </div>
                    <div>
                        <label htmlFor="username"> Username </label>
                        <input className='input' type="text" id="username" name="username" value={this.state.username} onChange={this.changeHandler}  />
                        {this.getErrors('username', this.state.username)}
                    </div>
                    <div>
                        <label htmlFor="pass"> Password </label>
                        <input className='input' type="password" id="pass" name="password" value={this.state.password} onChange={this.changeHandler}  />
                        {this.getErrors('password', this.state.password)}
                    </div>
                    <div>
                        <label htmlFor="pass2"> Password again </label>
                        <input className='input' type="password" id="pass2" name="password2" value={this.state.password2} onChange={this.changeHandler}  />
                        {this.getErrors('password2', this.state.password2)}
                    </div>
                    <div>
                        <label htmlFor="email"> Email </label>
                        <input className='input' type="email" id="email" name="email" value={this.state.email} onChange={this.changeHandler}  />
                        {this.getErrors('email', this.state.password2)}
                    </div>
                    <div>
                        <label htmlFor="phone"> Phone </label>
                        <input className='input' type="phone" id="phone" name="phone" value={this.state.phone} onChange={this.changeHandler}  />
                        {this.getErrors('phone', this.state.phone)}
                    </div>
                    <button type='submit'>Register</button>
                </form>    
            </div>
        )
    }
}

export default RegisterUser