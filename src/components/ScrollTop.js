import React from 'react'
import {Link, HashRouter as Router} from 'react-router-dom'

function ScrollTop() {

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <Router>
            <Link id="backtotop" onClick={scrollToTop}>
                Back to top
            </Link>            
        </Router>
    )
}

export default ScrollTop
