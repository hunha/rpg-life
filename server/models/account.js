import Datastore from 'nedb-promises';
import config from '../config/config';

const db = new Datastore({ filename: config.DB_ROOT + '/accounts.db', autoload: true });

const insert = (account) => {
    return db.insert(account);
};

const getById = (accountId) => {
    return db.findOne({ _id: accountId });
};

export default { insert, getById };