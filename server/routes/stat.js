import statModel from '../models/stat';

const ACCOUNT_ID = 'PJuXArCP0fbs5g7e'; // TODO: Should use login and session.

const getStats = (req, res) => {
    statModel.find(ACCOUNT_ID, req.query.type).then((stats, err) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            stats: stats
        });
    }).catch((err) => {
        if (err) {
            return res.send(err);
        }
    });
};

const insertStat = (req, res) => {
    statModel.insert(req.body.stat).then((err, stat) => {
        if (err) {
            res.send(err);
        }

        res.send(stat);
    }).catch((err) => {
        if (err) {
            res.send(err);
        }
    });
};

export default { getStats, insertStat };