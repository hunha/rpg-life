import express from 'express';
import cors from 'cors';

import activityRoute from './routes/activity';
import statRoute from './routes/stat';
import accountRoute from './routes/account';
import expBarRoute from './routes/expBar';

const app = express();
app.use(cors());
app.use(express.json());

const port = 8001;

app.route('/activites')
    .get(activityRoute.getActivities)
    .post(activityRoute.insertActivity);

app.route('/stats')
    .get(statRoute.getStats)
    .post(statRoute.insertStat);

app.route('/exp-bars')
    .post(expBarRoute.insertExpBar);

app.route('/exp-bars/:key')
    .get(expBarRoute.getByKey);

app.route('/account')
    .get(accountRoute.getCurrentAccount);

app.route('/accounts')
    .post(accountRoute.insertAccount);

app.listen(port, () => {
    console.log(`[products] API listening on port ${port}.`);
});
