import React, {useState, useEffect} from 'react'
import {Link, HashRouter as Router} from 'react-router-dom'

// CSS
import './ProjectList.css'

// Images
import img1 from '../images/01.png'

function ProjectList() {

    const [projects, setProject] =  useState([])

    useEffect(() => {
        setProject([

        {
            key: 1,
            image: img1,
            title: "Recipe Search",
            description: "Search for recipies using an API",
            link: "/project01"            
        }

        ])
    }, []);

    return (

        <ul id="project-list">
            {projects.map(project =>
                <li className="project" key={project.key}>
                    <img src={project.image} alt="screenshot"></img>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <Router>
                        <Link to={project.link}>Link to project</Link>
                    </Router>
                </li>
            )}
            

            {
            //Annoying CSS bug with overflow-x more details on the link
            //https://alexandergottlieb.com/2018/02/22/overflow-scroll-and-the-right-padding-problem-a-css-only-solution
            }
            <li id="last"></li>
        </ul>
    )
}

export default ProjectList
