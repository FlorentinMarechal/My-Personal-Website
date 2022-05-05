import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCards.css';
import githubLogo from '../public/image/github-logo.png'

const projects = [
    {id: 1,name: "Chibi Cafe", description: "Une partie vitrine et une boutique pour un concept store vendant des sablés personnalisés", link: "https://github.com/FlorentinMarechal/chibi-cafe"},
    {id: 2,name: "Bot Denis", description: "Un bot discord permetant de lancer un vote afin de parier sur les épreuves de Koh Lanta", link: "https://github.com/FlorentinMarechal/discord-bot-kl"},
    {id: 3,name: "Mon site", description: "Vous êtes dessus, un site vitrine fait avec React", link: "https://github.com/FlorentinMarechal/My-Personal-Website"},
    {id: 4,name: "Portfolio", description: "Une API REST pour gérer une collection de jeux de sociétés", link: "https://github.com/FlorentinMarechal/portfolio"},
]

export default function ProjectCards() {

    function overCard(e) {
        if(e.target.className === 'card') {
            e.target.className = 'card-hover';
        }
    }

    function outCard(e) {
        if(e.target.className === 'card-hover') {
            e.target.className = 'card';
        }
    }

  return (
    <div className='project-cards'>
        <div className='cards-container'>
            {projects.map(project => (
                <div className='card'
                     onMouseOver={overCard}
                     onMouseOut={outCard}
                     key={project.id}
                >
                    <div className='card-name'>
                        {project.name}
                    </div>
                    <div className='card-description'>
                        {project.description}
                    </div>
                    <div className='card-link'>
                        <Link to={project.link}>
                            <img src={githubLogo} alt="lien du projet" className='github-logo' />
                        </Link> 
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
