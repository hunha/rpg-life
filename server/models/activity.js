import Datastore from 'nedb-promises';
import config from '../config/config';

const db = new Datastore({ filename: config.DB_ROOT + '/activities.db', autoload: true });

const insert = (activity) => {
    return db.insert(activity);
};

const find = (accountId) => {
    return db.find({ accountId: accountId });
};

export default { insert, find };