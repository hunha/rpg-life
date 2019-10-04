import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCurrentAccount } from '../../services/account/actions';

import AccountDetails from './AccountDetails';

class Account extends Component {
    static propTypes = {
        fetchCurrentAccount: PropTypes.func.isRequired,
        account: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.handleFetchCurrentAccount();
    }

    componentWillReceiveProps(nextProps) {
    }

    handleFetchCurrentAccount = () => {
        this.props.fetchCurrentAccount(() => { });
    };

    render() {
        const { account } = this.props;

        return (
            <React.Fragment>
                <div className="account-container">
                    <AccountDetails account={account} />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account.account
});

export default connect(
    mapStateToProps,
    { fetchCurrentAccount }
)(Account);
