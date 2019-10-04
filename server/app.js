const express = require('express');
const cors = require('cors');

// const activityRoute = require('./routes/activity');

import activityRoute from './routes/activity';

const app = express();
app.use(cors());

const port = 8001;

// API routes
app.route('/activites')
  .get(activityRoute.getActivities);

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
