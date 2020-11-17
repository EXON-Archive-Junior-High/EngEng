import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from "react-router-dom"
import './css/index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
      <Switch>
        <Route path="/" exact={true} component={App} />
      </Switch>
  </React.StrictMode>,
  document.getElementById('root')
);