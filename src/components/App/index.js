import React from 'react';

import Feed from '../Feed';

import './style.scss';

const App = () => (
  <React.Fragment>
    <div className='container'>
      <div className='row'>
        <div className='account-details col-sm-3'>

        </div>
        <div className='main-content col-sm-9'>
          <Feed />
        </div>
      </div>
    </div>
  </React.Fragment >
);

export default App;
