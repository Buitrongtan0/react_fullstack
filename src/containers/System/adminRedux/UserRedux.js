import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGE } from '../../../utils';
import * as actions from '../../../store/actions'
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class  UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,
        }
    }

    componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if (prevProps.genderRedux !== this.props.genderRedux) {
            
            this.setState({
                genderArr: this.props.genderRedux
            })  
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            
            this.setState({
                roleArr: this.props.roleRedux
            })  
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            
            this.setState({
                positionArr: this.props.positionRedux
            })  
        }
    }
    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objetUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objetUrl
            })
        }
    }
    openPreviewImage = () => {
        if (!this.state.previewImgURL) { return }
        this.setState({
            isOpen :true,
        })
    }
    render() {
        // console.log('check props', this.props.genderRedux)
        let genders = this.state.genderArr;
        let position = this.state.positionArr;
        let role = this.state.roleArr;
        let isGetGenders = this.props.isLoadingGender;
        // console.log('checkState',genders)
        return (
            <div className="user-redux-container" >
                <div className='title'>
                    Hoc Redux
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'><FormattedMessage id="manage-user.add" /> </div>
                            <div className='col-12'>{isGetGenders ===true?"LoadingGender" :""}</div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.email"/></label>
                                <input className='form-control' type='email'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.password"/></label>
                                <input className='form-control' type='password'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.firstName"/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.LastName"/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.PhoneNumber"/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id="manage-user.address"/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.gender"/></label>
                                <select className='form-control'>
                                    {genders && genders.length > 0 &&
                                        genders.map((item,index)=>{
                                            return (
                                                <option key={index} >{item.valueVi}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.position"/></label>
                                <select className='form-control'>
                                    {position && position.length > 0 &&
                                        position.map((item,index)=>{
                                            return (
                                                <option key={index} >{item.valueVi}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.role"/></label>
                                <select className='form-control'>
                                    {role && role.length > 0 &&
                                        role.map((item,index)=>{
                                            return (
                                                <option key={index} >{item.valueVi}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.image" /></label>
                                <div className='preview-img-container'>
                                    <input id='previewImg' type='file' hidden
                                    onChange={(event)=>{this.handleOnChangeImage(event)}}
                                    />
                                    <label className='label-upload' htmlFor='previewImg'>Tai anh<i className='fas fa-upload'></i></label>
                                    <div className='preview-image'
                                        style={{ background: `url(${this.state.previewImgURL})` }}
                                        onClick={()=>{this.openPreviewImage()}}
                                    >
                                    </div>
                                </div>
                            </div>
                            <button className='col-1 btn btn-primary m-4'><FormattedMessage id="manage-user.save"/></button>
                        </div>
                    </div>
                </div>
                {this.state.isOpen===true&&
                <Lightbox
                    mainSrc={this.state.previewImgURL}
                    onCloseRequest={()=>{this.setState({isOpen:false})}}
                    />
                }

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        isLoadingGender: state.admin.isLoadingGender,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart:()=>dispatch(actions.fetchRoleStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
