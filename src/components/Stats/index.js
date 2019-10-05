import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchStats } from '../../services/stat/actions';

import StatList from './StatList';

import './style.scss';

const STAT_TYPE = {
    MIND: "MIND",
    NEN: "NEN"
}

class Stats extends Component {
    static propTypes = {
        fetchStats: PropTypes.func.isRequired,
        stats: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.handleFetchStats();
    }

    componentWillReceiveProps(nextProps) {
    }

    handleFetchStats = () => {
        this.props.fetchStats(() => { });
    };

    render() {
        const { stats } = this.props;

        return (
            <React.Fragment>
                <div className="stats-container stats-container__mind">
                    <h2 className="stats-container__header">Mind</h2>
                    <StatList stats={stats.filter(s => s.type === STAT_TYPE.MIND)} />
                </div>
                <div className="stats-container stats-container__nen">
                    <h2 className="stats-container__header">Nen</h2>
                    <StatList stats={stats.filter(s => s.type === STAT_TYPE.NEN)} />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    stats: state.stat.stats
});

export default connect(
    mapStateToProps,
    { fetchStats }
)(Stats);
