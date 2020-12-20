import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import App from '../components/App'

const MainLayout = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" render={props=>(<App {...props}/>)}/>
            </Switch>
        </Router>
    )
}

export default MainLayout