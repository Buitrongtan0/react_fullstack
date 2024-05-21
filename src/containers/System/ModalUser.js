
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import {emitter} from '../../utils/emitter'
class ModalUser extends Component {

  constructor(pros) {
    super(pros)
    this.state = {
      // id:'',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      
    }
    this.listenToEmitter();
   }
  listenToEmitter() {
    emitter.on('EVENT_CLEAR_MODAL_DATA',()=> {
      this.setState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
      })
    })
    
  }
      componentDidMount() {
        
    }
  toggle = () => {
    this.props.toggleFromParent();
  }
  handleOnChageInput = (event, id) => {
    // console.log(event.target.value, id)
    let copyState = { ...this.state }
    copyState[id] = event.target.value;
    this.setState({
      ...copyState
    })
  }
  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
    for (let i = 0; i < arrInput.length; i++){
      if (!this.state[arrInput[i]]) {
        isValid = false
        alert('Mising paramerter:   '+ arrInput[i]);
        break;
        }
    }
    return isValid;
  }
  handleAddNewUser =   ()  =>{
    let isValid = this.checkValidateInput();
   
    if (isValid === true) {
      //  console.log(this.state)
      this.props.createNewUser(this.state)
    }
  }
    render() {
        return (
          <Modal
            isOpen={this.props.isOpen}
            toggle={() => { this.toggle() }}
            className={'modal-user-container'}
            size='lg'
            centered
          >
           <ModalHeader toggle={() => { this.toggle() }} >add new user </ModalHeader>
            <ModalBody>
              <div className='modal-user-body'>
              <div className='input-container'>
                <label>Email</label>
                  <input type='text' onChange={(event) => { this.handleOnChageInput(event, 'email') }}
                  value={this.state.email}
                  />
              </div>
              <div className='input-container'>
                <label>password</label>
                <input type='password'onChange={(event)=>{this.handleOnChageInput(event,'password')}}value={this.state.password} />
                </div>
                <div className='input-container'>
                <label>FirstName</label>
                <input type='text'onChange={(event)=>{this.handleOnChageInput(event,'firstName')}}value={this.state.firstName} />
                </div>
                <div className='input-container'>
                <label>LastName</label>
                <input type='text'onChange={(event)=>{this.handleOnChageInput(event,'lastName')}}value={this.state.lastName} />
                </div>
                <div className='input-container max-width-input'>
                <label>Address</label>
                <input type='text'onChange={(event)=>{this.handleOnChageInput(event,'address')}} value={this.state.address}/>
              </div>
                </div>
            </ModalBody>
          <ModalFooter>
              <Button
                color="primary" c
                lassName='px-3 '
                onClick={() => this.handleAddNewUser()}>Save Changes </Button>{' '}
          <Button close="secondary" className='px-3 ' onClick= {()=>this.toggle()}>Close</Button>
          </ModalFooter>
        </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);



