import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

const Avatar = ({ account }) => {
    return (
        <div className="account-detail__avatar avatar"></div>
    );
};

Avatar.propTypes = {
    account: PropTypes.object.isRequired
};

export default connect(
    null,
    {}
)(Avatar);
