import activityModel from '../models/activity';

const ACCOUNT_ID = 'PJuXArCP0fbs5g7e'; // TODO: Should use login and session.

const getActivities = (req, res) => {
    activityModel.find(ACCOUNT_ID).then((activities, err) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            activities: activities
        });
    }).catch((err) => {
        if (err) {
            return res.send(err);
        }
    });
};

const insertActivity = (req, res) => {
    activityModel.insert(req.body.activity).then((err, activity) => {
        if (err) {
            res.send(err);
        }

        res.send(activity);
    }).catch((err) => {
        if (err) {
            res.send(err);
        }
    });
};

export default { getActivities, insertActivity };