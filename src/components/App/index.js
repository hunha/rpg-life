import React from 'react';
import './style.css';

import ActivityList from '../ActivityFeed/ActivityList'

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <ActivityList />
      </div>
      <div className="col-md-8">
        Activity list
    </div>
    </div>
  </div>
);

export default App;
