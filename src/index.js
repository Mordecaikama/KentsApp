import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AppcontextProvider from './Appcontext'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AppcontextProvider>
      <App />
    </AppcontextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
