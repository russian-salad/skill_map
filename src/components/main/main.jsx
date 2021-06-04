import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from 'pages/homePage/index'
import specPage from 'pages/specPage/specPage'
import './main.css'
export default function Routes(){
    return(
        <main style ={{minHeight:'80Vh'}}>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/:pecialization' component={specPage}/>
            </Switch>

        </main>
    )
}