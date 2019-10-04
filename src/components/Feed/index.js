import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchActivities } from '../../services/feed/actions';

import Spinner from '../Spinner';
import ActivityList from './ActivityList';

import './style.scss';

class Feed extends Component {
  static propTypes = {
    fetchActivities: PropTypes.func.isRequired,
    activities: PropTypes.array.isRequired
  };

  state = {
    isLoading: false
  };

  componentDidMount() {
    this.handleFetchActivities();
  }

  componentWillReceiveProps(nextProps) {
  }

  handleFetchActivities = () => {
    this.setState({ isLoading: true });
    this.props.fetchActivities(() => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { activities } = this.props;
    const { isLoading } = this.state;

    return (
      <React.Fragment>
        {isLoading && <Spinner />}
        <div className="shelf-container">
          <ActivityList activities={activities} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.shelf.activities
});

export default connect(
  mapStateToProps,
  { fetchActivities }
)(Feed);
