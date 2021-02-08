import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

// Main Components
import Home from './main components/Home'

function App() {
  return (
    <Router basename="/">
      <Route path="/home" component={Home} />
    </Router>
  )
}

export default App