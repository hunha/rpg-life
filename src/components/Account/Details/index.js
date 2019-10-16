import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

const Detail = ({ account }) => {
    return (
        <div
            className="account-details"
        >
            <p className="point-block">
                <span className="name">Name:</span>
                <span className="value">{account.name}</span>
            </p>
        </div>
    );
};

Detail.propTypes = {
    account: PropTypes.object.isRequired
};

export default connect(
    null,
    {}
)(Detail);
