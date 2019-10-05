import React from 'react';

import Stat from './Stat';

const StatList = ({ stats }) => {
    return stats.map(s => {
        return <Stat stat={s} key={s._id} />;
    });
};

export default StatList;
