import React from 'react';

import Feed from '../Feed';
import Account from '../Account';
import Stats from '../Stats';

import './style.scss';

const App = () => (
    <React.Fragment>
        <div className='container'>
            <div className='left-content'>
                <div className='sidebar'>
                    <Account />
                    <Stats />
                </div>
            </div>
            <div className='main-content ml-20'>
                <Feed />
            </div>
        </div>
    </React.Fragment >
);

export default App;
