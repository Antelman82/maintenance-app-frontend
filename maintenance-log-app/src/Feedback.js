import React, {Component} from 'react';
var nodemailer = require('nodemailer')

class Feedback extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSendEmail = event => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'anthonyantelman@gmail.com',
            pass: 'Antant82*'
            }
        });
        
        var mailOptions = {
            from: this.state.email,
            to: 'anthonyantelman@gmail.com',
            subject: '[Maintenance-Log-App] Feedback]',
            text: `Message from user ${this.state.message} ${this.state.message}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });
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


    render(){
        return(
            <div className='feedback'>
                <form onSubmit={this.handleSubmitEmail}>
                    <div className='name-group'>
                        <label htmlFor="name">Name: 
                            <input className='input' type="text" id="name" name="name" value={this.state.name} onChange={this.changeHandler}  />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">Email: 
                            <input className='input' type="text" id="email" name="email" value={this.state.email} onChange={this.changeHandler}  />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="message">Message: 
                            <textarea className='input'rows="3" type="text" id="message" name="message" value={this.state.message} onChange={this.changeHandler}  />
                        </label>
                    </div>
                    <input className="input" type="submit" />
                </form>
            </div>
        )
    }
}
export default Feedback

