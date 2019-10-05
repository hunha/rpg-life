import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss'

const Stat = ({ stat }) => {
    return (
        <div
            className="stat-block"
        >
            <a href="#" className="stat-item">
                <div className="stat-item--icon">
                    <span></span>
                </div>
                <div className="stat-item-bar">
                    <div className="stat-item--info">
                        <p className="item-info--name">{stat.title}:</p>
                        <p className="item-info--lv">{stat.lv}</p>
                    </div>
                    <div className="stat-item--progress progress">
                        <div className="progress-line-timer"></div>
                        <div className="progress-line"></div>
                    </div>
                </div>
            </a>
        </div>
    );
};

Stat.propTypes = {
    stat: PropTypes.object.isRequired
};

export default connect(
    null,
    {}
)(Stat);
