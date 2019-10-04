// const activityModel = require('../models/activity');

import activityModel from '../models/activity';

const getActivities = (req, res) => {
    // Query the db, if no errors send all the games to the client
    // Game.find(null, null, { sort: { postDate : 1 } }, (err, games) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(games); // Games sent as json
    // });

    let activies = activityModel.findActivities();

    res.send(activies);
}

export default { getActivities };