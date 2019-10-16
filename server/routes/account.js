import accountModel from '../models/account';

const ACCOUNT_ID = 'PJuXArCP0fbs5g7e'; // TODO: Should use login and session.

const getCurrentAccount = (req, res) => {
    accountModel.getById(ACCOUNT_ID).then((account, err) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            account: account
        });
    }).catch((err) => {
        if (err) {
            return res.send(err);
        }
    });
};

const insertAccount = (req, res) => {
    accountModel.insert(req.body.account).then((err, account) => {
        if (err) {
            res.send(err);
        }

        res.send(account);
    }).catch((err) => {
        if (err) {
            res.send(err);
        }
    });
};

export default { getCurrentAccount, insertAccount };