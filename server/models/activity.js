var Datastore = require('nedb');
var db = new Datastore({ filename: '../db/rpglife.db', autoload: true });

const insertActivity = (activity, callback) => {
    db.insert(activity, callback);
};

const findActivities = (accountId) => {
    return [
        {
            id: 1,
            title: 'Write 3 Ging Mindset'
        },
        {
            id: 2,
            title: 'Write 3 Ideas'
        }
    ]
};

export default { insertActivity, findActivities };