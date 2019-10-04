import React from 'react';

import Activity from './Activity';

const ActivityList = ({ activities }) => {
    return activities.map(p => {
        return <Activity activity={p} key={p.id} />;
    });
};

export default ActivityList;