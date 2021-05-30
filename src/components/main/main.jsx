import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from 'pages/homePage/index'
export default function Routes(){
    return(
        <main style ={{minHeight:'80Vh'}}>
            <Switch>
                <Route path='/' component={HomePage}/>
            </Switch>

        </main>
    )
}