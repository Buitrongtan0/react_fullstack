import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isShowpassword :true,
        }
       
    }
    HandleOnchangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(event.target.value)
    } 
    HandleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        // console.log(event.target.value)
    }
    HandleLogin = () => {
        console.log("username:" ,this.state.username,'password: ' ,this.state.password)
    }
    HandleShowHidePassword = () => {
        this.setState({
            isShowpassword : !this.state.isShowpassword,
        })
    }

    render() {
        return (
            <div className='login-background' >
                <div className='login-container'>
                    <div className='login-content row'>
                     <div className='col-12 text-center '> login </div>    
                    <div className='col-12 from-groud login-input'>
                        <label className='col-11'>UserName</label>
                            <input
                                type='text'
                                className='from control col-12'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event)=>this.HandleOnchangeUserName(event)}
                            />
                    </div>
                    <div className='col-12 from-groud login-input'>
                        <label className='col-12'>password</label>
                            <input
                                type={this.state.isShowpassword ?'text' :"password"}
                                className='from control col-12 custom-password'
                                placeholder='Enter your password'
                                value={this.state.password}
                                onChange={(event) => this.HandleOnchangePassword(event)}
                            />
                               <span onClick={()=>this.HandleShowHidePassword()} > {this.state.isShowpassword ?<i className="far fa-eye"></i>:<i className="fas fa-eye-slash"></i>}</span> 
                            
                        </div>
                        <div className='col-12' >
                            <button className='btn-login' onClick={()=>{this.HandleLogin()}}>login</button>
                        </div>
                        
                        <div className='col-12'>
                            <span className="forgot-password"> Forgot your password</span>
                        </div>
                        <div className='col-12 text-center mt-3'>    
                            <span className="text-other-login">Or login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-facebook-f facebook"></i>
                            <i className="fab fa-google google"></i>
                        </div>
                    </div>
                </div>
           </div>
       )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

