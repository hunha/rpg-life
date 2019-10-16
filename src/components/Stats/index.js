import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchStats } from '../../services/stat/actions';
import { fetchExpBars } from '../../services/exbBar/actions';

import StatList from './StatList';

import './style.scss';

const STAT_TYPE = {
    MIND: "MIND",
    NEN: "NEN"
}

class Stats extends Component {
    static propTypes = {
        fetchStats: PropTypes.func.isRequired,
        fetchExpBars: PropTypes.func.isRequired,
        stats: PropTypes.array.isRequired,
        expBars: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.handleFetchStats();
        this.handleFetchExpBars();
    }

    componentWillReceiveProps(nextProps) {
    }

    handleFetchStats = () => {
        this.props.fetchStats(() => { });
    };

    handleFetchExpBars = () => {
        this.props.fetchExpBars(() => { });
    };

    render() {
        const { stats, expBars } = this.props;

        return (
            <React.Fragment>
                <div className="stats-container stats-container__mind">
                    <h2 className="stats-container__header">Mind</h2>
                    <StatList stats={stats.filter(s => s.type === STAT_TYPE.MIND)} expBars={expBars} />
                </div>
                <div className="stats-container stats-container__nen">
                    <h2 className="stats-container__header">Nen</h2>
                    <StatList stats={stats.filter(s => s.type === STAT_TYPE.NEN)} expBars={expBars} />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    stats: state.stat.stats,
    expBars: state.expBar.expBars
});

export default connect(
    mapStateToProps,
    { fetchStats, fetchExpBars }
)(Stats);
