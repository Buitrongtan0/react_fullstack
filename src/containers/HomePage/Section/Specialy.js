import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialy.scss'
import { FormattedMessage } from 'react-intl';
import slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
class Specialy extends Component {

    render() {

        return (
            <div className='section-share section-specialy'>
                <div className='Section-container'>
                    <div className='Section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>xem thêm</button>
                    </div>
                    <div  className='Section-body'>
                        <Slider {...this.props.settings} >
                            <div className='Specialy-customzie'>
                                
                                <div className='bg-image'></div>
                                    <div>Cơ xương khớp 1</div>
                            </div>
                            <div className='Specialy-customzie'>
                            <div className='bg-image'></div>
                                <div>Cơ xương khớp 2</div>
                             </div>
                            <div className='Specialy-customzie'>
                            <div className='bg-image'></div>
                                <div>Cơ xương khớp 3</div>
                            </div>
                            <div className='Specialy-customzie'>
                            <div className='bg-image'></div>
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className='Specialy-customzie'>
                            <div className='bg-image'></div>
                                <div>Cơ xương khớp 5</div>
                            </div>
                            <div className='Specialy-customzie'>
                            <div className='bg-image '></div>
                                <div>Cơ xương khớp 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialy);
