import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchActivities } from '../../services/feed/actions';
import Spinner from '../Spinner';

import ActivityList from './ActivityList';

class Shelf extends Component {
    static propTypes = {
        fetchActivities: PropTypes.func.isRequired,
        activities: PropTypes.array.isRequired
    };

    state = {
        isLoading: false
    };

    componentDidMount() {
        this.handleFetchProducts();
    }

    handleFetchProducts = () => {
        this.setState({ isLoading: true });
        this.props.fetchActivities(() => {
            this.setState({ isLoading: false });
        });
    };

    componentWillReceiveProps(nextProps) {
        this.handleFetchProducts();
    }

    render() {
        const { activities } = this.props;
        const { isLoading } = this.state;

        return (
            <React.Fragment>
                {isLoading && <Spinner />}
                <div className="feed-container">
                    <ActivityList activities={activities} />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    activities: state.feed.activities
});

export default connect(
    mapStateToProps,
    { fetchActivities }
)(Shelf);
