import expBarModel from '../models/expBar';

const getExpBars = (req, res) => {
    expBarModel.find().then((expBars, err) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            expBars: expBars
        });
    }).catch((err) => {
        if (err) {
            return res.send(err);
        }
    });
};

const getByKey = (req, res) => {
    expBarModel.getByKey(req.params.key).then((expBar, err) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            expBar: expBar
        });
    }).catch((err) => {
        if (err) {
            return res.send(err);
        }
    });
};

const insertExpBar = (req, res) => {
    expBarModel.insert(req.body.expBar).then((err, expBar) => {
        if (err) {
            res.send(err);
        }

        res.send(expBar);
    }).catch((err) => {
        if (err) {
            res.send(err);
        }
    });
};

export default { getExpBars, getByKey, insertExpBar };