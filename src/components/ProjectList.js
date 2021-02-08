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
            description: "Basic project made with React where you can search for recipes using an API powered by EDAMAN.",
            link: "/project01",
        }
        ])
    }, []);

    return (
        <ul id="project-list">
            {projects.map(project =>
                <li className="project" key={project.key}>
                    <img src={project.image} alt="screenshot"></img>
                    <article className="project-article">
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>

                        <Router>
                            <Link className="project-link" to={project.link}>Link to project</Link>
                        </Router>
                    </article>
                </li>
            )}
            

            {
            //Annoying CSS bug with overflow-x more details on the link
            //https://alexandergottlieb.com/2018/02/22/overflow-scroll-and-the-right-padding-problem-a-css-only-solution
            }
        </ul>
    )
}

export default ProjectList
