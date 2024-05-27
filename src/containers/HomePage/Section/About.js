import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class About extends Component {

    render() {

        return (
            <div className='section-share section-About'>
                <div className='section-About-header'>
                        Kiến thức It
                </div>
                <div className='section-About-content'>
                    <div className='content-left'>
                    <iframe width="100%" height="480"
                        src="https://www.youtube.com/embed/ECm7YNGQ4QQ"
                        title="Tổng hợp kiến thức Công Nghệ Thông Tin | Tri Thức Nhân Loại"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                   <p>Làm việc trong môi trường làm việc chuyên nghiệp, năng động nâng cao kiến thức, kinh nghiệm chuyên môn cao của bản thân
Không ngừng học hỏi để trở thành một developer chuyên môn cao</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
