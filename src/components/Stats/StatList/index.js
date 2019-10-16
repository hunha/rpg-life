import React from 'react';

import Stat from './Stat';

const StatList = ({ stats, expBars }) => {
    return stats.map(stat => {
        const expBar = expBars.filter(e => e.key === stat.expBarKey)[0];

        return <Stat stat={stat} expBar={expBar} key={stat._id} />;
    });
};

export default StatList;
