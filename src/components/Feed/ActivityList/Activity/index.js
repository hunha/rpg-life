import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Activity = ({ activity }) => {
  return (
    <div
      className="activity-item"
    >
      <p className="activity-item__title">{activity.title}</p>
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.object.isRequired
};

export default connect(
  null,
  { }
)(Activity);