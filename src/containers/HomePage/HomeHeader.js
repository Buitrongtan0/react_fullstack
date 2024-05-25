import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeadder.scss'
import logo from '../../assets/logo-2020.png'
import { FormattedMessage } from 'react-intl';
import { LANGUAGE } from "../../utils"
import { changeLanguageApp } from '../../store/actions';
class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageApp(language)
    }
    render() {
        let language = this.props.language;
        // console.log("check props "  ,language)
        return (
            <React.Fragment>
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                        <div className='header-logo'>
                            <img className='logo' src={logo } ></img>
                        </div>
                    </div>
                    <div className='center-content'>
                        <div className='child-content'>
                            <b> <FormattedMessage id="homeheader.speciality" /> </b>
                            <div className='subs-title'>
                            <FormattedMessage id="homeheader.searchdoctor" />
                            </div>
                        </div>
                        <div className='child-content'>
                            <b><FormattedMessage id="homeheader.health-facility" /> </b>
                            <div className='subs-title'>
                            <FormattedMessage id="homeheader.select-room" />
                            </div>
                        </div>
                        <div className='child-content'>
                            <b> <FormattedMessage id="homeheader.doctor" /> </b>
                            <div className='subs-title'>
                                <FormattedMessage id="homeheader.select-doctor" /> 
                            </div>
                        </div>
                        <div className='child-content'>
                            <b><FormattedMessage id="homeheader.fee" /> </b>
                            <div className='subs-title'>
                            <FormattedMessage id="homeheader.check-health" />
                            </div>
                        </div>

                    </div>
                    <div className='right-content'>
                        <div className='support'>
                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                                <FormattedMessage id="homeheader.support" />
                        </div>
                            <div  className = {language === LANGUAGE.VI ?'language-vn active' :  'language-vn '}><span onClick={() => { this.changeLanguage(LANGUAGE.VI) }}>VN</span>
                        </div>
                            <div className ={language === LANGUAGE.EN ?  'language-en active' :  'language-en'}><span onClick={() => { this.changeLanguage(LANGUAGE.EN) }}>EN</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='content1'> <FormattedMessage id="banner.title1" />
                        </div>
                        <div className='content2'><FormattedMessage id="banner.title2" />
                        </div>
                        <div className='search'>
                        <i className="fa fa-search" aria-hidden="true"></i>
                            <input  type='text' placeholder='Tìm kiếm khoa khám bệnh' />
                        </div>
                    </div>

                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fa fa-heart" aria-hidden="true"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fa fa-mobile" aria-hidden="true"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fa fa-heartbeat" aria-hidden="true"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fa fa-deaf" aria-hidden="true"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child4" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fa fa-medkit" aria-hidden="true"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child5" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fa fa-medkit" aria-hidden="true"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child6" /></div>
                            </div>
                        </div>
                    </div>
            </div>   
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language : state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageApp:  (language)  => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);