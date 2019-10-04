import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

const AccountDetail = ({ account }) => {
  return (
    <div
      className="account-details"
    >
      <div className="account-detail__avatar avatar"></div>
      <p className="account-detail__name">{account.name}</p>
    </div>
  );
};

AccountDetail.propTypes = {
  account: PropTypes.object.isRequired
};

export default connect(
  null,
  { }
)(AccountDetail);
