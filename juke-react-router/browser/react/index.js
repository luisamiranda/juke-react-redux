import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists.js';
import Artist from './components/Artist.js';
import {Router, Route, Link, IndexRoute, IndexRedirect, hashHistory, browserHistory} from 'react-router';


ReactDOM.render( 
    <Router history={hashHistory}>
        <Route path='/' component={AppContainer}>
            <IndexRedirect to='/albums' />
          <Route path='/albums' component={Albums} /> {/* This one is self-closing */}
          <Route path='albums/:albumId' component={Album} />
          <Route path='/artists' component={Artists} />
          <Route path='artists/:artistId' component={Artist} />
        </Route>
    </Router>,
    document.getElementById('app')
);
