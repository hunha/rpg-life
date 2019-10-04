import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

const Activity = ({ activity }) => {
  return (
    <div
      className="activity-item"
    >
      <div className="activity-item__storyboard">

      </div>
      <div className="activity-item__battle-bar">
        <span className="battle-bar__title">{activity.title}</span>
        <span className="battle-bar__title">{activity.title}</span>
      </div>
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.object.isRequired
};

export default connect(
  null,
  {}
)(Activity);
