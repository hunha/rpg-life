import React from 'react';

import Activity from './Activity';

const ActivityList = ({ activities }) => {
    return activities.map(p => {
        return <Activity activity={p} key={p._id} />;
    });
};

export default ActivityList;
