import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

// Main Components

function App() {
  return (
    <Router basename="/">
      <Route path="/home" component={Home} />
    </Router>
  )
}

export default App