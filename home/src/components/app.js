import React, {useEffect} from 'react'
import {Container, ButtonGroup} from 'reactstrap'
import { Route, Switch, useHistory, Link } from 'react-router-dom'
import '../styles/index.scss'
import Header from './Header/Header'
import Login from './Login/Login'
import SearchByItem from '../components/SearchByItem/SearchByItem'

const App = () => {
    const history = useHistory();
    useEffect(() => {
        const profile = sessionStorage.getItem('profile');
        // const previousUrl = document.referrer; ////to access different previous domain
        const localHis = history?.location;
        if(!profile) {
            history.push('/login', {from: localHis || "/"});
            // history.push('/login', { from: previousUrl });  //to access different previous domain
        } else {
            history.push(localHis);
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
                        <div>
                            Home Page
                        </div>
                    </Route>
                    <Route path="/searchbyitem" >
                        <SearchByItem />
                    </Route>
                    <Route path="/login" >
                        <Login/>
                    </Route>
                </Switch>
            </Container>
        </div>
    )
}

export default App;