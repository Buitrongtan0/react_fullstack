import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-OutStandingDoctor'>
                <div className='Section-container'>
                    <div className='Section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>xem thêm</button>
                    </div>
                    <div  className='Section-body'>
                        <Slider {...this.props.settings} >
                            <div className='OutStandingDoctor-customzie'>
                            <div className='customize-border'>
                                <div className='bg-image'></div>
                                    <div>Cơ xương khớp 1</div>
                                    <div>Cơ xương khớp 3</div>
                                </div>
                            </div>
                            <div className='OutStandingDoctor-customzie'>
                            <div className='customize-border'>
                            <div className='bg-image'></div>
                                    <div>Cơ xương khớp 2</div>
                                    <div>Cơ xương khớp 3</div>
                                </div>
                                </div>
                            <div className='OutStandingDoctor-customzie'>
                            <div className='customize-border'>
                            <div className='bg-image'></div>
                                    <div>Cơ xương khớp 3</div>
                                    <div>Cơ xương khớp 3</div></div>
                            </div>
                            <div className='OutStandingDoctor-customzie'><div className='customize-border'>
                            <div className='bg-image'></div>
                                <div>Cơ xương khớp 4</div>
                                <div>Cơ xương khớp 3</div></div>
                            </div>
                            <div className='OutStandingDoctor-customzie'><div className='customize-border'>
                            <div className='bg-image'></div>
                                <div>Cơ xương khớp 5</div>
                                <div>Cơ xương khớp 3</div></div>
                            </div>
                            <div className='OutStandingDoctor-customzie'><div className='customize-border'>
                            <div className='bg-image'></div>
                                <div>Cơ xương khớp 6</div>
                                <div>Cơ xương khớp 3</div></div>
                            </div>
                        </Slider>
                    </div>
                </div>
                
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
