import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Main from './components/Main.js';
import showbyid from './components/showbyid.js';
//import UserDetail from './components/userdetail.js';

const router=(
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">show all movies</Link></li>
            <li><Link to="/movies/:id">showbyid</Link></li>
        </ul>
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/movies" component={Main}/>
            <Route path="/movies/:id" component={showbyid}/>
            
        </div>
    </Router>
)


ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
