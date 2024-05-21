import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUser,createNewUserService,deleteUserService ,editUserSevice} from '../../services/userService'
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import {emitter} from '../../utils/emitter'
class UserManage extends Component {

    constructor(prpos) {
        super(prpos)
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            editUser: {},
        }
        
  }

    async componentDidMount() {
        await this.getAllUserFromReact();
    }
    getAllUserFromReact =async () => {
        let response = await getAllUser('ALL');
        if (response && response.errCode ===0) {
            this.setState({
                arrUsers : response.users
            })
        }
    }
    handleAddUser = () => {
        this.setState({
            isOpenModalUser : true,
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser :!this.state.isOpenModalUser,
        })
    }
    toggleEditModal = () => {
        this.setState({
            isOpenModalEditUser :!this.state.isOpenModalEditUser,
        })
    }
  
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            }else {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA', {'id': 'your id'})
            }
        } catch (e) {
            console.log(e);
        }
        // this.setState({s
        //                 isOpenModalUser: false
        //   })
        // console.log(data)
    }
    handleDeleteUser = async (data) => {
        try {
            let response = await deleteUserService(data.id)
            if (response&&response.errCode===0) {
                await this.getAllUserFromReact();
            } else (
                alert(response.errMessage)
            )
        } catch (e) {
            console.log(e)
        }
    }
    handleEditUser = async (data) => {
        this.setState({
            isOpenModalEditUser: true,
            editUser : data
        })
    }
    DoEditUser = async(data) => {
        try {
            let response = await editUserSevice(data);
            if (response&& response.errCode ===0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUserFromReact();
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser = {this.createNewUser}
                />
                {this.state.isOpenModalEditUser && 
                <ModalEditUser
                    isOpen={this.state.isOpenModalEditUser}
                    toggleFromParent={this.toggleEditModal}
                    createUser = {this.state.editUser}
                    EditUser = {this.DoEditUser }
                />
            }
                <div className=' title text-center'>Manage users </div>
                <div className=' mx-1'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={()=>this.handleAddUser()}
                    > add new user</button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                 <tr>
                    <th>Email</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                {arrUsers && arrUsers.map((item, index) => {
                    return (
                        <tr>
                            <td>{item.email}</td>
                            <td>{item.firstName }</td>
                            <td>{item.lastName}</td>
                            <td>{item.address }</td>
                            <td> 
                                <button
                                    className='btn-edit'
                                    onClick={()=>{this.handleEditUser(item)}}
                                ><i className="fas fa-pencil-alt"></i></button>
                                <button
                                    className='btn-delete'
                                    onClick={()=>{this.handleDeleteUser(item)}}
                                ><i className="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    )
                }) }</tbody>
                
                    </table>
                    </div>
            </div>

        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
