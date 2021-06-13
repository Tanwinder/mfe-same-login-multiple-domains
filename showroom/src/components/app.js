import React, {useEffect} from 'react'
import { Container, Jumbotron } from 'reactstrap'
import '../styles/index.scss'
import Header from './Header/Header'
import Purchase from './Purchase/Purchase'

const App = () => {
    useEffect(() => {
        if(!sessionStorage.getItem('profile')) {
            window.location.href = "http://localhost:4000/login?";
        }
    }, [])
    return(
        <div className="showroom">
            <Header/>
            <Jumbotron>
                <Container>
                    <Purchase />
                </Container>
            </Jumbotron>
            
        </div>
    )
}

export default App;