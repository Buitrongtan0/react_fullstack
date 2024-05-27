import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialy from './Section/Specialy';
import OutStandingDoctor from './Section/OutStandingDoctor'
import MedicalFacilyti from './Section/MediacalFacility'
import HanBock from './Section/HanBock';
import About from './Section/About'
import HomeFooter from './HomeFooter';
import './HomePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slice } from 'lodash';
class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speend: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        return (
            <div>
                <HomeHeader />
                <Specialy settings={settings} />
                <MedicalFacilyti settings={settings} />
                <OutStandingDoctor settings={settings} />
                <HanBock settings={settings} />
                <About />
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
