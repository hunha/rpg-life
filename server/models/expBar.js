import Datastore from 'nedb-promises';
import config from '../config/config';

const db = new Datastore({ filename: config.DB_ROOT + '/exp_bars.db', autoload: true });

const find = () => {
    return db.find({});
};

const getByKey = (key) => {
    return db.findOne({ key: key });
};

const insert = (expBar) => {
    return db.insert(expBar);
};

export default { find, getByKey, insert };