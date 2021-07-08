import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DetailState from './context/Details/DetailState'
import Description from './component/pages/Description'
import Home from './component/pages/Home'
const App = () => {
  return (
    <DetailState>
      <Router>
        <div className = 'container'>
          <Switch>
            <Route exact path = '/' component ={Home}/>
            <Route exact path={`/details/:id`} component={Description} />
          </Switch>
        </div>
      </Router>
    </DetailState>
  )
}

export default App

