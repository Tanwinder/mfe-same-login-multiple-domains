import React from 'react'
import { Container } from 'reactstrap'
import '../styles/index.scss'
import Header from './Header/Header'

const App = () => {
    return(
        <div className="orders">
            <Header/>
            <Container>
            <div>
                Orders
            </div>
            </Container>
        </div>
    )
}

export default App;