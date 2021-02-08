import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

// Main Components
import Home from './main components/Home'
import Project01 from './main components/Project01'

function App() {
  return (
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/project01" component={Project01} />
    </Router>
  )
}

export default App