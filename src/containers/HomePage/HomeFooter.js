import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class HomeFooter extends Component {

    render() {

        return (
            <div className='HomeFooter'>
                <p> Click &#8594;  &hearts;  <a target='_blank' href='https://www.facebook.com/Buitrongtan0' >Bùi Trọng Tấn intern </a> &hearts; &#8592; Click </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
