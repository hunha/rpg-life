import Datastore from 'nedb-promises';
import config from '../config/config';

const db = new Datastore({ filename: config.DB_ROOT + '/stats.db', autoload: true });

const insert = (stat) => {
    return db.insert(stat);
};

const find = (accountId, type) => {
    if (type) {
        return db.find({ accountId: accountId, type: type });
    }

    return db.find({ accountId: accountId });
};

export default { insert, find };