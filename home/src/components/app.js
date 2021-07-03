import React, {useEffect} from 'react'
import {Container, ButtonGroup} from 'reactstrap'
import {useDispatch} from 'react-redux'
import { Route, Switch, useHistory, Link, Redirect } from 'react-router-dom'
import '../styles/index.scss'
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import Login from './Login/Login'
import SearchByItem from '../components/SearchByItem/SearchByItem'
import {signin} from './Login/LoginAction'

var createHost = require('../common/crossdomain/host');
var createGuest = require('../common/crossdomain/guest');

// var storageHost = createHost([
//     // {
//     //     origin: 'http://localhost:4000',
//     //     allowedMethods: ['get', 'set', 'getSession', 'remove'],
//     // },
//     {
//         origin: 'http://localhost:4001',
//         allowedMethods: ['get', 'getSession'],
//     },
// ]);

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        var storageHost = createHost([
            {
                origin: 'http://localhost:4000',
                allowedMethods: ['get', 'set', 'getSession', 'remove'],
            },
            {
                origin: 'http://localhost:4001',
                allowedMethods: ['get', 'getSession'],
            },
        ]);
        const profile = sessionStorage.getItem('profile');
        const storeNumber = localStorage.getItem('storenumber')
        // const previousUrl = document.referrer; ////to access different previous domain
        const localHis = history?.location;
        if(!profile) {
            history.push('/login', {from: localHis || "/"});
            // history.push('/login', { from: previousUrl });  //to access different previous domain
        } else {
            dispatch(signin(profile, history, true));
            // history.push(localHis);
        }   
    },[]);
    return(
        <div className="home">
            <Header/>
            <Container>
                <ButtonGroup>
                    <Link to="/" >Home</Link>{'     '}
                    <Link to="/searchbyitem" >Search By Item</Link>
                </ButtonGroup>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/searchbyitem" >
                        <SearchByItem />
                    </Route>
                    <Route path="/login" >
                        <Login/>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Container>
        </div>
    )
}

export default App;